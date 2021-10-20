import React from "react";
import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import FooterStyles from "../styles/components/footer.module.css";
import logo from "../images/IIT_Kharagpur_Logo.png";
import Navbar from "./Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>

      <footer>
        <div className={FooterStyles.footerContainer}>
          <div className={FooterStyles.footerCol}>
            <center>
              <div className={FooterStyles.columnOne}>
                <img src={logo} alt="IITKGP Logo" />
                <div className={FooterStyles.address}>
                  <div>
                    <br />

                    <h3>Technology Students' Gymkhana</h3>
                    <p>
                      Indian Institute of Technology Kharagpur, <br />
                      West Bengal - 721302
                    </p>
                    <br />
                    <div className={FooterStyles.iconsContainer}>
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
                </div>
              </div>
            </center>
          </div>
          <div className={FooterStyles.footerCol}>
            <div className={FooterStyles.columnTwo}>
              <a className={FooterStyles.quickLinkHeader} href="/">
                Quick Links
              </a>
              <br />
              <br />
              <br />
              <a className={FooterStyles.quickLinkOne} href="/">
                Departments
              </a>
              <br />
              <br />
              <a className={FooterStyles.quickLinkOne} href="/">
                Centres
              </a>
              <br />
              <br />
              <a className={FooterStyles.quickLinkOne} href="/">
                Departments
              </a>
              <br />
              <br />
              <a className={FooterStyles.quickLinkOne} href="/">
                Departments
              </a>
            </div>
          </div>
          <div className={FooterStyles.footerCol}>
            <div className={FooterStyles.columnThree}>
              <a className={FooterStyles.quickLinkHeader} href="/">
                Explore
              </a>
              <br />
              <br />
              <br />
              <a className={FooterStyles.quickLinkOne} href="/">
                IITKGP Website
              </a>
              <br />
              <br />
              <a className={FooterStyles.quickLinkOne} href="/">
                Departments
              </a>
              <br />
              <br />
              <a className={FooterStyles.quickLinkOne} href="/">
                Departments
              </a>
              <br />
              <br />
              <a className={FooterStyles.quickLinkOne} href="/">
                Departments
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
