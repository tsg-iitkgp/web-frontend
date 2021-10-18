import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import CurrentSenate from "./Contacts/CurrentSenate";
import Styles from "../styles/contacts.module.css";
import Sidebar from "../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import Secretaries from "./Contacts/Secretaries";
import PastBearers from "./Contacts/PastBearers";
function Contacts() {
  document.title = "Contacts | TSG";
  const [currentSenate, setCurrentSenate] = useState(true);
  const [secretaries, setSecretaries] = useState(false);
  const [pastBearers, setPastBearers] = useState(false);
  const itemsList = [
    {
      title: "Current Senate",
      route: "/contacts/currentSenate",
    },
    {
      title: "Secretaries",
      route: "/contacts/secretaries",
    },
    {
      title: "Past Office Bearers",
      route: "/contacts/past_bearers",
    },
  ];
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/contacts") {
      setCurrentSenate(true);
      setPastBearers(false);
      setSecretaries(false);
    } else if (location.pathname === "/contacts/currentSenate") {
      setCurrentSenate(true);
      setPastBearers(false);
      setSecretaries(false);
    } else if (location.pathname === "/contacts/secretaries") {
      setCurrentSenate(false);
      setPastBearers(false);
      setSecretaries(true);
    } else if (location.pathname === "/contacts/past_bearers") {
      setCurrentSenate(false);
      setPastBearers(true);
      setSecretaries(false);
    }
  }, [location.pathname]);

  return (
    <Layout>
      <div className={Styles.maincontainer}>
        <Sidebar itemsList={itemsList} />
        <div className={Styles.content}>
          {currentSenate && <CurrentSenate />}
          {secretaries && <Secretaries />}
          {pastBearers && <PastBearers />}
        </div>
      </div>
    </Layout>
  );
}

export default Contacts;
