import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

const styles = StyleSheet.create({
  highlight: {
    color: Colors.primary500,
    fontFamily: "open-sans-bold",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  imageContainer: {
    borderColor: Colors.primary800,
    borderRadius: 150,
    borderWidth: 3,
    height: 300,
    margin: 36,
    overflow: "hidden",
    width: 300,
  },
  rootContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    marginBottom: 24,
    textAlign: "center",
  },
});
const GameOverScreen = ({ numberOfRounds, userNumber, onRestart }) => (
  <View style={styles.rootContainer}>
    <Title>Game Over!</Title>
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require("../assets/images/success.png")}
      />
    </View>
    <View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{numberOfRounds}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
    </View>
  </View>
);

export default GameOverScreen;
