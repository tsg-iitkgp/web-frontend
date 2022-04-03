import React from "react";
import Styles from "./Notification.module.css";

export default function Notification({ event, handleClick }) {
  return (
    <div className={Styles.notification} onClick={() => handleClick()}>
      <div>
        <span style={{ color: "rgba(0,0,0,0.5)", fontSize: "1.1rem", fontWeight: '400' }}>
          {event.title}
          <span
            class="material-icons"
            style={{
              position: "absolute",
              right: "3%",
              top: "15%",
              fontSize: "1rem",
              color: "black",
              cursor: "pointer",
            }}
          >
            close
          </span>
        </span>
      </div>
      <div style={{ paddingTop: "0.4rem", fontSize: '0.8rem' }}>
        {event.description.slice(0, 150) + ". . . . "}
      </div>
      <div
        style={{
          position: "absolute",
          right: "2%",
          bottom: "2%",
          fontSize: "0.75rem",
          color: "rgba(0,0,0,0.4)",
        }}
      >
        {event.createdAt}
      </div>
    </div>
  );
}
