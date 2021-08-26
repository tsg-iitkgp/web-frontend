import React from 'react';
import { FaEnvelope, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import Styles from '../styles/components/contact-card.module.css';



function ContactCard({ name, designation, email, facebook, whatsapp, web, imgSrc }) {
    return (
        <div className={Styles.card}>
            <img src={imgSrc} alt={`${name}_image`} />
            <div className={Styles.contentContainer}>
                <h1>{name}</h1>
                <h2>{designation}</h2>
                <div className={Styles.iconsContainer}>
                    <a href={`mailto:${email}`}>
                        <FaEnvelope />
                    </a>
                    <a href={facebook}>
                        <FaFacebook />
                    </a>
                    <a href={`https://wa.me/${whatsapp}`}>
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactCard;
