// src/firebase-config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Importa Firestore

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBcabMan4naTHur8wUznVwJ6Lgpu2LfE9s",
  authDomain: "web-lashess.firebaseapp.com",
  projectId: "web-lashess",
  storageBucket: "web-lashess.appspot.com",
  messagingSenderId: "282514236383",
  appId: "1:282514236383:web:1b513e675bec06e7849a6a"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app); // Inicializa Firestore

export { db }; // Exporta el objeto db
