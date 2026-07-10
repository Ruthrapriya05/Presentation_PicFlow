import Link from "next/link";

export default function ChatSidebar({ activeUser }) {
  return (
    <div className="msg-sidebar">

      <div className="header">
        <h2>Elsa_9751 <img src="/messages/down-chevron.png" className="dropdown" /></h2>
        <span className="edit"><img src="/messages/edit.png" className="edit" /></span>
      </div>

      <input type="text" placeholder="Search" className="search" />

      <div className="stories">
        <div className="story">
          <div className="note-bubble"><p>Your notes...</p></div>
          <img src="/profile5.jpg" className="storyPic" />
          <p>You</p>
        </div>

        <div className="story">
          <div className="note-bubble"><p>🪄😍...</p></div>
          <img src="/messages/Alone_Boy.jpg" className="storyPic" />
          <p>Alone_Boy</p>
        </div>

        <div className="story">
          <div className="note-bubble"><p>🎶...</p></div>
          <img src="/messages/Deepak.jpg" className="storyPic" />
          <p>Deepak</p>
        </div>

        <div className="story">
          <div className="note-bubble"><p>3😍...</p></div>
          <img src="/messages/Priya.jpg" className="storyPic" />
          <p>Priya</p>
        </div>
      </div>

      <div className="messageHeader">
        <h3>Messages</h3>
        <span>Requests</span>
      </div>

      <div className="chatList">

        <Link href="/messages/siva">
          <div className={`chat ${activeUser === "siva" ? "active" : ""}`}>
            <img src="/messages/Siva.jpg" className="storyPic" />
            <div>
              <h4>Siva</h4>
              <p>You sent an attachment · 12h</p>
            </div>
          </div>
        </Link>

        <Link href="/messages/queen">
          <div className={`chat ${activeUser === "queen" ? "active" : ""}`}>
            <img src="/messages/Devil_Queen.jpg" className="chatPic" />
            <div>
              <h4>queen_</h4>
              <p>Liked a message · 1w</p>
            </div>
          </div>
        </Link>

        <Link href="/messages/alone-girl">
          <div className={`chat ${activeUser === "alone-girl" ? "active" : ""}`}>
            <img src="/messages/alone_girl.jpg" className="chatPic" />
            <div>
              <h4>Alone_Girl</h4>
              <p>You sent an attachment · 1w</p>
            </div>
          </div>
        </Link>

        <Link href="/messages/deepak">
          <div className={`chat ${activeUser === "deepak" ? "active" : ""}`}>
            <img src="/messages/Deepak.jpg" className="chatPic" />
            <div>
              <h4>Deepak</h4>
              <p>Seen yesterday</p>
            </div>
          </div>
        </Link>

        <Link href="/messages/priya">
          <div className={`chat ${activeUser === "priya" ? "active" : ""}`}>
            <img src="/messages/Priya.jpg" className="chatPic" />
            <div>
              <h4>Priya</h4>
              <p>Typing...</p>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}