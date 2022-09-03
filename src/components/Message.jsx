import React from "react";

const styles = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  sent: `bg-[#395dff] text-white flex-row-reverse float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};

const Message = ({ message, user }) => {
  const messageStyle =
    user && message.id === user.auth.currentUser.uid
      ? styles.sent
      : styles.received;
  return (
    <div>
      <div className={`${styles.message} ${messageStyle}`}>
        <p className="absolute mt-[-4rem] text-gray-600 text-xs">
          {message && message.name}
        </p>
        <p className="font-semibold">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
