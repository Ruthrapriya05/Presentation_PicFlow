import "./reels.css";
import FloatingMessage from "../components/floatingMessage";

export default function Reels() {
    return (
        <div className="reels-feed">

            {/* ---------- Reel 1 ---------- */}
            <div className="reels-page">

                <button className="nav-arrow nav-up">&#8963;</button>

                <div className="content">

                    <div className="reelSection">

                        <div className="reel">
                            <video
                                src="/reels/video.mp4"
                                controls
                                autoPlay
                                muted
                                loop
                            />
                        </div>

                        <div className="caption">

                            <div className="profile">
                                <div className="dp">
                                    <img src="/icons/profile.jpg" alt="img" />
                                </div>

                                <div>
                                    <h4>
                                        greeting_cards_with_love
                                        <span className="verified-badge">&#10003;</span>
                                        <span className="follow-link">Follow</span>
                                    </h4>
                                    <p>&#9835; Maer &middot; Happy Birthday Classical P</p>
                                </div>
                            </div>

                            <p className="reel-text">
                                Celebrate The Magic Of Your Birthday! &#127874; &#127880; &#10024;
                            </p>

                        </div>

                    </div>


                    <div className="actions">

                        <div className="action">
                            <img src="/icons/heart.png" alt="Like" />
                            <span>241K</span>
                        </div>

                        <div className="action">
                            <img src="/icons/comment.png" alt="Comment" />
                            <span>2,396</span>
                        </div>

                        <div className="action">
                            <img src="/icons/share.png" alt="Repost" />
                            <span>14.8K</span>
                        </div>

                        <div className="action"><img src="/icons/save.png" alt="Save" /></div>

                        <div className="action more">&#8226;&#8226;&#8226;</div>

                    </div>
                </div>

                <button className="nav-arrow nav-down">&#8964;</button>

            </div>


            {/* ---------- Reel 2 ---------- */}
            <div className="reels-page">

                <button className="nav-arrow nav-up">&#8963;</button>

                <div className="content">

                    <div className="reelSection">

                        <div className="reel">
                            <video
                                src="/reels/reel2.mp4"
                                controls
                                autoPlay
                                muted
                                loop
                            />
                        </div>

                        <div className="caption">

                            <div className="profile">
                                <div className="dp">
                                    <img src="/icons/profile2.jpg" alt="img" />
                                </div>

                                <div>
                                    <h4>
                                        travel_with_me
                                        <span className="follow-link">Follow</span>
                                    </h4>
                                    <p>&#9835; Original audio</p>
                                </div>
                            </div>

                            <p className="reel-text">
                                Chasing sunsets &#127749; #travel #wanderlust
                            </p>

                        </div>

                    </div>


                    <div className="actions">

                        <div className="action">
                            <img src="/icons/heart.png" alt="Like" />
                            <span>98K</span>
                        </div>

                        <div className="action">
                            <img src="/icons/comment.png" alt="Comment" />
                            <span>1,204</span>
                        </div>

                        <div className="action">
                            <img src="/icons/share.png" alt="Repost" />
                            <span>5.6K</span>
                        </div>

                        <div className="action"><img src="/icons/save.png" alt="Save" /></div>

                        <div className="action more">&#8226;&#8226;&#8226;</div>

                    </div>
                </div>

                <button className="nav-arrow nav-down">&#8964;</button>

            </div>


            {/* ---------- Reel 3 ---------- */}
            <div className="reels-page">

                <button className="nav-arrow nav-up">&#8963;</button>

                <div className="content">

                    <div className="reelSection">

                        <div className="reel">
                            <video
                                src="/reels/reel3.mp4"
                                controls
                                autoPlay
                                muted
                                loop
                            />
                        </div>

                        <div className="caption">

                            <div className="profile">
                                <div className="dp">
                                    <img src="/icons/profile3.jpg" alt="img" />
                                </div>

                                <div>
                                    <h4>
                                        foodie_diaries
                                        <span className="verified-badge">&#10003;</span>
                                        <span className="follow-link">Follow</span>
                                    </h4>
                                    <p>&#9835; Maer &middot; Chill Vibes</p>
                                </div>
                            </div>

                            <p className="reel-text">
                                Best street food in town &#127837;&#128293;
                            </p>

                        </div>

                    </div>


                    <div className="actions">

                        <div className="action">
                            <img src="/icons/heart.png" alt="Like" />
                            <span>312K</span>
                        </div>

                        <div className="action">
                            <img src="/icons/comment.png" alt="Comment" />
                            <span>4,532</span>
                        </div>

                        <div className="action">
                            <img src="/icons/share.png" alt="Repost" />
                            <span>22.1K</span>
                        </div>

                        <div className="action"><img src="/icons/save.png" alt="Save" /></div>

                        <div className="action more">&#8226;&#8226;&#8226;</div>

                    </div>
                </div>

                <button className="nav-arrow nav-down">&#8964;</button>

            </div>


            <FloatingMessage />

        </div>
    );
}