import React from "react";
import Styles from "./footer.module.css";
import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../images/IIT_Kharagpur_Logo.png";

export default function Footer() {
  const linksList = [
    {
      heading: "Quick Links",
      links: [
        {
          title: "Counselling Centre",
          href: "#",
        },
        {
          title: "IIT KGP Website",
          href: "#",
        },
        {
          title: "Yellow Pages",
          href: "#",
        },
        {
          title: "Hall Management Centre",
          href: "#",
        },
      ],
    },
    {
      heading: "Quick Links",
      links: [
        {
          title: "ERP",
          href: "#",
        },
        {
          title: "Zimbra Webmail",
          href: "#",
        },
        {
          title: "Your Dost",
          href: "#",
        },
        {
          title: "Grievance Form",
          href: "#",
        },
      ],
    },
  ];
  return (
    <footer>
      <div className={Styles.footerContainer}>
        <div className={Styles.tsgContainer}>
          <div className={Styles.imgContainer}>
            <img src={logo} alt="IIT KGP Logo" />
          </div>
          <div className={Styles.tsgDescription}>
            <h2 className={Styles.tsgHeading}>Technology Students' Gymkhana</h2>
            <p className={Styles.address}>
              Indian Institute of Technology Kharagpur,
              <br />
              West Bengal - 721302
            </p>
          </div>
          <div className={Styles.iconsContainer}>
            <a href="https://www.facebook.com/TSG.IITKharagpur">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/tsg_iitkgp">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com/channel/UCuTNELMlkNfJxAQ2vGJIe5Q">
              <FaYoutube />
            </a>
            <a href="https://github.com/tsg-iitkgp">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className={Styles.linksContainer}>
          {linksList.map((linkGroup, index) => {
            return (
              <div className={Styles.linkGroup} key={index}>
                <h2>{linkGroup.heading}</h2>
                <ul className={Styles.links}>
                  {linkGroup.links.map((link, index) => {
                    return (
                      <li key={index}>
                        <a href={link.href}>{link.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className={Styles.contactSection}>
          <span>We're here</span>
          <span>Let's talk</span>
          <button className={Styles.contactButton}>Get in Touch</button>
        </div>
      </div>
    </footer>
  );
}
