import React, { Suspense, useState } from "react";
import ChatMsg from "../chatmsg/chatmsg.component";
import "./messagebox.styles.scss";
import { InsertEmoticon, AttachFile, Send } from "@mui/icons-material";
import { Form } from "react-bootstrap";
import EmojiPicker from "emoji-picker-react";
import { useParams } from "react-router-dom";
import useSWR from "swr";

export default function MessageBox({ user }) {
  const { userId } = useParams();
  const [message, setMessage] = useState("");
  const [openEmojiBox, setOpenEmojiBox] = useState(false);

  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/users?id=${userId}`,
    { suspense: true }
  );
  if (error) return console.log(error);
  const name = data[0].name;
  const id = data[0].id;

  const date = new Date();
  const time = date.getHours() + ":" + date.getMinutes();

  const send = (e) => {
    e.preventDefault();

    if (userId) {
      let payload = {
        text: message,
        sender: user,
        reciever: userId,
        time: time,
      };

      console.log(payload);
      setMessage("");
    }
  };

  return (
    <Suspense fallback={<div> Loading </div>}>
      <div className="message-box-container">
        <div className="message-box-header">
          <div className="chat-user-info">
            <div className="chat-user-img">
              <img
                src={`https://api.lorem.space/image/face?w=150&h=150&hash=${id}`}
                alt="avatar"
              ></img>
            </div>
            <div className="info">
              <p className="username">{name}</p>
              <p className="status">Online</p>
            </div>
          </div>
        </div>
        <div className="chat-messages-container">
          <ChatMsg message={"Hello"} time={"18:90"} />
          <ChatMsg message={"How are you?"} time={"18:90"} />
          <ChatMsg message={"What about my work?"} time={"19:00"} />
          <ChatMsg message={"How much time it will take?"} time={"19:20"} />
        </div>

        <div className="chat-input">
          {openEmojiBox && (
            <EmojiPicker
              onEmojiClick={(emojiObj, event) => {
                setMessage(message + emojiObj.emoji);
                // console.log(emojiObj.emoji);
              }}
            />
          )}

          <div className="chat-input-btn">
            <InsertEmoticon onClick={() => setOpenEmojiBox(!openEmojiBox)} />
            <AttachFile />
          </div>
          <Form onSubmit={send}>
            <input
              name="messageField"
              type="text"
              placeholder="Type your Message..."
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </Form>
          <div className="chat-input-send-btn" onClick={send}>
            <Send />
          </div>
        </div>
      </div>
    </Suspense>
  );
}
