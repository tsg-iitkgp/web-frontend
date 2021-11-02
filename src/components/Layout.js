import React from "react";
import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import FooterStyles from "../styles/components/footer.module.css";
import logo from "../images/IIT_Kharagpur_Logo.png";
import Navbar from "./Navbar/Navbar";
import { ArrowLeft } from "react-bootstrap-icons";
import "../styles/components/footer.module.css";

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
                <img src={logo} alt="IITKGP Logo" className={FooterStyles.imgLogo}/>
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
              <a className={FooterStyles.quickLinkHeader}>
                Quick Links
              </a>
              <br />
              <br />
              <br />
              <a className={FooterStyles.quickLinkOne} href="http://www.counsellingcentre.iitkgp.ac.in/" target="_blank">
              Counselling Centre
              </a>
              <br />
              <br />
              <a className={FooterStyles.quickLinkOne} href="http://www.iitkgp.ac.in/" target="_blank">
              IITKGP Website
              </a>
              <br />
              <br />
              <a className={FooterStyles.quickLinkOne} href="https://wiki.metakgp.org/w/Yellow_pages/" target="_blank">
              Yellow Pages
              </a>
              <br />
              <br />
              <a className={FooterStyles.quickLinkOne} href="http://www.hmc.iitkgp.ac.in/web/" target="_blank">
              Hall Management Centre
              </a>
            </div>
          </div>
          <div className={FooterStyles.footerCol}>
            <div className={FooterStyles.columnThree}>
              <a className={FooterStyles.quickLinkHeader}>
                Quick Links
              </a>
              <br />
              <br />
              <br />
              <a className={FooterStyles.quickLinkOne} href="https://erp.iitkgp.ac.in/SSOAdministration/login.htm?sessionToken=F90F79C925A0FE0DC48AE7CBFDE3D20A.worker1&requestedUrl=https://erp.iitkgp.ac.in/IIT_ERP3/" target="_blank">
              ERP
              </a>
              <br />
              <br />
              <a className={FooterStyles.quickLinkOne} href="https://iitkgpmail.iitkgp.ac.in/" target="_blank">
              Zimbra webmail
              </a>
              <br />
              <br />
              <a className={FooterStyles.quickLinkOne} href="https://yourdost.com/" target="_blank">
              Your Dost
              </a>
              <br />
              <br />
              <a className={FooterStyles.quickLinkOne} href="https://docs.google.com/forms/d/e/1FAIpQLSft9FXZYvLiNt3oy0K3Iu4d6HoE830RhNWFHMXx1R4IjlhHKA/viewform" target="_blank">
              Grievance Form
              </a>
            </div>
          </div>
          <div className={FooterStyles.footerCol}>
            <div className={FooterStyles.columnFour}>
            <div md={7} style={{marginBottom:"3%"}}>
                    <h2 style={{marginTop:"20px"}} className={FooterStyles.footer_heading1}>We're here</h2>
                    <h2 className={FooterStyles.footer_heading2}>Let's talk</h2>
                    <a href="/ContactUs" target="_blank"><button style={{ marginLeft: "0%"}} className="btn_interiit">
                        Get in Touch </button></a>
                </div>
            </div>
          </div>
         
        
        </div>
      </footer>
    </div>
  );
}
