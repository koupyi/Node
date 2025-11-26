import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyALObk1D8mg5DyL52sYXwmXErC9YQuSH84",
  authDomain: "aula-node-fb362.firebaseapp.com",
  databaseURL: "https://aula-node-fb362-default-rtdb.firebaseio.com",
  projectId: "aula-node-fb362",
  storageBucket: "aula-node-fb362.firebasestorage.app",
  messagingSenderId: "977352228055",
  appId: "1:977352228055:web:03cfcec49c1939af9dc492"
};

// Evita reinicialização em hot-reload (nodemon)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getDatabase(app);
