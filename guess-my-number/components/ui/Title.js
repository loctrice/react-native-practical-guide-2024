import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  title: {
    borderColor: "white",
    borderWidth: 2,
    color: "white",
    fontFamily: "open-sans-bold",
    fontSize: 24,
    padding: 12,
    textAlign: "center",
  },
});
const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;
export default Title;
