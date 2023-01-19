import React, { Suspense } from "react";
import Side from "../side.component/side.component";
import "./chatpage.styles.scss";
import MessageBox from "../messageBox/messageBox.component";
import { PulseLoader } from "react-spinners";

export default function ChatPage({ user }) {
  return (
    <div className="chatpage">
      <div className="chatpage-container">
        <Side />
        <Suspense
          fallback={
            <div className="loader">
              <PulseLoader color="#00afef" size="50px" />
            </div>
          }
        >
          <MessageBox user={user} />
        </Suspense>
      </div>
    </div>
  );
}
