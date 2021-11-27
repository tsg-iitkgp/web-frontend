import React from "react";
import Styles from "../styles/components/contact-card.module.css";

function ContactCard({
  name,
  designation,
  email,
  facebook,
  whatsapp,
  web,
  imgSrc,
}) {
  return (
    <div className={Styles.container}>
      <div className={Styles.imgbox}>
        {imgSrc ? (
          <img src={imgSrc} alt={`${name}_image`} />
        ) : (
          <div className={Styles.svgContainer}>
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xlinkHref="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              space="preserve"
            >
              <g>
                <path
                  d="M256,256c62.1,0,112.5-50.4,112.5-112.5S318.1,31,256,31S143.5,81.4,143.5,143.5S193.9,256,256,256z M340.2,284.7
		l-42,168.2l-28.1-119.5l28.1-49.2h-84.4l28.1,49.2l-28.1,119.5l-42-168.2c-62.7,3-112.7,54.2-112.7,117.6v36.6
		c0,23.3,18.9,42.2,42.2,42.2h309.4c23.3,0,42.2-18.9,42.2-42.2v-36.6C452.9,338.9,402.9,287.6,340.2,284.7L340.2,284.7z"
                />
              </g>
            </svg>
          </div>
        )}
      </div>
      <ul className={Styles.sociallinks}>
        <li>
          <a href="www.facebook.com">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="mail.google.com">
            <i className="fas fa-envelope"></i>
          </a>
        </li>
        <li>
          <a href="www.linkedin.com">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
      <div className={Styles.details}>
        <h2>{name}</h2>
        <span>{designation}</span>
      </div>
    </div>
  );
}

export default ContactCard;
