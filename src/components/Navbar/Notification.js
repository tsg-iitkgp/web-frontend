import React from "react";
import Styles from "../../styles/components/Navbar/Notification.module.css";

export default function Notification({ event, handleClick }) {
  const notifStyle = {
    position: "relative",
    padding: "1rem",
    margin: "0.75rem auto",
    width: "95%",
    borderRadius: "0.25rem",
    backgroundColor: "rgba(255, 255, 255, 1)",
    cursor: "pointer",
    boxSizing: "border-box",
    transition: "all 0.3s ease",
  };

  return (
    <div
      className={Styles.notification}
      style={notifStyle}
      onClick={() => handleClick()}
    >
      <div>
        <span className={Styles.title}>
          {/* {event.title} */}
          TSG Elections 2023-2024
          <span className={`material-icons ${Styles.closeIcon}`}>close</span>
        </span>
      </div>
      <div className={Styles.description}>
        {/* {event.description} */}
        The Deadline to get approval from the faculty members for the Gymkhana
        Elections for the Academic Year (2023 - 2024) has been extended to 24th
        March 2023, 11:59 PM
      </div>
      <div className={Styles.createdTime}>
        {/* {event.createdAt} */}
        23rd March 2023
      </div>
    </div>
  );
}
