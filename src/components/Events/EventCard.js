import React from "react";
import Styles from "../../styles/components/Events/eventcard.module.css";

export default function EventCard({
  title,
  date,
  description,
  bodyContent,
  eventCategory: category,
  imgName,
}) {
  const imgSrc = `/media/images/events/${category}/${imgName}`;
  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.imgContainer}>
        <img src={imgSrc} alt={title} />
      </div>
      <div className={Styles.content}>
        <div className={Styles.title}></div>
        <div className={Styles.date}></div>
        <div className={Styles.bodyContent}></div>
      </div>
    </div>
  );
}
