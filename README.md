# Lost & Found — React Native App

A mobile application that allows users to **mark found items on a map** and lets others browse the map to see if their **lost belongings** have been found.

Built using **React Native**, **Expo**, **React Navigation**, **React Native Maps**, and **Expo Location**.

---

## Features

### Mark Found Items

Users can report found items with:

- Nickname (privacy-friendly)
- Item description
- Item location (auto-detected or entered manually)
- Contact information

These items appear as markers on the global map.

### Search for Lost Items

Users who lost something can browse markers added by others to locate their items.

### Real-Time Map Rendering

- Shows user’s current position
- Smooth drag, zoom, and pan
- Custom map markers for found items

---

## Project Setup

### 1. Clone the Repository

```sh
git clone https://github.com/Chingsan53/lost-and-found-react-native.git
cd lost-and-found-react-native
```

### 2. Install Dependencies

Run the base install:

```sh
npm install
```

### Then install required packages:

```sh
npm install @react-native-vector-icons/ionicons
```

```sh
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
```

```sh
npm install @react-navigation/native-stack
npm install @react-navigation/bottom-tabs
```

```sh
npx expo install react-native-maps
```

```sh
npx expo install expo-location
```

### 3. Running the Project

Start the Expo development server:

```sh
npx expo start
```

Then choose an option:

- Press i -> open in iOS Simulator
- Press a -> open in Android Emulator
- Scan the QR code to open on a physical device using Expo Go

### iOS Configuration

Add this to your app.json or app.config.js under expo.ios.infoPlist:

```js
{
  "expo": {
    "ios": {
      "infoPlist": {
        "NSLocationWhenInUseUsageDescription": "We use your location to help you mark found items and locate lost items nearby."
      }
    }
  }
}
```

## Technologies Used

1. React Native with Expo - Core mobile development
2. Expo Go App - Dev Tool and Preview Tool
3. React Navigation - Navigation & Tabs
4. React Native Maps - Map rendering
5. Expo Location - GPS + Permission
6. Ionicons - Icons for markers/UI

## Contributors

1. Chingsan Ly - cly53@csu.fullerton.edu
2. Azucena Jimenez - azucenaljim1@csu.fullerton.edu
3. Atharva 

## License

MIT License — free for personal and commercial use.

## Feedbacks

Let me know if you want to provide feedbacks, bug reports, and suggestions to improve the app.
