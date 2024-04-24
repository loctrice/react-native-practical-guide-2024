import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontFamily: "open-sans",
    fontSize: 24,
  },
});

const InstructionText = ({ children, style }) => (
  <Text style={[styles.instructionText, style]}>{children}</Text>
);

export default InstructionText;
