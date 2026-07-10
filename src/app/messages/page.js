import "./instaMessage.css";
import ChatSidebar from "./ChatSidebar";

export default function Message() {
  return (
    <div className="app">

      <ChatSidebar activeUser={null} />

      <div className="chatArea">
        <div className="emptyChat">
          <div className="messageIcon">
            <img src="/messages/Message_1.png" className="send-img" />
          </div>

          <h2>Your messages</h2>
          <p>Send a message to start a chat.</p>
          <button>Send message</button>
        </div>
      </div>

    </div>
  );
}
