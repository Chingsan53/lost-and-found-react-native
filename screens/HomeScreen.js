import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission denied");
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    })();
  }, []);

  if (!location) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
        <Text style={styles.loadingText}>Getting Location...</Text>
      </View>
    );
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.mapContainer}>
        <MapView
          initialRegion={{
            // latitude: 34.111488,
            // longitude: -118.2826496,
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          showsUserLocation={true}
          followsUserLocation={true}
          style={styles.map}
        >
          <Marker
            coordinate={{
              latitude: 33.828635,
              longitude: -117.947686,
            }}
          >
            <Ionicons name="umbrella" size={28} color="red" />
          </Marker>
        </MapView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  loading: {
    paddingTop: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 600,
  },
});
