// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY8RkI9dxxtlPletgo1vQKQtuYYmzdiL0",
  authDomain: "lost-and-found-react-native.firebaseapp.com",
  projectId: "lost-and-found-react-native",
  storageBucket: "lost-and-found-react-native.firebasestorage.app",
  messagingSenderId: "161297847298",
  appId: "1:161297847298:web:e7f74c73b874f12962031b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
