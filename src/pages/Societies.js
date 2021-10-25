import React from "react";
import Styles from "../styles/components/soc.module.css";
import Layout from "../components/Layout";
import RotatingCards from "../components/RotatingCards";

// import bclub from "../images/societies/bclub.png";
// import chess from "../images/societies/chess.png";
// import communique from "../images/societies/communique.png";
// import debsoc from "../images/societies/debsoc.png";
// import druheen from "../images/societies/druheen.png";
// import encore from "../images/societies/encore.png";
// import etms from "../images/societies/etms.png";
// import iwg from "../images/societies/iwg.png";
// import ktj from "../images/societies/ktj.png";
// import prasthanam from "../images/societies/prasthanam.png";
// import pravah from "../images/societies/pravah.png";
// import quiz from "../images/societies/quiz.png";
// import spectra from "../images/societies/spectra.png";
// import sf from "../images/societies/sf.png";
// import swg from "../images/societies/swg.png";
// import tads from "../images/societies/tads.png";
// import tcas from "../images/societies/tcas.png";
// import tds from "../images/societies/tds.png";
// import tfps from "../images/societies/tfps.png";
// import tls from "../images/societies/tls.png";
// import trs from "../images/societies/trs.png";
// import wtms from "../images/societies/wtms.png";

// const arr = [
//   bclub,
//   chess,
//   communique,
//   debsoc,
//   druheen,
//   encore,
//   etms,
//   iwg,
//   ktj,
//   prasthanam,
//   pravah,
//   quiz,
//   spectra,
//   sf,
//   swg,
//   tads,
//   tcas,
//   tds,
//   tfps,
//   tls,
//   trs,
//   wtms,
// ];

// const arr2 = [
//   "bclub",
//   "chess",
//   "communique",
//   "debsoc",
//   "druheen",
//   "encore",
//   "etms",
//   "iwg",
//   "ktj",
//   "prasthanam",
//   "pravah",
//   "quiz",
//   "spectra",
//   "sf",
//   "swg",
//   "tads",
//   "tcas",
//   "tds",
//   "tfps",
//   "tls",
//   "trs",
//   "wtms",
// ];

export default function Societies() {
  const committees = [
    { name: "Social And Culture", category: "Socult" },
    { name: "Technology", category: "Tech" },
    { name: "Sports & Games", category: "Sports & Games" },
    { name: "Welfare", category: "Welfare" },
  ];
  return (
    <Layout>
      <div className={Styles.full}>
        <div className={Styles.aboutUsCircle1}></div>
        <div className={Styles.aboutUsCircle2}></div>
        <div className={Styles.aboutUsCircle3}></div>
        <div className={Styles.aboutUsCircle4}></div>
        {committees.map((committee, index) => {
          return (
            <RotatingCards
              name={committee.name}
              category={committee.category}
            />
          );
        })}
        <RotatingCards />
      </div>
    </Layout>
  );
}
