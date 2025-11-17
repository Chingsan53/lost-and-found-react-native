import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import * as Location from "expo-location";
import { Ionicons } from "@expo/vector-icons";
import { db } from "../Firebase/firebaseConfig";
import { collection, getDocs, onSnapshot } from "firebase/firestore";

const HomeScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission denied");
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);

      // 🌍 REAL-TIME LISTENER FOR MARKERS
      const unsub = onSnapshot(
        collection(db, "publicFoundItems"),
        (snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setMarkers(data);
        }
      );

      // cleanup listener when screen unmounts
      return () => unsub();
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
          key={location.coords.latitude}
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
          {markers.map((m) => (
            <Marker
              key={m.id}
              coordinate={{ latitude: m.lat, longitude: m.lng }}
            >
              <Ionicons name="logo-reddit" size={28} color="red" />
              <Callout tooltip>
                <View style={styles.calloutContainer}>
                  <View style={styles.calloutCard}>
                    <Text style={styles.calloutTitle}>{m.nickname}</Text>

                    <Text style={styles.calloutDescription}>
                      Found: {m.description || "No description"}
                    </Text>

                    {m.contact ? (
                      <Text style={styles.calloutContact}>📞 {m.contact}</Text>
                    ) : null}
                  </View>

                  {/* Little arrow underneath */}
                  <View style={styles.calloutArrow} />
                </View>
              </Callout>
            </Marker>
          ))}
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
  calloutContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  calloutCard: {
    width: 240,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },

  calloutTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 6,
  },

  calloutDescription: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },

  calloutContact: {
    fontSize: 14,
    fontWeight: "500",
    color: "#0BA5A4",
  },

  calloutArrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 12,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#fff",
    marginTop: -2,
  },
});
