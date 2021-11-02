import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import CurrentSenate from "./Contacts/CurrentSenate";
import Styles from "../styles/pages/contacts.module.css";
import Sidebar from "../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import Secretaries from "./Contacts/Secretaries";
import PastBearers from "./Contacts/PastBearers";
import { contactsSidebarList } from "../components/Sidebar/SidebarList";

function Contacts() {
  document.title = "Contacts | TSG";
  // state variable for rendering content on the basis of sidebar click
  const [currentSenate, setCurrentSenate] = useState(true);
  const [secretaries, setSecretaries] = useState(false);
  const [pastBearers, setPastBearers] = useState(false);

  const location = useLocation();

  useEffect(() => {
    //changing state variable values on the basis of path
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
    } else if (location.pathname === "/contacts/pastBearers") {
      setCurrentSenate(false);
      setPastBearers(true);
      setSecretaries(false);
    }
  }, [location.pathname]);

  return (
    <Layout>
      <div className={Styles.maincontainer}>
        <Sidebar itemsList={contactsSidebarList} />

        <div className={Styles.content}>
          {/* Contacts of the page on basis of route */}
          {currentSenate && <CurrentSenate />}
          {secretaries && <Secretaries />}
          {pastBearers && <PastBearers />}
        </div>
      </div>
    </Layout>
  );
}

export default Contacts;
