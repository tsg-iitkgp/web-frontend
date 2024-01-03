import React from "react";
import ContactCard from "../../components/ContactCard";
import contactsData from "../../data/contactsData.js";
import Styles from "../../styles/pages/contacts.module.css";
export default function CurrentOfficeBearers() {
  const President = contactsData.data.find(
    (contact) => contact.Post === "President"
  );
  const HonoraryTreasurer = contactsData.data.find(
    (contact) => contact.Post === "Honorary Treasurer"
  );
  const VicePresident = contactsData.data.find(
    (contact) => contact.Post === "Vice President"
  );
  const generalSecretaries = contactsData.data.filter(
    (element) => element.Category === "General Secretary"
  );
  const nominatedPost = contactsData.data.filter(
    (element) => element.Category === "Nominated Posts"
  );
  return (
    <>
      <div className={Styles.contactsContainer} data-aos="zoom-in-up">
        <div>
          <h2 className={Styles.postHeading}>President</h2>
          <ContactCard
            name={President.Name}
            designation={President.Post}
            facebook={President.Facebook}
            linkedin={President.LinkedIn}
            email={President.Email}
            imgSrc={`/data/media/images/contacts/${President.img}`}
          />
        </div>
        <div>
          <h2 className={Styles.postHeading}>Honorary Treasurer</h2>
          <ContactCard
            name={HonoraryTreasurer.Name}
            designation={HonoraryTreasurer.Post}
            facebook={HonoraryTreasurer.Facebook}
            linkedin={HonoraryTreasurer.LinkedIn}
            email={HonoraryTreasurer.Email}
            imgSrc={`/data/media/images/contacts/${HonoraryTreasurer.img}`}
          />
        </div>
        <div>
          <h2 className={Styles.postHeading}>Vice President</h2>
          <ContactCard
            name={VicePresident.Name}
            designation={VicePresident.Post}
            facebook={VicePresident.Facebook}
            linkedin={VicePresident.LinkedIn}
            email={VicePresident.Email}
            imgSrc={`/data/media/images/contacts/${VicePresident.img}`}
          />
        </div>
        <div>
          <h2 className={Styles.postHeading}>General Secretaries</h2>
          <div className={Styles.multipleCards}>
            {generalSecretaries.map((member, index) => {
              return (
                <ContactCard
                  name={member.Name}
                  designation={member.Post}
                  facebook={member.Facebook}
                  linkedin={member.LinkedIn}
                  email={member.Email}
                  imgSrc={`/data/media/images/contacts/${member.img}`}
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
                  facebook={member.Facebook}
                  linkedin={member.LinkedIn}
                  email={member.Email}
                  imgSrc={`/data/media/images/contacts/${member.img}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
