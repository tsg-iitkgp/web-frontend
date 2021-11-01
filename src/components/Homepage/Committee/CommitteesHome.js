import React from "react";
import Styles from "../../../styles/pages/home.module.css";
import CommitteeCard from "./CommitteeCard";
export default function CommitteesHome() {
  return (
    <div className={Styles.container}>
      <h2
        className={Styles.sectionHeading}
        style={{ fontSize: "2.5rem", marginBottom: 0 }}
      >
        Committees
      </h2>
      <CommitteeCard />
    </div>
  );
}
