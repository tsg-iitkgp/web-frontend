import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import Styles from "../styles/pages/Results/results.module.css";
import Sidebar from "../components/Sidebar/Sidebar";
import GC from "./results/GC";
import Interiit from "./results/Interiit";
import { resultsSidebarList } from "../components/Sidebar/SidebarList";
function Results() {
  document.title = "Results | TSG";
  // state variables for conditional rendering
  const [gC, setGC] = useState(true);
  const [interIIT, setInterIIT] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/results") {
      setInterIIT(false);
      setGC(true);
    } else if (location.pathname === "/results/gc") {
      setGC(true);
      setInterIIT(false);
    } else if (location.pathname === "/results/inter_iit") {
      setInterIIT(true);
      setGC(false);
    }
  }, [location.pathname]);

  return (
    <Layout>
      <div className={Styles.resultsSection}>
        <Sidebar itemsList={resultsSidebarList} />

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
