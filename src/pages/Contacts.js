import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import CurrentOfficeBearers from "./Contacts/CurrentOfficeBearers";
import Styles from "../styles/pages/contacts.module.css";
import Sidebar from "../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import Secretaries from "./Contacts/Secretaries";
import PastBearers from "./Contacts/PastBearers";
import { contactsSidebarList } from "../components/Sidebar/SidebarList";
import Staff from "./Contacts/Staff";

function Contacts() {
  document.title = "Contacts | TSG";
  // state variable for rendering content on the basis of sidebar click
  const [currentOfficeBearers, setCurrentOfficeBearers] = useState(true);
  const [secretaries, setSecretaries] = useState(false);
  const [pastBearers, setPastBearers] = useState(false);
  const [staff, setStaff] = useState(false);

  const location = useLocation();

  useEffect(() => {
    //changing state variable values on the basis of path
    if (location.pathname === "/contacts") {
      setCurrentOfficeBearers(true);
      setPastBearers(false);
      setSecretaries(false);
      setStaff(false);
    } else if (location.pathname === "/contacts/current-office-bearers") {
      setCurrentOfficeBearers(true);
      setPastBearers(false);
      setSecretaries(false);
      setStaff(false);
    } else if (location.pathname === "/contacts/secretaries") {
      setCurrentOfficeBearers(false);
      setPastBearers(false);
      setStaff(false);
      setSecretaries(true);
    } else if (location.pathname === "/contacts/pastBearers") {
      setCurrentOfficeBearers(false);
      setStaff(false);
      setPastBearers(true);
      setSecretaries(false);
    } else if (location.pathname === "/contacts/staff") {
      setCurrentOfficeBearers(false);
      setStaff(true);
      setPastBearers(false);
      setSecretaries(false);
    }
  }, [location.pathname]);

  return (
    <Layout>
      <div className={Styles.maincontainer}>
        <Sidebar itemsList={contactsSidebarList} />

        <div className={Styles.content}>
          {/* Contacts of the page on basis of route */}
          {currentOfficeBearers && <CurrentOfficeBearers />}
          {secretaries && <Secretaries />}
          {pastBearers && <PastBearers />}
          {staff && <Staff />}
        </div>
      </div>
    </Layout>
  );
}

export default Contacts;
