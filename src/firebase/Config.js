import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDO1bdHa8DvEMnO8XUyZ17V0EaDceRxahI",
  authDomain: "react-vite-f4e27.firebaseapp.com",
  projectId: "react-vite-f4e27",
  storageBucket: "react-vite-f4e27.firebasestorage.app",
  messagingSenderId: "860104706940",
  appId: "1:860104706940:web:8e42c43bc197b77ccd32f9",
  measurementId: "G-D1TEHWZT74"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };