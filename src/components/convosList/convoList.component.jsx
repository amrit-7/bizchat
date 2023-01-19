import React from "react";
import Convo from "../convoComponent/convo.component";


export default function ConvoList({ conversations }) {
  return (
    <div className="people-list">
      {conversations.map((convo, index) => {
        return <Convo key={index} convo={convo}></Convo>;
      })}
    </div>
  );
}
