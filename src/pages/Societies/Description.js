import React from "react";
import Styles from "../../styles/pages/Society/Description.module.css";
export default function Description() {
  return (
    <div className={Styles.descriptionDiv}>
      <h2 className={Styles.descriptionHeading}>DESCRIPTION</h2>
      <p className={Styles.description}>
        <span style={{ color: "#80b739", fontWeight: "600" }}>
          180 Degrees Consulting{" "}
        </span>
        <span>
          offers high-quality consulting services without the premium price tag.
          Our team comprises carefully selected top-tier university students who
          volunteer their time because they share our vision and values. We
          partner with non-profits and social enterprises to provide innovative,
          practical, and sustainable solutions to the challenges they face.We
          called 180 Degrees because we work to turn good organizations into
          great organizations, and challenges into opportunities.
        </span>
        
      </p>
    </div>
  );
}
