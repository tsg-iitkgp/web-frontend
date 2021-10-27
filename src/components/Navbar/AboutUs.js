import React from "react";
import Styles from "../../styles/pages/home.module.css";
export default function AboutUs() {
  return (
    <div className={Styles.aboutUsContainer} id="aboutUs">
      <div className={Styles.aboutUsContent}>
        <h2 className={Styles.sectionHeading}>About Us</h2>
        <p className={Styles.description}>
          Technology Students’ Gymkhana is the hub of the numerous
          extra-curricular and co-curricular activities in IIT Kharagpur ranging
          from sports to socio-cultural. The Gymkhana is managed by the
          students, for the students, under the guidance and active
          participation of the faculty and staff members.
        </p>
        <p className={Styles.description}>
          The moto of Technology Students' Gymkhana is YOGAH KARMASU KAUSALAM
          which in English means "Perfection in action is Yoga". Our goal is to
          bring overall development in IITians through cultivating and nurturing
          their extra-curricular talents.
        </p>
      </div>
    </div>
  );
}
