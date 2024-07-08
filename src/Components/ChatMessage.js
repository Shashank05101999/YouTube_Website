import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="text-black ml-2  ">
      <div className="py-1 flex  ">
        <img
          className="h-8 gap  bg-white rounded-full"
          alt="User-Logo"
          src="./Images/user-image.jpg"
        ></img>
        <span className=" px-2  font-mono font-bold">{name}:</span>
        <span className="">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
