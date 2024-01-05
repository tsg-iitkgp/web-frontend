import React from "react";
import Layout from "../../components/Layouts/Layout";
import Styles from "../../styles/pages/contacts.module.css";
import {
  DropdownSelector,
  contactsDropdownList,
} from "../../components/DropdownSelector";

function Contacts() {
  document.title = "Contacts | TSG";

  return (
    <Layout>
      <div className={Styles.maincontainer}>
        <h3>Contacts</h3>
        <DropdownSelector itemList={contactsDropdownList} defaultOption={"CURRENT OFFICE BEARERS"} />
      </div>
    </Layout>
  );
}

export default Contacts;
