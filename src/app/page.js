import Stories from "./components/stories";
import Notification from "./components/notification";
import FloatingMessage from "./components/floatingMessage";
import Post from "./components/post";

export default function Home() {
  return (
    <>
      <div className="feed-layout">
        <div className="feed-main">
          <Stories />
          <Post />
        </div>

        <div className="feed-side">
          <Notification />
        </div>
      </div>

      <FloatingMessage />
    </>
  );
}
