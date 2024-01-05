import { useLocation } from "react-router-dom";
import Layout from "../../components/Layouts/Layout";
import Styles from "../../styles/pages/Results/results.module.css";
import GC from "./GC/GC";
import InterIIT from "./InterIIT/InterIIT";

export default function Results() {
  const location = useLocation();
  document.title = "Results | TSG";

  return (
    <Layout>
      <div className={Styles.resultsSection}>
        <div className={Styles.content}>
          {location.pathname === "/results/gc" && <GC />}
          {location.pathname === "/results/interiit" && <InterIIT />}
        </div>
      </div>
    </Layout>
  );
}
