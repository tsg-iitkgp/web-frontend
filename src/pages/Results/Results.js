import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../../components/Layouts/Layout";
import {
  DropdownSelector,
  eventVerticals,
} from "../../components/DropdownSelector";

export default function Results() {
  const location = useLocation();

  const [pageHeading, setPageHeading] = useState("");

  useEffect(() => {
    if (location.pathname === "/results/gc") {
      setPageHeading("GENERAL CHAMPIONSHIP");
    } else if (location.pathname === "/results/interiit") {
      setPageHeading("INTER IIT");
    }
  }, [location.pathname]);

  document.title = "Results | TSG";

  return (
    <Layout>
      <section className="withTable">
        <p className="pageHeading">{pageHeading}</p> {/* GLOBAL CSS */}
        <DropdownSelector
          itemList={eventVerticals}
          defaultOption={eventVerticals[0]}
        />
      </section>
    </Layout>
  );
}
