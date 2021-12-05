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
          href: "http://www.counsellingcentre.iitkgp.ac.in/",
        },
        {
          title: "IIT KGP Website",
          href: "http://www.iitkgp.ac.in/",
        },
        {
          title: "Yellow Pages",
          href: "https://wiki.metakgp.org/w/Yellow_pages",
        },
        {
          title: "Hall Management Centre",
          href: "http://www.hmc.iitkgp.ac.in/web/",
        },
      ],
    },
    {
      heading: "Quick Links",
      links: [
        {
          title: "ERP",
          href: "https://erp.iitkgp.ac.in/SSOAdministration/login.htm?sessionToken=F90F79C925A0FE0DC48AE7CBFDE3D20A.worker1&requestedUrl=https://erp.iitkgp.ac.in/IIT_ERP3/",
        },
        {
          title: "Zimbra Webmail",
          href: "https://iitkgpmail.iitkgp.ac.in/",
        },
        {
          title: "Your Dost",
          href: "https://wiki.metakgp.org/w/Yellow_pages/",
        },
        {
          title: "Grievance Form",
          href: "https://docs.google.com/forms/d/e/1FAIpQLSft9FXZYvLiNt3oy0K3Iu4d6HoE830RhNWFHMXx1R4IjlhHKA/viewform",
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
            <a target="_blank" href="https://www.facebook.com/TSG.IITKharagpur">
              <FaFacebook />
            </a>
            <a target="_blank" href="https://twitter.com/tsg_iitkgp">
              <FaTwitter />
            </a>
            <a target="_blank" href="https://www.youtube.com/channel/UCuTNELMlkNfJxAQ2vGJIe5Q">
              <FaYoutube />
            </a>
            <a target="_blank" href="https://github.com/tsg-iitkgp">
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
                        <a target="_blank" href={link.href}>{link.title}</a>
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
          <a href="/ContactUs"><button className={Styles.contactButton}>Get in Touch</button></a>
        </div>
      </div>
    </footer>
  );
}
