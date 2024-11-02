// src/firebase-config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBcabMan4naTHur8wUznVwJ6Lgpu2LfE9s",
  authDomain: "web-lashess.firebaseapp.com",
  projectId: "web-lashess",
  storageBucket: "web-lashess.appspot.com",
  messagingSenderId: "282514236383",
  appId: "1:282514236383:web:1b513e675bec06e7849a6a"
};


// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

export { db };