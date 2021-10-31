import React from "react";
import Styles from "../styles/components/soc.module.css";
import Layout from "../components/Layout";
import RotatingCards from "../components/RotatingCards";

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
        {committees.map((committee, index) => {
          return (
            <RotatingCards
              name={committee.name}
              category={committee.category}
            />
          );
        })}
      </div>
    </Layout>
  );
}
