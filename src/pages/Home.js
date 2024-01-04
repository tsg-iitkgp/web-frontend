import React from "react";
import Layout from "../components/Layout";
import Styles from "../styles/pages/home.module.css";
import AboutUs from "../components/Homepage/AboutUs/AboutUs";
import CommitteesHome from "../components/Homepage/Committee/CommitteesHome";
import Societies from "../components/Homepage/Societies/Societies";
import Greet from "../components/Homepage/Greet";
export default function Home() {
  document.title = "Home | TSG";
  return (
    <Layout>
      <div className={Styles.backgroundImage}>
        <div className={Styles.textOverlay}>
          <div className={Styles.kgpSvg}>
            <img src="/data/media/images/general/gymkhanaLogo.png" alt="KGP_logo" />
          </div>
          <div className={Styles.greetMessage}>
            <Greet />
          </div>
        </div>
      </div>
      <div>
        <AboutUs />
        {/* Committees Section */}
        <CommitteesHome />
        {/* Socities Section */}
        {/* <Societies /> */}
      </div>
    </Layout>
  );
}
