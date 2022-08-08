import React from "react";
import Styles from "./footer.module.css";
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const linksList = [
    {
      heading: "Quick Links",
      links: [
        {
          title: "Counselling Centre",
          href: "http://www.counsellingcentre.iitkgp.ac.in/",
          target: "_blank",
        },
        {
          title: "IIT KGP Website",
          href: "http://www.iitkgp.ac.in/",
          target: "_blank",
        },
        {
          title: "Yellow Pages",
          href: "https://wiki.metakgp.org/w/Yellow_pages",
          target: "_blank",
        },
        {
          title: "Hall Management Centre",
          href: "http://www.hmc.iitkgp.ac.in/web/",
          target: "_blank",
        },
      ],
    },
    {
      heading: "Quick Links",
      links: [
        {
          title: "ERP",
          href: "https://erp.iitkgp.ac.in/SSOAdministration/login.htm?sessionToken=F90F79C925A0FE0DC48AE7CBFDE3D20A.worker1&requestedUrl=https://erp.iitkgp.ac.in/IIT_ERP3/",
          target: "_blank",
          
        },
        {
          title: "Your Dost",
          href: "https://wiki.metakgp.org/w/Yellow_pages/",
          target: "_blank",
        },
        {
          title: "Grievance Form",
          href: "https://docs.google.com/forms/d/e/1FAIpQLSft9FXZYvLiNt3oy0K3Iu4d6HoE830RhNWFHMXx1R4IjlhHKA/viewform",
          target: "_blank",
        },
        {
          title: "Admin Login",
          href: "https://gymkhana.iitkgp.ac.in/login",
          target: "_self",
        }
      ],
    },
  ];
  return (
    <footer>
      <div className={Styles.footerContainer}>
        <div className={Styles.tsgContainer}>
          <div className={Styles.imgContainer}>
            <img src="/data/media/images/general/gymkhanaLogo.png" alt="TSG Logo" />
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
            <a
              target="_blank"
              href="https://www.facebook.com/TSG.IITKharagpur"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              target="_blank"
              href="https://github.com/tsg-iitkgp"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCuTNELMlkNfJxAQ2vGJIe5Q"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/tsg.iitkharagpur/?hl=en"
              rel="noreferrer"
            >
              <FaInstagram />
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
                        <a target={link.target} href={link.href} rel="noreferrer">
                          {link.title}
                        </a>
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
          <a href="/ContactUs">
            <button className={Styles.contactButton}>Get in Touch</button>
          </a>
        </div>
      </div>
    </footer>
  );
}
