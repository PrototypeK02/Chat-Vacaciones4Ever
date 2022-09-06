import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect, useRef } from "react";
import { db } from "../firebase";
import Message from "./Message";
import Send from "./Send";

const Chat = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const call = query(collection(db, "messages"), orderBy("timestamp"));
    const unsuscribe = onSnapshot(call, (querySnapshop) => {
      let messages = [];

      querySnapshop.forEach((el) => {
        console.log(el.data());
        messages.push({ ...el.data() });
      });
      console.log("hola");
      setMessages(messages);
    });
    return () => unsuscribe();
  }, []);

  return (
    <>
      <main className="flex flex-col p-[10px] relative overflow-auto mb-[50px]">
        {messages &&
          messages.map((el, index) => (
            <Message key={index} user={user} message={el} />
          ))}
      </main>
      <Send user={user} scroll={scroll} />
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
