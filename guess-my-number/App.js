import * as SplashScreen from "expo-splash-screen";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { useCallback, useState } from "react";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

const styles = StyleSheet.create({
  backgroundImage: {
    opacity: 0.15,
  },
  container: {
    flex: 1,
  },
});

SplashScreen.preventAutoHideAsync();

// eslint-disable-next-line max-statements,max-lines-per-function
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [numberOfRounds, setNumberOfRounds] = useState(0);

  const [fontsLoaded, fontError] = useFonts({
    // eslint-disable-next-line no-undef
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    // eslint-disable-next-line no-undef
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const startGameHandler = (selectedNumber) => {
    setGameIsOver(false);
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numberOfGuesses) => {
    setNumberOfRounds(numberOfGuesses);
    setGameIsOver(true);
  };

  const startNewGameHandler = () => {
    setGameIsOver(true);
    setUserNumber(null);
    setNumberOfRounds(0);
  };

  let screen = <StartGameScreen onPickNumber={startGameHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        numberOfRounds={numberOfRounds}
        onRestart={startNewGameHandler}
      />
    );
  }

  /*
   * Screen = (
   *   <GameOverScreen
   *     userNumber={userNumber}
   *     numberOfRounds={numberOfRounds}
   *     onRestart={startNewGameHandler}
   *   />
   * );
   */
  return (
    <>
      <StatusBar style="auto" />
      <LinearGradient
        style={styles.container}
        colors={[Colors.primary700, Colors.accent500]}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.container}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}
