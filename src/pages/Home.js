import React from "react";
import Layout from "../components/Layout";
import SocAndCell from "./SocAndCell";
import Styles from "../styles/pages/home.module.css";
import logo from "../images/IIT_Kharagpur_Logo.png";
import AboutUs from "../components/Navbar/AboutUs";
import ContactForm from "../components/ContactForm/ContactForm";

export default function Home() {
  document.title = "Home | TSG";
  // const aboutUsref = useRef(null);
  // const scrollToAboutUs = () => {
  //   setTimeout(
  //     () => aboutUsref.current.scrollIntoView({ behavior: "smooth" }),
  //     3000
  //   );
  // };
  // useEffect(scrollToAboutUs, []);
  return (
    <Layout>
      <div className={Styles.backgroundImage}>
        <div className={Styles.textOverlay}>
          <div className={Styles.kgpSvg}>
            <img src={logo} alt="KGP_logo" />
          </div>
          <div className={Styles.heading}>
            <h1>Technology Student's Gymkhana</h1>
            <h2>IIT Kharagpur</h2>
            <h2 className={Styles.greetText}>Welcomes You</h2>
          </div>
        </div>
      </div>
      <div>
        <AboutUs />
      </div>
      <h2
        className={Styles.sectionHeading}
        style={{ fontSize: "2.5rem", marginBottom: 0 }}
      >
        Committees
      </h2>
      <SocAndCell />
      <div className={Styles.container}></div>
      
      <h2
        className={Styles.sectionHeading}
        style={{ fontSize: "2.5rem", marginBottom: 0 }}
      >
        Contact Form
      </h2>
      <ContactForm />
      
    </Layout>
  );
}
