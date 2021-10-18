import React, { useState } from "react";
import Layout from "../components/Layout";
import Styles from "../styles/pages/Results/results.module.css";
import { useLocation } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import GC from "./results/GC";
// import Interiit from "./results/Interiit";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import GC from "./results/GC";
import Interiit from "./results/Interiit";
function Results() {
  document.title = "Results | TSG";
  const [gC, setGC] = useState(true);
  const [interIIT, setInterIIT] = useState(false);
  const itemsList = [
    {
      title: "General Championship",
      route: "/results/gc",
    },
    {
      title: "Inter IIT",
      route: "/results/inter_iit",
    },
  ];
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
        <Sidebar itemsList={itemsList} />
        <div className={Styles.content}>
          {gC && <GC />}
          {interIIT && <Interiit />}
        </div>
      </div>
    </Layout>
  );
}

export default Results;
