import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    // Elevation is Android only (shadow)
    elevation: 4,
    justifyContent: "center",
    marginHorizontal: 24,
    marginTop: 36,
    padding: 16,
    // Shadows are ios
    shadowColor: "#000",
    shadowOffset: {
      height: 4,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
});

const Card = ({ children }) => <View style={styles.card}>{children}</View>;

export default Card;
