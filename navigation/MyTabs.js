import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Screens
import HomeScreen from "../screens/HomeScreen";
import Marking from "../screens/Marking";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#0BA5A4",
        tabBarInactiveTintColor: "gray",

        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "map-outline";
              break;
            case "Marking":
              iconName = "navigate-outline";
              break;
            case "Profile":
              iconName = "person-outline";
              break;
          }

          return <Ionicons name={iconName} color={color} size={size} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Marking" component={Marking} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
