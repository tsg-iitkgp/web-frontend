import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import SocAndCell from "./SocAndCell";
import Styles from "../styles/pages/home.module.css";
import logo from "../images/IIT_Kharagpur_Logo.png";
import AboutUs from "../components/Navbar/AboutUs";

export default function Home() {
  document.title = "Home | TSG";
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
            <h2>Welcomes You</h2>
          </div>
        </div>
      </div>
      <AboutUs />
      <Section>
        <h1 className="section-heading">Societies And Cells</h1>
        <SocAndCell></SocAndCell>
      </Section>
    </Layout>
  );
}
