import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../../components/Layouts/Layout";
import Styles from "../../styles/pages/Results/results.module.css";
import GC from "./GC/GC";
import Interiit from "./InterIIT/InterIIT";

export default function Results() {
  document.title = "Results | TSG";

  // State variables for conditional rendering
  const [gc, setGC] = useState(true);
  const [interIIT, setInterIIT] = useState(false);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/results") {
      setGC(true);
      setInterIIT(false);
    } else if (location.pathname === "/results/gc") {
      setGC(true);
      setInterIIT(false);
    } else if (location.pathname === "/results/interiit") {
      setGC(false);
      setInterIIT(true);
    }
  }, [location.pathname]);

  return (
    <Layout>
      <div className={Styles.resultsSection}>
        <div className={Styles.content}>
          {gc && <GC />}
          {interIIT && <Interiit />}
        </div>
      </div>
    </Layout>
  );
}