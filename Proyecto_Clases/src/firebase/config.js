// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyCOkHWtLQR9qyCOGj898hsDvVLM894FxjY",
    authDomain: "bootcamp-dinara.firebaseapp.com",
    projectId: "bootcamp-dinara",
    storageBucket: "bootcamp-dinara.appspot.com",
    messagingSenderId: "962788491439",
    appId: "1:962788491439:web:554b7a84ac2ec1bdf5145a",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
