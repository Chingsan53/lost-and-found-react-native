import { StyleSheet, Text, View } from "react-native";

const Marking = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>This is the Marking component</Text>
    </View>
  );
};

export default Marking;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
