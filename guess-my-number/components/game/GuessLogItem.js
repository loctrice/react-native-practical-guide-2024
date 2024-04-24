import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
  itemText: {
    fontFamily: "open-sans",
  },
  listItem: {
    backgroundColor: Colors.accent500,
    borderColor: Colors.primary800,
    borderRadius: 40,
    borderWidth: 1,
    elevation: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    padding: 12,
    shadowColor: "black",
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: "100%",
  },
});
const GuessLogItem = ({ guess, index }) => (
  <View style={styles.listItem}>
    <Text style={styles.itemText}>{`#${index}`}</Text>
    <Text style={styles.itemText}>Opponent Guess: {guess}</Text>
  </View>
);

export default GuessLogItem;
