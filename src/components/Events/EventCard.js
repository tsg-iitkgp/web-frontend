import React from "react";
import Styles from "../../styles/components/Events/eventcard.module.css";

export default function EventCard(props) {
  
  let blogCardClass;
  if (props.index % 2 !== 0) {
    blogCardClass = `${Styles.blogCard} ${Styles.alt}`;
  } else {
    blogCardClass = `${Styles.blogCard}`;
  }
  return (
    <div className={blogCardClass}>
      {props.imgSrc && (
        <div className={Styles.meta}>
          <div
            className={Styles.photo}
            style={{
              backgroundImage: `url(${props.imgSrc})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <ul className={Styles.details}>
            <li className={Styles.author}>
              <a href="www.google.com" alt="secy_responsible">
                {" "}
              </a>
            </li>
            <li className={Styles.author}>
              <a href="www.google.com"> </a>
            </li>
          </ul>
        </div>
      )}
      <div className={Styles.description}>
        <h1>{props.title}</h1>
        <h2>{props.date}</h2>
        <p> {props.description.toString().substring(0, 150) + '...'}</p>
        <p>
          <p className={Styles.readMore}>
            <button onClick={props.displayTrue}>
              Read More
            </button>
          </p>
        </p>
      </div>
    </div >
  );
}
