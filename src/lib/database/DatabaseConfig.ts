import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";
import {getAuth, GithubAuthProvider, GoogleAuthProvider} from "firebase/auth";

// The firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBlic9y_EwxJ5c6fTG_sM3AQNd7p1n0kJ8",
    authDomain: "mine-585ac.firebaseapp.com",
    databaseURL: "https://mine-585ac-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mine-585ac",
    storageBucket: "mine-585ac.appspot.com",
    messagingSenderId: "958549356078",
    appId: "1:958549356078:web:35dcee4d55ce84be60f9bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
export const auth = getAuth(app)
export const googleAuthProvider: GoogleAuthProvider = new GoogleAuthProvider();

export const githubAuthProvider: GithubAuthProvider = new GithubAuthProvider();
