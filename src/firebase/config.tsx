import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { ConfigFirebase } from "./ConfigFirebase";

const firebaseConfig = {
  apiKey: ConfigFirebase.apiKey,
  authDomain: ConfigFirebase.authDomain,
  projectId: ConfigFirebase.projectId,
  storageBucket: ConfigFirebase.storageBucket,
  messagingSenderId: ConfigFirebase.messagingSenderId,
  appId: ConfigFirebase.appId,
  measurementId: ConfigFirebase.measurementId,
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
