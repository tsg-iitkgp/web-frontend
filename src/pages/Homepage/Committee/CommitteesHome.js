import React from "react";
import Styles from "../../../styles/pages/home.module.css";
import CommitteeCard from "./CommitteeCard";
export default function CommitteesHome() {
  const data = [
    {
      number: 1,
      heading: "Sports and Games",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?`,
      route: "/committees/sports",
      photo: "Sports.jpg",
    },
    {
      number: 2,
      heading: "Social and Cultural",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?`,
      route: "/committees/socult",
      photo: "Socult.jpg",
    },
    {
      number: 3,
      heading: "Technology",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?`,
      route: "/committees/tech",
      photo: "Technology.jpg",
    },
    {
      number: 4,
      heading: "Students' Welfare",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?`,
      route: "/committees/welfare",
      photo: "StudentWelfare.jpg",
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
