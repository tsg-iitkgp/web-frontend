import React from "react";
import Styles from "../../styles/components/Events/eventcard.module.css";

export default function EventCard({
  title,
  date,
  description,
  index,
  bodyContent,
  eventCategory: category,
  imgName,
}) {
  let blogCardClass;
  if (index % 2 !== 0) {
    blogCardClass = `${Styles.blogCard} ${Styles.alt}`;
  } else {
    blogCardClass = `${Styles.blogCard}`;
  }
  return (
    <div className={blogCardClass}>
      <div className={Styles.meta}>
        <div
          className={Styles.photo}
          style={{
            backgroundImage:
              "url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)",
          }}
        ></div>
        <ul className={Styles.details}>
          <li className={Styles.author}>
            <a href="www.google.com">John Doe</a>
          </li>
          <li className={Styles.author}>
            <a href="www.google.com">+91 11111 11111</a>
          </li>
        </ul>
      </div>
      <div className={Styles.description}>
        <h1>{title}</h1>
        <h2>{date}</h2>
        <h2>Opening a door to the future</h2>
        <p> {description}</p>
        <p className={Styles.readMore}>
          <a href="www.google.com">Read More</a>
        </p>
      </div>
    </div>
  );
}
