import "./post.css";

export default function Post() {
    return (
        <div className="post">

            <div className="post-header">

                <div className="profile">

                    <img src="/profile.jpg" alt="profile" />

                    <div className="profile-info">
                        <h4>
                            <b>OffCampus_Job_updates</b>
                            <span className="verified-badge"></span>
                            <span className="timestamp">16h</span>
                        </h4>
                    </div>

                </div>

                <div className="more"></div>

            </div>


            <div className="post-image">
                <img src="/posts/post1.jpg" alt="Post" />
             
            </div>


            <div className="post-icons">

                <div className="left-icons">
                    <img src="/icons/heart.png" alt="like" />
                    <img src="/icons/comment.png" alt="comment" />
                    <img src="/icons/share.png" alt="share" />
                </div>

                <div className="right-icon">
                    <img src="/icons/save.png" alt="save" />
                </div>

            </div>

            <p className="likes">
                <b>93 likes</b>
            </p>

            <p className="caption">
                <b>offcampusjobupdates</b> IBM off campus hiring! Apply Now🚀
            </p>

            <p className="view-comments">View all 12 comments</p>

            <div className="add-comment">
                <input type="text" placeholder="Add a comment..." />
                <p>Post</p>
            </div>

        </div>
    );
}
