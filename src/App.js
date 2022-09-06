import React from "react";
import NavBar from "./components/NavBar";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="bg-black h-[105vh] bg-cover">
      <div className="max-w-[728px] mx-auto text-center ">
        <section className="flex flex-col h-[90vh] bg-gray-100 mt-5 shadow-xl border relative">
          <NavBar user={user} />
          {user && <Chat user={user} />}
        </section>
      </div>
    </div>
  );
}

export default App;
