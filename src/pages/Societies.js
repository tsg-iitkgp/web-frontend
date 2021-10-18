import React from "react";
import Styles from "../styles/components/soc.module.css";
import Data from "../data/soc";
import Layout from "../components/Layout";

import bclub from "../images/societies/bclub.png";
import chess from "../images/societies/chess.png";
import communique from "../images/societies/communique.png";
import debsoc from "../images/societies/debsoc.png";
import druheen from "../images/societies/druheen.png";
import encore from "../images/societies/encore.png";
import etms from "../images/societies/etms.png";
import iwg from "../images/societies/iwg.png";
import ktj from "../images/societies/ktj.png";
import prasthanam from "../images/societies/prasthanam.png";
import pravah from "../images/societies/pravah.png";
import quiz from "../images/societies/quiz.png";
import spectra from "../images/societies/spectra.png";
import sf from "../images/societies/sf.png";
import swg from "../images/societies/swg.png";
import tads from "../images/societies/tads.png";
import tcas from "../images/societies/tcas.png";
import tds from "../images/societies/tds.png";
import tfps from "../images/societies/tfps.png";
import tls from "../images/societies/tls.png";
import trs from "../images/societies/trs.png";
import wtms from "../images/societies/wtms.png";

const arr = [
  bclub,
  chess,
  communique,
  debsoc,
  druheen,
  encore,
  etms,
  iwg,
  ktj,
  prasthanam,
  pravah,
  quiz,
  spectra,
  sf,
  swg,
  tads,
  tcas,
  tds,
  tfps,
  tls,
  trs,
  wtms,
];

const arr2 = [
  "bclub",
  "chess",
  "communique",
  "debsoc",
  "druheen",
  "encore",
  "etms",
  "iwg",
  "ktj",
  "prasthanam",
  "pravah",
  "quiz",
  "spectra",
  "sf",
  "swg",
  "tads",
  "tcas",
  "tds",
  "tfps",
  "tls",
  "trs",
  "wtms",
];

export default function Societies() {
  return (
    <Layout>
      <div className={Styles.full}>
        <h1 className={Styles.heading}>Social And Cultural</h1>
        <section className={Styles.cardswrapper}>
          {Data.data
            .filter((data) => data.category === "Socult")
            .map((society, i) => {
              return (
                <div className={Styles.card}>
                  <div className={Styles.cardfront}>
                    <picture>
                      <source
                        type="image/webp"
                        srcSet={arr[arr2.indexOf(society.shortform)]}
                      />
                      <img
                        className={Styles.img1}
                        src={arr[arr2.indexOf(society.shortform)]}
                        loading="lazy"
                        alt="Image 01"
                        width={600}
                        height={600}
                      />
                    </picture>
                  </div>
                  <div className={Styles.cardback}>
                    <div className={Styles.cardbackcontent}>
                      <h3>{society.name}</h3>
                      <p>{society.description}</p>
                      <a
                        className={`${Styles.button} ${Styles.a1}`}
                        title="Lorem Ipsum"
                        href={society.facebook_link}
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </section>
        <h1 className={Styles.heading}>Technology</h1>

        <section className={Styles.cardswrapper}>
          {Data.data
            .filter((data) => data.category === "Tech")
            .map((society, i) => {
              return (
                <div className={Styles.card}>
                  <div className={Styles.cardfront}>
                    <picture>
                      <source
                        type="image/webp"
                        src={arr[arr2.indexOf(society.shortform)]}
                      />
                      <img
                        className={Styles.img1}
                        src={arr[arr2.indexOf(society.shortform)]}
                        loading="lazy"
                        alt="Image 01"
                        width={600}
                        height={600}
                      />
                    </picture>
                  </div>
                  <div className={Styles.cardback}>
                    <div className={Styles.cardbackcontent}>
                      <h3>{society.name}</h3>

                      <p>{society.description}</p>

                      <a
                        className={`${Styles.button} ${Styles.a1}`}
                        title="Lorem Ipsum"
                        href={society.facebook_link}
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </section>
        <h1 className={Styles.heading}>Sports And Games</h1>
        <section className={Styles.cardswrapper}>
          {Data.data
            .filter((data) => data.category === "Sports & Games")
            .map((society, i) => {
              return (
                <div className={Styles.card}>
                  <div className={Styles.cardfront}>
                    <picture>
                      <source
                        type="image/webp"
                        src={arr[arr2.indexOf(society.shortform)]}
                      />
                      <img
                        className={Styles.img1}
                        src={arr[arr2.indexOf(society.shortform)]}
                        loading="lazy"
                        alt="Image 01"
                        width={600}
                        height={600}
                      />
                    </picture>
                  </div>
                  <div className={Styles.cardback}>
                    <div className={Styles.cardbackcontent}>
                      <h3>{society.name}</h3>
                      <p>{society.description}</p>
                      <a
                        className={`${Styles.button} ${Styles.a1}`}
                        title="Lorem Ipsum"
                        href={society.facebook_link}
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </section>
        <h1 className={Styles.heading}>Welfare</h1>
        <section className={Styles.cardswrapper}>
          {Data.data
            .filter((data) => data.category === "Welfare")
            .map((society, i) => {
              return (
                <div className={Styles.card}>
                  <div className={Styles.cardfront}>
                    <picture>
                      <source
                        type="image/webp"
                        srcSet={arr[arr2.indexOf(society.shortform)]}
                      />
                      <img
                        className={Styles.img1}
                        src={arr[arr2.indexOf(society.shortform)]}
                        loading="lazy"
                        alt="Image 01"
                        width={600}
                        height={600}
                      />
                    </picture>
                  </div>
                  <div className={Styles.cardback}>
                    <div className={Styles.cardbackcontent}>
                      <h3>{society.name}</h3>
                      <p>{society.description}</p>
                      <a
                        className={`${Styles.button} ${Styles.a1}`}
                        title="Lorem Ipsum"
                        href={society.facebook_link}
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </section>
      </div>
    </Layout>
  );
}
