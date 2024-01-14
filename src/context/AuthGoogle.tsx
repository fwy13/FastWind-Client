"use client";

import { auth } from "@/firebase/config";
import { TypeDataFireBase } from "@/types/TypeDataFireBase";
import {
  createContext,
  useEffect,
  useState,
} from "react";


export const AuthGoogle = createContext<TypeDataFireBase>({
  accessToken: "",
  displayName: "",
  email: "",
  photoURL: "",
  uid: "",
});

export default function AuthGoogleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [IsDataFirebase, setIsDataFirebase] = useState<TypeDataFireBase>({
    accessToken: "",
    displayName: "",
    email: "",
    photoURL: "",
    uid: "",
  });

  useEffect(() => {
    const Unsubcribed = auth.onIdTokenChanged((user: any) => {
      if (user) {
        setIsDataFirebase({ user }.user);
      }
    });
    return () => {
      Unsubcribed();
    };
  }, [auth]);

  return (
    <AuthGoogle.Provider value={IsDataFirebase}>{children}</AuthGoogle.Provider>
  );
}
