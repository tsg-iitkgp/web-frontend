import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import Styles from "../styles/pages/Results/results.module.css";
import GC from "./results/GC";
import Interiit from "./results/Interiit";

function Results() {
  document.title = "Results | TSG";
  // state variables for conditional rendering
  const [gC, setGC] = useState(true);
  const [interIIT, setInterIIT] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/results/gc") {
      setGC(true);
      setInterIIT(false);
    } else if (location.pathname === "/results/interiit") {
      setInterIIT(true);
      setGC(false);
    } else {
      setInterIIT(false);
      setGC(true);
    }
  }, [location.pathname]);

  return (
    <Layout>
      <div className={Styles.resultsSection}>
        {/* <Sidebar itemsList={resultsSidebarList} /> */}

        <div className={Styles.content}>
          {/* Conditional Rendering of routes on the basis of route */}
          {gC && <GC />}
          {interIIT && <Interiit />}
        </div>
      </div>
    </Layout>
  );
}

export default Results;
