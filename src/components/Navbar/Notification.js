import React from "react";
import Styles from "../../styles/components/Navbar/Notification.module.css";

export default function Notification({ event, handleClick }) {

  const notifStyle = {
    position: 'relative',
    margin: '0.75rem auto',
    width: '95%',
    padding: '1rem',
    fontSize: '0.75rem',
    maxHeight: '7rem',
    overflowY: 'hidden',
    borderRadius: '0.25rem',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    cursor: 'pointer',
    boxSizing: 'border-box',
    transition: 'all 0.3s ease',
  }
  return (
    <div className={Styles.notification} style={notifStyle} onClick={() => handleClick()}>
      <div>
        <span className={Styles.title}>
          {event.title}
          <span
            className={`material-icons ${Styles.closeIcon}`}
          >
            close
          </span>
        </span>
      </div>
      <div className={Styles.description}>
        {event.description.slice(0, 150) + ". . . . "}
      </div>
      <div
        className={Styles.createdTime}
      >
        {event.createdAt}
      </div>
    </div>
  );
}
