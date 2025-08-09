import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDhK5e_hy5VFadVL4RLHAZNekPuZwSSsfA",
  authDomain: "techportal-b0aef.firebaseapp.com",
  projectId: "techportal-b0aef",
  storageBucket: "techportal-b0aef.appspot.com",
  messagingSenderId: "697940305481",
  appId: "1:697940305481:web:6ea4c075d7c9c9a92a4198",
  measurementId: "G-42TLX84CTH"
};

const app = initializeApp(firebaseConfig);

let analytics;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('profile');
googleProvider.addScope('email');

export default app;
