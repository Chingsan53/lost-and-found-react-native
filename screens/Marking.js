import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const Marking = () => {
  const [text, onChangeText] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  return (
    <View style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Mark your found item</Text>
      </View>
      <View style={styles.informationContainer}>
        <Text style={styles.informationText}>Nickname </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          autoCapitalize="words"
          placeholder="Don't use your real name"
        />
      </View>
      <View style={styles.informationContainer}>
        <Text style={styles.informationText}>Item location </Text>
        <TextInput
          style={styles.input}
          onChangeText={setAddress}
          value={address}
          placeholder=""
        />
      </View>
      <View style={styles.informationContainer}>
        <Text style={styles.informationText}>Description </Text>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          style={styles.infoTextInput}
          onChangeText={setDescription}
          value={description}
          placeholder="Describe what you found..."
        />
      </View>
      <View style={styles.informationContainer}>
        <Text style={styles.informationText}>Contact Information</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setContact}
          value={contact}
          placeholder=""
        />
      </View>
      <View style={styles.submitButton}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Marking;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: 56,
    alignItems: "flex-start",
    paddingLeft: 20,
  },
  titleText: {
    fontWeight: 500,
    fontSize: 28,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    borderColor: "#D9CFC7",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 15,
  },
  informationContainer: {
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "flex-start",
  },
  informationText: {
    fontSize: 16,
  },
  infoTextInput: {
    padding: 10,
    borderColor: "#D9CFC7",
    borderWidth: 1,
    margin: 12,
    borderRadius: 15,
    height: 100,
    width: 250,
  },

  button: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#EE6983",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: 600,
  },
});
