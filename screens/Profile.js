import { StyleSheet, Text, View } from "react-native";

const Profile = () => {
  return (
    <View style={styles.rootContainer}>
      <Text>This is Profile Component</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
