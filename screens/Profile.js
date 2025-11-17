import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";

const Profile = () => {
  const email = auth.currentUser?.email;
  const username = email ? email.split("@")[0] : "";
  return (
    <View style={styles.rootContainer}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
        }}
        style={styles.profileImage}
      />

      <Text style={styles.nameText}>{username}</Text>
      <Text style={styles.emailText}>{auth.currentUser?.email}</Text>

      <Pressable
        style={styles.logoutButton}
        onPress={() => {
          signOut(auth)
            .then(() => console.log("User signed out"))
            .catch((err) => console.log(err));
        }}
      >
        <Text style={styles.logoutText}>Log Out</Text>
      </Pressable>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F6EE",
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#DDCFCB",
  },
  nameText: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 4,
  },
  emailText: {
    fontSize: 14,
    color: "gray",
    marginBottom: 24,
  },
  logoutButton: {
    backgroundColor: "#EE6983",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginTop: 16,
  },
  logoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
