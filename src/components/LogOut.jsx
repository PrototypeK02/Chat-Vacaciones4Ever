import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const LogOut = () => {
  const _signOut = () => {
    signOut(auth);
  };
  return (
    <div
      onClick={() => _signOut()}
      className="bg-gray-200 px-4 py-2 hover:bg-gray-100"
    >
      <button>Logout</button>
    </div>
  );
};

export default LogOut;
