import React from "react";
import Styles from "../../../styles/pages/home.module.css";
import CommitteeCard from "./CommitteeCard";
export default function CommitteesHome() {
  const data = [
    {
      number: 1,
      heading: "Technology",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?`,
      route: "/committees/2021/tech",
    },
    {
      number: 2,
      heading: "Social and Culture",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?`,
      route: "/committees/2021/socult",
    },
    {
      number: 3,
      heading: "Sports and Games",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?`,
      route: "/committees/2021/sports",
    },
    {
      number: 4,
      heading: "Students' Welfare",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?`,
      route: "/committees/2021/welfare",
    },
  ];
  return (
    <div data-aos="zoom-in-up" className={Styles.container}>
      <div className={Styles.committeesSection}>
        <h2 className={Styles.sectionHeading}>Committees</h2>
        <div className={Styles.committeesContainer}>
          {data.map((item, index) => (
            <CommitteeCard key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
