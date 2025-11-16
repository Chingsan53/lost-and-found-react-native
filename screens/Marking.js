import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Constants from "expo-constants";

const Marking = () => {
  const [nickname, setNickname] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const GOOGLE_KEY = Constants.expoConfig.extra.googleMapsApiKey;

  const fetchPlaces = async (input) => {
    const resp = await fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${GOOGLE_KEY}&components=country:us`
    );
    const data = await resp.json();
    return data.predictions;
  };

  const handleChange = async (text) => {
    setQuery(text);
    if (text.length > 2) {
      const results = await fetchPlaces(text);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.scroll}
      enableOnAndroid={true}
      extraScrollHeight={60}
      keyboardShouldPersistTaps="always"
    >
      <View style={styles.rootContainer}>
        <Text style={styles.titleText}>Mark Found Item</Text>
        <Text style={styles.subtitleText}>
          Help someone reclaim what they've lost.
        </Text>

        {/* Nickname */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Nickname</Text>
          <TextInput
            style={styles.input}
            value={nickname}
            onChangeText={setNickname}
            placeholder="Don't use your real name"
          />
        </View>

        {/* Item location */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Item Location</Text>
          <View style={{ position: "relative" }}>
            <TextInput
              style={styles.input}
              placeholder="Enter address"
              value={query}
              onChangeText={handleChange}
            />

            {suggestions.length > 0 && (
              <View style={styles.suggestionBox}>
                {suggestions.map((item) => (
                  <Pressable
                    key={item.place_id}
                    onPress={() => {
                      setAddress(item.description);
                      setQuery(item.description);
                      setSuggestions([]);
                    }}
                  >
                    <Text style={styles.suggestionText}>
                      {item.description}
                    </Text>
                  </Pressable>
                ))}
              </View>
            )}
          </View>

          {/* Optional button */}
          <Pressable style={styles.mapButton}>
            <Text style={styles.mapButtonText}>📍 Select on Map</Text>
          </Pressable>
        </View>

        {/* Description */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.textArea}
            value={description}
            onChangeText={setDescription}
            placeholder="Describe what you found..."
            multiline
            maxLength={200}
          />
        </View>

        {/* Contact */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Contact Information</Text>
          <TextInput
            style={styles.input}
            value={contact}
            onChangeText={setContact}
            placeholder="Email or phone"
            keyboardType="email-address"
          />
        </View>

        <Pressable style={styles.submitButton}>
          <Text style={styles.submitText}>Submit</Text>
        </Pressable>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Marking;

const styles = StyleSheet.create({
  scroll: {
    paddingTop: 56,
    flexGrow: 1,
    padding: 20,
    paddingBottom: 80,
  },
  rootContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 4,
  },
  subtitleText: {
    fontSize: 14,
    color: "gray",
    marginBottom: 24,
  },
  fieldContainer: {
    marginBottom: 18,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#D9CFC7",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    backgroundColor: "#FFF",
  },
  textArea: {
    borderWidth: 1,
    borderColor: "#D9CFC7",
    borderRadius: 12,
    padding: 16,
    fontSize: 15,
    height: 120,
    textAlignVertical: "top",
    backgroundColor: "#FFF",
  },
  mapButton: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#F3E4DA",
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  mapButtonText: {
    fontSize: 14,
  },
  submitButton: {
    backgroundColor: "#EE6983",
    paddingVertical: 14,
    alignItems: "center",
    borderRadius: 18,
    marginTop: 20,
  },
  submitText: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
  },
  suggestionBox: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#D9CFC7",
    borderRadius: 10,
    marginTop: 4,
    paddingVertical: 6,
  },
  suggestionText: {
    padding: 10,
    fontSize: 15,
  },
});
