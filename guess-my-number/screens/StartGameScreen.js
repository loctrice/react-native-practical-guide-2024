import { Alert, StyleSheet, TextInput, View } from "react-native";
import Card from "../components/ui/Card";
import Colors from "../constants/colors";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import { useState } from "react";

const MinimumNumber = 0;
const MaximumNumber = 99;

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  numberInput: {
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    fontSize: 32,
    fontWeight: "bold",
    height: 50,
    marginVertical: 8,
    textAlign: "center",
    width: 50,
  },
  rootContainer: {
    alignItems: "center",
    flex: 1,
    marginTop: 100,
  },
});

// eslint-disable-next-line max-lines-per-function
const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (inputText) => {
    setEnteredNumber(inputText.replace(/[^0-9]/gu, ""));
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber, 10);

    if (
      isNaN(chosenNumber) ||
      chosenNumber <= MinimumNumber ||
      chosenNumber > MaximumNumber
    ) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99.", [
        {
          onPress: resetInputHandler,
          style: "destructive",
          text: "Okay",
        },
      ]);
    }

    onPickNumber(enteredNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;
