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
        <img src={imgSrc} alt={`${name}_image`} />
      </div>
      <ul className={Styles.sociallinks}>
        <li>
          <a href="www.facebook.com">
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="mail.google.com">
            <i class="fas fa-envelope"></i>
          </a>
        </li>
        <li>
          <a href="www.linkedin.com">
            <i class="fab fa-linkedin-in"></i>
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
