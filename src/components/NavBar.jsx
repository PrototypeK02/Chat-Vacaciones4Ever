import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LogOut from "./LogOut";
import SignIn from "./SignIn";

const NavBar = ({ user }) => {
  return (
    <div className="bg-gray-800 flex justify-between items-center p-4">
      <h1 className="text-white text-3xl">Vacaciones 4Ever</h1>
      {user && <span className="text-white text-2xl">{user.displayName}</span>}
      {!user ? <SignIn /> : <LogOut />}
      {console.log(user)}
    </div>
  );
};

export default NavBar;
