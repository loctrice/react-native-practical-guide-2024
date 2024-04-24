import { Pressable, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#5e0acc",
    borderRadius: 6,
    margin: 8,
    padding: 8,
  },
  goalText: {
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});

const GoalItem = ({ item, onDeleteItem }) => {
  const deleteGoalHandler = () => {
    onDeleteItem(item.id);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={deleteGoalHandler}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item.value}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;
