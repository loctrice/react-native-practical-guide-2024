import { Alert, FlatList, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Card from "../components/ui/Card";
import GuessLogItem from "../components/game/GuessLogItem";
import InstructionText from "../components/ui/InstructionText";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  instructionText: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  screen: {
    flex: 1,
    padding: 24,
  },
});

const generateRandomNumber = (min, max, exclude) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  }
  return randomNumber;
};
let minBoundary = 1;
let maxBoundary = 100;

// eslint-disable-next-line max-lines-per-function
const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [rounds, setRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === parseInt(userNumber, 10)) {
      onGameOver(rounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  // eslint-disable-next-line max-statements
  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { style: "cancel", text: "Sorry!" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = maxBoundary >= currentGuess ? currentGuess : maxBoundary;
    } else {
      minBoundary =
        minBoundary <= currentGuess ? currentGuess + 1 : minBoundary;
    }

    const newRandomNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRandomNumber);
    setRounds((prevRounds) => [newRandomNumber, ...prevRounds]);
  };

  const guessRoundsListLength = rounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            {/* eslint-disable-next-line no-invalid-this */}
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <AntDesign name="minus" size={24} />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            {/* eslint-disable-next-line no-invalid-this */}
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <AntDesign name={"plus"} size={24} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={rounds}
          renderItem={(itemData) => (
            <GuessLogItem
              index={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;
