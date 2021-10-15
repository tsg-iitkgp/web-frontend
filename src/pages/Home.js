import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import SocAndCell from "./SocAndCell";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
import Styles from "../styles/home.module.css";
import logo from "../images/IIT_Kharagpur_Logo.png";
export default function Home() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const openLink = (videoLink) => {
    window.open(videoLink);
  };

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
      <Section>
        <h2 className="section-heading">About Us</h2>
        <p className="description">
          Technology Students’ Gymkhana is the hub of the numerous
          extra-curricular and co-curricular activities in IIT Kharagpur ranging
          from sports to socio-cultural. The Gymkhana is managed by the
          students, for the students, under the guidance and active
          participation of the faculty and staff members.
        </p>
        <blockquote className="description">
          "Yogah Karmasu Kausalam"
        </blockquote>
        <p className="description">
          The moto of Technology Students' Gymkhana is YOGAH KARMASU KAUSALAM
          which in English means "Perfection in action is Yoga". Our goal is to
          bring overall development in IITians through cultivating and nurturing
          their extra-curricular talents.
        </p>
      </Section>
      <Section>
        <h1 className="section-heading">Societies And Cells</h1>
        <SocAndCell></SocAndCell>
      </Section>
    </Layout>
  );
}
