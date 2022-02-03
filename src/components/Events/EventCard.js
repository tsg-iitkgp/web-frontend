import React from "react";
import Styles from "../../styles/components/Events/eventcard.module.css";

export default function EventCard({
  title,
  date,
  description,
  index,
  bodyContent,
  eventCategory: category,
  imgSrc,
}) {
  let blogCardClass;
  if (index % 2 !== 0) {
    blogCardClass = `${Styles.blogCard} ${Styles.alt}`;
  } else {
    blogCardClass = `${Styles.blogCard}`;
  }
  const url = "url(" + imgSrc + ")";
  console.log(url);
  return (
    <div className={blogCardClass}>
      <div className={Styles.meta}>
        <div
          className={Styles.photo}
          style={{
            backgroundImage: url,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat	",
          }}
        ></div>
        <ul className={Styles.details}>
          <li className={Styles.author}>
            <a href="www.google.com">Praneeth Reddy Kolanu</a>
          </li>
          <li className={Styles.author}>
            <a href="www.google.com">+91 7013 160 59</a>
          </li>
        </ul>
      </div>
      <div className={Styles.description}>
        <h1>{title}</h1>
        <h2>{date}</h2>
        <p> {description}</p>
        <p className={Styles.readMore}>
          <a href="www.google.com">Read More</a>
        </p>
      </div>
    </div>
  );
}
