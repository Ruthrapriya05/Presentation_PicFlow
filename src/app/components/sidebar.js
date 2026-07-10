import "./sidebar.css";
import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <Link href="/">
            <div className="logo">
                <img src="/instagram-logo.png" alt="Instagram" />
            </div>
            </Link>

            <div className="menu">

                <Link href="/">
                <div className="menu-item">
                    <img src="/icons/home.png" alt="Home" className="icon" />
                </div>
                </Link>

                <Link href="/reels">
                <div className="menu-item">
                    <img src="/icons/reels.png" alt="Reels" className="icon" />
                </div>
                </Link>
                
                <Link href="/messages">
                <div className="menu-item">
                    <img src="/icons/message.png" alt="Explore" className="icon" />
                </div>
                </Link>

                <div className="menu-item">
                    <img src="/icons/search.png" alt="Search" className="icon" />
                </div>

                <div className="menu-item">
                    <img src="/icons/heart.png" alt="Notifications" className="icon" />
                </div>

                <div className="menu-item">
                    <img src="/icons/create.png" alt="Create" className="icon" />
                </div>

                <Link href="/profile">
                <div className="menu-item">
                    <img src="/icons/profile5.jpg" alt="Profile" className="icons" />
                </div>
                </Link>
            </div>

            <div className="more">
                <img src="/icons/menu.png" alt="More" className="icon" />
            </div>

            <div className="grid-icon">
                <span></span><span></span><span></span><span></span>
            </div>
        </div>
    );
}
