import React from "react";
import Layout from "../../components/Layouts/Layout";
import Styles from "../../styles/pages/home.module.css";
import AboutUs from "./AboutUs/AboutUs";
import CommitteesHome from "./Committee/CommitteesHome";
import Societies from "./Societies/Societies";
import Greet from "./Greet";

export default function Home() {
  document.title = "Home | TSG";

  return (
    <Layout>
      <div className={Styles.backgroundImage}>
        <div className={Styles.textOverlay}>
          <div className={Styles.kgpSvg}>
            <img
              src="/data/media/images/general/gymkhanaLogo.png"
              alt="KGP Logo"
            />
          </div>
          <div className={Styles.greetMessage}>
            <Greet />
          </div>
        </div>
      </div>
      <div>
        {/* About Us Section */}
        <AboutUs />

        {/* Committees Section */}
        <CommitteesHome />

        {/* Socities Section */}
        <Societies />
      </div>
    </Layout>
  );
}
