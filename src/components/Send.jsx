import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../firebase";

const Send = ({ user, scroll }) => {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (input === "" || input === " ") {
            return alert("Please enter a valid message");
          }
          const { uid, displayName } = user;
          await addDoc(collection(db, "messages"), {
            text: input,
            name: displayName,
            id: uid,
            timestamp: serverTimestamp(),
          });
          setInput("");
          scroll.current.scrollIntoView({ behaviour: "smooth" });
        }}
        className="flex absolute bottom-0 h-14 text-xl w-full"
      >
        <input
          onChange={(e) => setInput(e.target.value)}
          className="bg-gray-800 text-white w-full p-3"
          placeholder="Message"
          value={input}
        />
        <button type="submit" className="w-[20%] bg-blue-500">
          Send
        </button>
      </form>
      ;
    </>
  );
};

export default Send;
