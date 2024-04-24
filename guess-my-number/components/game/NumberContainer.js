import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: Colors.accent500,
    borderRadius: 8,
    borderWidth: 4,
    justifyContent: "center",
    margin: 24,
    padding: 24,
  },
  numberText: {
    color: Colors.accent500,
    fontFamily: "open-sans-bold",
    fontSize: 36,
  },
});

const NumberContainer = ({ children }) => (
  <View style={styles.container}>
    <Text style={styles.numberText}>{children}</Text>
  </View>
);

export default NumberContainer;
