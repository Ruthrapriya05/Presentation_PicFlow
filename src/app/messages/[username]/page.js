import "../instaMessage.css";
import ChatSidebar from "../ChatSidebar";

const chatData = {
  siva: {
    name: "Shri",
    handle: "ammul8162",
    avatar: "/messages/Siva.jpg",
  },
  queen: {
    name: "queen_",
    handle: "devilqueen",
    avatar: "/messages/Devil_Queen.jpg",
  },
  "alone-girl": {
    name: "Alone_Girl",
    handle: "alone_girl",
    avatar: "/messages/alone_girl.jpg",
  },
  deepak: {
    name: "Deepak",
    handle: "deepak_official",
    avatar: "/messages/Deepak.jpg",
  },
  priya: {
    name: "Priya",
    handle: "priya_here",
    avatar: "/messages/Priya.jpg",
  },
};

export default function ChatPage({ params }) {
  const user = chatData[params.username] ?? {
    name: "Instagram User",
    handle: "unknown",
    avatar: "/messages/default.jpg",
  };

  return (
    <div className="app">

      <ChatSidebar activeUser={params.username} />

      <div className="chatArea full">

        <div className="chatTopBar">
          <img src={user.avatar} className="topAvatar" />
          <div>
            <h4>{user.name}</h4>
            <p>{user.handle}</p>
          </div>

          <div className="topIcons">
            <img src="/messages/call.png" alt="Call" />
            <img src="/messages/video.png" alt="Video" />
            <img src="/messages/info.png" alt="Info" />
          </div>
        </div>

        <div className="chatBody">

          <div className="chatProfileIntro">
            <img src={user.avatar} className="introAvatar" />
            <h3>{user.name}</h3>
            <p>{user.handle} &middot; Instagram</p>
            <button>View profile</button>
          </div>

          <p className="chatTimestamp">10/5/25, 8:19 PM</p>

          <div className="msg-row received">
            <img className="msg-avatar" src={user.avatar} />
            <div className="msg-bubble received">Hi</div>
          </div>

          <div className="msg-row sent">
            <div className="msg-bubble sent">Hello</div>
          </div>

        </div>

        <div className="chatInputBar">
          <span className="emoji">&#128522;</span>
          <input type="text" placeholder="Message..." />
          <img src="/messages/mic.png" alt="Voice" />
          <img src="/messages/gallery.png" alt="Image" />
          <img src="/messages/sticker.png" alt="Sticker" />
        </div>

      </div>
    </div>
  );
}