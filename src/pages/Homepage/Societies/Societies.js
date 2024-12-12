import React, { useState } from "react";
import RotatingCard from "../../../components/RotatingCards/RotatingCard";
import Styles from "../../../styles/pages/home.module.css";
import CardsStyles from "../../../styles/components/soc.module.css";
import Data from "../../../data/soc";
import { Link } from "react-router-dom";
import Tab from "./Tab";

export default function Societies() {
  const [category,setCategory]=useState("Socult")
  return (
    <div className={Styles.container} data-aos="zoom-in-up">
      {/* Heading */}
      <h2
        className={Styles.sectionHeading}
        style={{ fontSize: "2.5rem", marginBottom: "3rem" }}
      >
        Societies
      </h2>
      {/* Rotating Cards */}
      <Tab category={category} setCategory={setCategory}></Tab>
      <div className={Styles.societiesSection}>
        <div className={CardsStyles.cardswrapper} style={{ width: "100%" }}>
          {Data.data
            .filter((data) => data.category == category) //eslint-disable-next-line
            .map((item, i) => {
              while (i < 5) {
                return (
                  <RotatingCard
                    name={item.name}
                    description={item.description}
                    shortform={item.shortform}
                    facebook_link={item.facebook_link}
                    key={i}
                  />
                );
              }
            })}
          {/* ReadMore Button */}
          <div className={Styles.readMore}>
            <div className={Styles.animationTrigger}>
              <div className={Styles.moreWrap}>
                <Link to="/societies" className={Styles.moreText}>
                  See more
                </Link>
                <div className={Styles.moreDots}>
                  <div className={`${Styles.dot} ${Styles.dot1}`}></div>
                  <div className={`${Styles.dot} ${Styles.dot2}`}></div>
                  <div className={`${Styles.dot} ${Styles.dot3}`}></div>
                  <div className={`${Styles.dot} ${Styles.dot4}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
