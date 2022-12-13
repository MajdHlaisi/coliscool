import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGIN_SENDER_ID,
  FIREBASE_APP_ID,
} from '@env';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth/react-native';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSNjuquVIO8GN1SZ4a_AWk4aqGTRDtGrQ",
  authDomain: "login-colis-cool.firebaseapp.com",
  projectId: "login-colis-cool",
  storageBucket: "login-colis-cool.appspot.com",
  messagingSenderId: "844075251867",
  appId: "1:844075251867:web:f06705843efe7ba8846e3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
