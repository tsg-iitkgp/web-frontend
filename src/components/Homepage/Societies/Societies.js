import React from "react";
import RotatingCard from "../../../components/RotatingCard";
import Styles from "../../../styles/pages/home.module.css";
import CardsStyles from "../../../styles/components/soc.module.css";
import Data from "../../../data/soc";
import { Link } from "react-router-dom";
export default function Societies() {
  return (
    <div className={Styles.container}>
      {/* Heading */}
      <h2
        className={Styles.sectionHeading}
        style={{ fontSize: "2.5rem", marginBottom: "3rem" }}
      >
        Societies
      </h2>
      {/* Rotating Cards */}
      <div className={Styles.societiesSection}>
        <div className={CardsStyles.cardswrapper} style={{ width: "100%" }}>
          {Data.data
            .filter((data) => data.category === "Socult")
            .map((item, i) => {
              while (i < 5) {
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
          {/* ReadMore Button */}
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
    </div>
  );
}
