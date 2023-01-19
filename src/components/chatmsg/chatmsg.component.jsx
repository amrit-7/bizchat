import React from "react";
import "./chatmsg.styles.scss";

const ChatMsg = ({ user,message, time }) => {
  return (
    <div className="chat-message">
      <div className="chat-message-text">
        <strong>{user} </strong>
      </div>
      <div className="chat-message-text">
        <p>{message} </p>
      </div>
      <div className="chat-message-dt">
        <p>{time}</p>
      </div>
    </div>
  );
};

export default ChatMsg;
