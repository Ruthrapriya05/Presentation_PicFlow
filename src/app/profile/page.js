import "./profile.css";
import Link from "next/link";
import FloatingMessage from "../components/floatingMessage";

export default function Profile() {
    return (
        <div className="profile-page">


            <div className="profile-header">
                <div className="pic-wrap">
                    <span className="note-bubble">Note...</span>
                    <img
                        src="/profile-img/profile5.jpg"
                        alt="profile"
                        className="profilePic"
                    />
                </div>
                <div className="profile-text">
                    <h2>Elsa_9751<span className="badge-outline">&#11049;</span></h2>
                    <p>Elsa💕</p>

                    <div className="profile-stats">
                        <span><b>0</b> posts</span>
                        <span><b>63</b> followers</span>
                        <span><b>80</b> following</span>
                    </div>
                    <div className="profile-button2">
                        <button><b>Edit profile</b></button>
                        <button><b>View archive</b></button>
                    </div>
                </div>
            </div>

            <div className="profile-stories">
                <div>
                    <img src="/profile-img/story sample.jpg" alt="" className="storyPic" />
                    <p>🥺💞</p>
                </div>

                <div className="profile-text">
                    <div className="newStory">+</div>
                    <p>New</p>
                </div>
            </div>

            <div className="profile-tabs">
                <span className="active"><img src="/profile-img/More-dot.png" className="icon" /></span>
                <span><img src="/profile-img/Save.png" alt="Saved" className="icon" /></span>
                <span><img src="/profile-img/repost.png" alt="Repost" className="icon" /></span>
                <span><img src="/profile-img/profile_icon.png" className="icon" /></span>
            </div>

            <div className="profile-empty">
                <div className="cameraIcon"><img src="/profile-img/camera.png" className="camera" /></div>
                <h1>Share Photos</h1>
                <p>When you share photos, they will appear on your profile.</p>
                <a href="/">Share your first photo</a>
            </div>
            <div className="profile-footer">
                <div className="footer-links">
                    <a href="/">Meta</a>
                    <a href="/">About</a>
                    <a href="/">Blog</a>
                    <a href="/">Jobs</a>
                    <a href="/">Help</a>
                    <a href="/">API</a>
                    <a href="/">Privacy</a>
                    <a href="/">Terms</a>
                    <a href="/">Locations</a>
                    <a href="/">Instagram Lite</a>
                    <a href="/">Threads</a>
                    <a href="/">Contact Uploading & Non-Users</a>
                    <a href="/">Meta Verified</a>
                </div>

                <div className="footer-bottom">
                    <span>English ▼</span>
                    <span>© 2026 Instagram from Meta</span>
                </div>
            </div>


            <FloatingMessage />

        </div>
    );
}