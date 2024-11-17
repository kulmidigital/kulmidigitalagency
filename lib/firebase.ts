import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxVWeZc7JIP_0gqriRc24hTQkJQwL2S3I",
  authDomain: "kulmiblog.firebaseapp.com",
  projectId: "kulmiblog",
  storageBucket: "kulmiblog.firebasestorage.app",
  messagingSenderId: "583671298160",
  appId: "1:583671298160:web:b25e704d3ed6214e415cb5",
  measurementId: "G-GSG08QZHDH"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);

// Initialize Analytics only on client side
let analytics = null;
if (typeof window !== 'undefined') {
  // Dynamically import and initialize analytics
  import('firebase/analytics').then(({ getAnalytics }) => {
    analytics = getAnalytics(app);
  }).catch((error) => {
    console.error('Analytics failed to load:', error);
  });
}

export { app, db, auth, analytics }; 