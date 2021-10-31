import React from "react";
import Layout from "../components/Layout";
import SocAndCell from "./SocAndCell";
import Styles from "../styles/pages/home.module.css";
import logo from "../images/IIT_Kharagpur_Logo.png";
import AboutUs from "../components/Navbar/AboutUs";
import RotatingCard from "../components/RotatingCard";
import CardsStyles from "../styles/components/soc.module.css";
import Data from "../data/soc";
import { Link } from "react-router-dom";
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
            <h2 className={Styles.greetText}>Welcomes You</h2>
          </div>
        </div>
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <h2
          className={Styles.sectionHeading}
          style={{ fontSize: "2.5rem", marginBottom: 0 }}
        >
          Committees
        </h2>
        <SocAndCell />
      </div>
      {/* Socities Section */}
      <div>
        {/* Heading */}
        <h2
          className={Styles.sectionHeading}
          style={{ fontSize: "2.5rem", marginBottom: "2rem" }}
        >
          Societies
        </h2>
        {/* Rotating Cards */}
        <div className={Styles.societiesSection}>
          <div className={CardsStyles.cardswrapper}>
            {Data.data
              .filter((data) => data.category === "Socult")
              .map((item, i) => {
                while (i < 3) {
                  return (
                    <RotatingCard
                      name={item.name}
                      description={item.description}
                      shortform={item.shortform}
                      facebook_link={item.facebook_link}
                    />
                  );
                }
              })}
          </div>
          <div className={Styles.readMore}>
            <div class={Styles.animationTrigger}>
              <div class={Styles.moreWrap}>
                <Link to="/societies" class={Styles.moreText}>
                  See more
                </Link>
                <div class={Styles.moreDots}>
                  <div class={`${Styles.dot} ${Styles.dot1}`}></div>
                  <div class={`${Styles.dot} ${Styles.dot2}`}></div>
                  <div class={`${Styles.dot} ${Styles.dot3}`}></div>
                  <div class={`${Styles.dot} ${Styles.dot4}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
