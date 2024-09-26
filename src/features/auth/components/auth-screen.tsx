"use client";
import { useState } from "react";
import { SignFlow } from "../types";
import { signIncard } from "./sign-in-card";
import { signUpcard } from "./sign-up-card";

export const AuthScreen = () => {
  const [state, setState] = useState<SignFlow>("signIn");
  return (
    <>
      <div className="h-full flex items-center justify-center bg-[#5C3B58]">
        <div className="md:h-auto md:w-[420px]">
          {state === "signIn" ? <signIncard /> : <signUpcard />}
        </div>
      </div>
    </>
  );
};
