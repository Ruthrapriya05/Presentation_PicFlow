import "./notification.css";

export default function Notification() {
  return (
    <div className="notification-panel">

      <div className="mini-profile">
        <img src="/profile5.jpg" alt="" />
        <div className="mini-profile-info">
          <h4>Elsa_9751</h4>
          <p>Elsa 💕</p>
        </div>
        <span className="switch">Switch</span>
      </div>

      <div className="notifi-top">
         <p className="muted">Suggested for you</p>
         <p className="see-all">See all</p>
      </div>

      <div className="notification-item">
        <img src="/profile1.jpg" alt="" />
        <div className="notification-text">
          <p><b>Santhiya</b> 😍</p>
          <span className="mutual">
            <img src="/profile2.jpg" alt="" />
            <img src="/profile3.jpg" alt="" />
            Followed by choco_girl_
          </span>
        </div>
        <span className="follow">Follow</span>
      </div>

      <div className="notification-item">
        <img src="/profile2.jpg" alt="" />
        <div className="notification-text">
          <p><b>Harini</b> 🌻</p>
          <span className="mutual">
            <img src="/profile3.jpg" alt="" />
            Followed by _kavi_
          </span>
        </div>
        <span className="follow">Follow</span>
      </div>

      <div className="notification-item">
        <img src="/profile3.jpg" alt="" />
        <div className="notification-text">
          <p>🚩</p>
          <span className="mutual">
            <img src="/profile4.jpg" alt="" />
            Followed by _yellow_moon_20
          </span>
        </div>
        <span className="follow">Follow</span>
      </div>

      <div className="notification-item">
        <img src="/profile4.jpg" alt="" />
        <div className="notification-text">
          <p><b>bose</b> 💙</p>
          <span className="mutual">
            <img src="/profile1.jpg" alt="" />
            Followed by _.renu._
          </span>
        </div>
        <span className="follow">Follow</span>
      </div>

      <div className="notification-item">
        <img src="/profile1.jpg" alt="" />
        <div className="notification-text">
          <p><b>~Srizz</b> 💜 !!</p>
          <span className="mutual">
            <img src="/profile2.jpg" alt="" />
            Followed by choco_girl_
          </span>
        </div>
        <span className="follow">Follow</span>
      </div>

      <div className="panel-footer">
        <p>About · Help · Press · API · Jobs · Privacy · Terms ·</p>
        <p>Locations · Language · Meta Verified</p>
        <p className="copyright">© 2026 INSTAGRAM FROM META</p>
      </div>

    </div>
  );
}
