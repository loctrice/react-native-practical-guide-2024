import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 8,
    width: 100,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    width: "60%",
  },
  image: {
    height: 100,
    margin: 100,
    width: 100,
  },
  inputContainer: {
    alignItems: "center",
    backgroundColor: "#311b6b",
    flex: 1,
    justifyContent: "center",
  },
  textInput: {
    backgroundColor: "#e4d0ff",
    borderColor: "#e4d0ff",
    borderRadius: 6,
    borderWidth: 1,
    color: "#120438",
    padding: 16,
    width: "70%",
  },
});

const GoalInput = ({ onAddGoal, visible, onCloseModal }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal("");
    onCloseModal();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          onChangeText={goalInputHandler}
          placeholder="Your course goal!"
          style={styles.textInput}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color="#f31282" title="Cancel" onPress={onCloseModal} />
          </View>
          <View style={styles.button}>
            <Button color="#b180f0" onPress={addGoalHandler} title="Add Goal" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
