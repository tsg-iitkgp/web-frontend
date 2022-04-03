import React from "react";
import Styles from "./Notification.module.css";

export default function Notification({ event, handleClick }) {
  return (
    <div className={Styles.notification} onClick={() => handleClick()}>
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
