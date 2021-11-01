import React from "react";
import Layout from "../components/Layout";
import Styles from "../styles/pages/home.module.css";
import AboutUs from "../components/Homepage/AboutUs/AboutUs";
import CommitteesHome from "../components/Homepage/Committee/CommitteesHome";
import Societies from "../components/Homepage/Societies/Societies";
export default function Home() {
  document.title = "Home | TSG";
  return (
    <Layout>
      <div className={Styles.backgroundImage}>
        <div className={Styles.textOverlay}>
          <div className={Styles.kgpSvg}>
            <img src="/media/images/general/gymkhanaLogo.png" alt="KGP_logo" />
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
        {/* Committees Section */}
        <CommitteesHome />
        {/* Socities Section */}
        <Societies />
      </div>
    </Layout>
  );
}
