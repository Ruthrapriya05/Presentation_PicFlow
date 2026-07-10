import Link from "next/link";
import "./floatingMessage.css";

export default function FloatingMessage() {
  return (
    <Link href="/messages" className="message-link">

      <div className="floating-message">

        <img src="/icons/messages.png" alt="Messages" className="message-icon" />

        <span>Messages</span>

        <div className="mini-avatars">
          <img src="/profile1.jpg" alt="" />
          <img src="/profile2.jpg" alt="" />
          <img src="/profile3.jpg" alt="" />
        </div>

      </div>
    </Link>
  );
}
