import React from "react";
import Styles from "../../styles/components/Navbar/Notification.module.css";

export default function Notification({ event, handleClick }) {

  const notifStyle = {
    position: 'relative',
    padding: '1rem',
    margin: '0.75rem auto',
    width: '95%',
    borderRadius: '0.25rem',
    backgroundColor: 'rgba(255, 255, 255, 1)',
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
        {event.description}
      </div>
      <div
        className={Styles.createdTime}
      >
        {event.createdAt}
      </div>
    </div>
  );
}
