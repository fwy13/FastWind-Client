"use client";
import { AuthGoogle } from "@/context/AuthGoogle";
import { useContext } from "react";

export default function Home() {
  const Context = useContext(AuthGoogle);

  return (
    <>
      {Context.uid && (
        <img
          className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src={Context.photoURL}
          alt="Rounded avatar"
        ></img>
      )}
    </>
  );
}
