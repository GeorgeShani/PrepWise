import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBO6xcxY-hZxsRhehvR2Uwva0k-nVqH_rA",
  authDomain: "prepwise-f9d0a.firebaseapp.com",
  projectId: "prepwise-f9d0a",
  storageBucket: "prepwise-f9d0a.firebasestorage.app",
  messagingSenderId: "437605342419",
  appId: "1:437605342419:web:81a685ce4ce2a5332a8826",
  measurementId: "G-W04FND2HWY",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
