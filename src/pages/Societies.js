import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Styles from "../styles/components/Societies.css";
import Data from "../data/soc";

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
    <main>
      <h1>Social And Cultural</h1>

      <section className="cards-wrapper">
        {Data.data
          .filter((data) => data.category === "Socult")
          .map((society, i) => {
            const url_ = `../images/societies/bclub.png`;
            return (
              <div className="card">
                <div className="card-front">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={arr[arr2.indexOf(society.shortform)]}
                    />
                    <img
                      src={arr[arr2.indexOf(society.shortform)]}
                      loading="lazy"
                      alt="Image 01"
                      width={600}
                      height={600}
                    />
                  </picture>
                </div>
                <div className="card-back">
                  <div className="card-back-content">
                    <h3>{society.name}</h3>
                    <p>{society.description}</p>
                    <a
                      className="button"
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
      <h1>Technology</h1>

      <section className="cards-wrapper">
        {Data.data
          .filter((data) => data.category === "Tech")
          .map((society, i) => {
            const url_ = `../images/societies/bclub.png`;
            return (
              <div className="card">
                <div className="card-front">
                  <picture>
                    <source
                      type="image/webp"
                      src={arr[arr2.indexOf(society.shortform)]}
                    />
                    <img
                      src={arr[arr2.indexOf(society.shortform)]}
                      loading="lazy"
                      alt="Image 01"
                      width={600}
                      height={600}
                    />
                  </picture>
                </div>
                <div className="card-back">
                  <div className="card-back-content">
                    <h3>{society.name}</h3>
                    <br />
                    <p>{society.description}</p>
                    <br />
                    <a
                      className="button"
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
      <h1>Sports And Games</h1>
      <section className="cards-wrapper">
        {Data.data
          .filter((data) => data.category === "Sports & Games")
          .map((society, i) => {
            const url_ = `../images/societies/bclub.png`;
            return (
              <div className="card">
                <div className="card-front">
                  <picture>
                    <source
                      type="image/webp"
                      src={arr[arr2.indexOf(society.shortform)]}
                    />
                    <img
                      src={arr[arr2.indexOf(society.shortform)]}
                      loading="lazy"
                      alt="Image 01"
                      width={600}
                      height={600}
                    />
                  </picture>
                </div>
                <div className="card-back">
                  <div className="card-back-content">
                    <h3>{society.name}</h3>
                    <p>{society.description}</p>
                    <a
                      className="button"
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
      <h1>Welfare</h1>
      <section className="cards-wrapper">
        {Data.data
          .filter((data) => data.category === "Welfare")
          .map((society, i) => {
            const url_ = `../images/societies/bclub.png`;
            return (
              <div className="card">
                <div className="card-front">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={arr[arr2.indexOf(society.shortform)]}
                    />
                    <img
                      src={arr[arr2.indexOf(society.shortform)]}
                      loading="lazy"
                      alt="Image 01"
                      width={600}
                      height={600}
                    />
                  </picture>
                </div>
                <div className="card-back">
                  <div className="card-back-content">
                    <h3>{society.name}</h3>
                    <br />
                    <p>{society.description}</p>
                    <a
                      className="button"
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
    </main>
  );
}
