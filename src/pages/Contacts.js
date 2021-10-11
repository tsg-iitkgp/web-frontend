import React from "react";
import ContactCard from "../components/ContactCard";
import Layout from "../components/Layout";
import contactsData from "../data/contactsData.js";
import Styles from "../styles/contacts.module.css";
import img from "../images/19AE10017.png";
function Contacts() {
  document.title = "Contacts | TSG";
  const President = contactsData.data.find(
    (contact) => contact.Post === "President"
  );
  const VicePresident = contactsData.data.find(
    (contact) => contact.Post === "Vice-President"
  );
  const generalSecretaries = contactsData.data.filter(
    (element) => element.Category === "General Secretary"
  );
  const nominatedPost = contactsData.data.filter(
    (element) => element.Category === "Nominated Posts"
  );
  return (
    <Layout>
      <div className={Styles.maincontainer}>
        <h1 className="pageHeading">Contact Us</h1>
        <div className={Styles.contactsContainer}>
          <div>
            <h2 className={Styles.postHeading}>President</h2>
            <ContactCard
              name={President.Name}
              designation={President.Post}
              email={President.Email}
              imgSrc={`../data/images/contacts/${President.img}`}
            />
          </div>
          <div>
            <h2 className={Styles.postHeading}>Vice-President</h2>
            <ContactCard
              name={VicePresident.Name}
              designation={VicePresident.Post}
              email={VicePresident.Email}
              imgSrc={`../data/images/contacts/${VicePresident.img}`}
            />
          </div>
          <div>
            <h2 className={Styles.postHeading}>General Secretaries</h2>
            <div className={Styles.multipleCards}>
              {generalSecretaries.map((Gsec, index) => {
                return (
                  <ContactCard
                    name={Gsec.Name}
                    designation={Gsec.Post}
                    email={Gsec.Email}
                    imgSrc={`../data/images/contacts/${Gsec.img}`}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <h2 className={Styles.postHeading}>Nominated Posts</h2>
            <div className={Styles.multipleCards}>
              {nominatedPost.map((member, index) => {
                return (
                  <ContactCard
                    name={member.Name}
                    designation={member.Post}
                    email={member.Email}
                    imgSrc={`../data/images/contacts/${member.img}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contacts;
