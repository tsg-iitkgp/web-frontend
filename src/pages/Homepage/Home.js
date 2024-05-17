import React from "react";
import Layout from "../../components/Layouts/Layout";
import Styles from "../../styles/pages/home.module.css";
import AboutUs from "./AboutUs/AboutUs";
import CommitteesHome from "./Committee/CommitteesHome";
import Societies from "./Societies/Societies";
import Greet from "./Greet";
import { BorderWidth } from "react-bootstrap-icons";

export default function Home() {
  // document.title = "Home | TSG";
  document.title = "502 Bad Gateway";
  
    return (
        // <Layout>
        //   <div className={Styles.backgroundImage}>
        //     <div className={Styles.textOverlay}>
        //       <div className={Styles.kgpSvg}>
        //         <img
        //           src="/data/media/images/general/gymkhanaLogo.png"
        //           alt="KGP Logo"
        //         />
        //       </div>
        //       <div className={Styles.greetMessage}>
        //         <Greet />
        //       </div>
        //     </div>
        //   </div>
        //   <div>
        //     {/* About Us Section */}
        //     <AboutUs />

        //     {/* Committees Section */}
        //     <CommitteesHome />

        //     {/* Socities Section */}
        //     <Societies />
        //   </div>
        // </Layout>
        <div
            style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "white",
            }}
        >
            <center>
                <h1 style={{color: "black", fontFamily: "sans serif", fontWeight: "bold", paddingTop: "10px", paddingBottom: "8px", fontSize: "32px", marginBottom: "0px"}}>502 Bad Gateway</h1>
            </center>
            <hr style={{display: "block", borderWidth: "1px", opacity: "1"}} />
            <center style={{fontFamily: "sans serif", fontSize: "16px"}}>nginx</center>
        </div>
    );
}
