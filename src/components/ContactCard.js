import React from "react";
import Styles from "../styles/components/contact-card.module.css";
import CopyToClipboard from "react-copy-to-clipboard";
function ContactCard({
  name,
  designation,
  email,
  facebook,
  linkedin,
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
          <a href={`${facebook}`} target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <CopyToClipboard text={`${email}`}>
            <button title="Copy Email Address">
              <i className="fas fa-envelope" ></i>
            </button>
          </CopyToClipboard>
        </li>
        <li>
          <a href={`${linkedin}`} target="_blank" rel="noreferrer">
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
