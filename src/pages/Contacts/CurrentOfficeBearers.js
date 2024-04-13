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
  const thirdYearCouncil = contactsData.data.filter(
    (element) =>
      element.Category === "General Secretary" ||
      element.Category === "Nominated"
  );
  const secretaries = contactsData.data.filter(
    (element) => element.Category === "Secretary"
  );

  return (
    <>
      <div className={Styles.contactsContainer}>
        <div>
          <div data-aos="zoom-in-up">
            <ContactCard
              name={President.Name}
              designation={President.Post}
              facebook={President.Facebook}
              linkedin={President.LinkedIn}
              email={President.Email}
              imgSrc={`/data/media/images/contacts/${President.img}`}
            />
          </div>
        </div>

        <div>
          <div data-aos="zoom-in-up">
            <ContactCard
              name={HonoraryTreasurer.Name}
              designation={HonoraryTreasurer.Post}
              facebook={HonoraryTreasurer.Facebook}
              linkedin={HonoraryTreasurer.LinkedIn}
              email={HonoraryTreasurer.Email}
              imgSrc={`/data/media/images/contacts/${HonoraryTreasurer.img}`}
            />
          </div>
        </div>

        <div>
          <div data-aos="zoom-in-up">
            <ContactCard
              name={VicePresident.Name}
              designation={VicePresident.Post}
              facebook={VicePresident.Facebook}
              linkedin={VicePresident.LinkedIn}
              email={VicePresident.Email}
              imgSrc={`/data/media/images/contacts/${VicePresident.img}`}
            />
          </div>
        </div>

        <div>
          <div className={Styles.multipleCards}>
            {thirdYearCouncil.map((member, index) => {
              return (
                <div data-aos="zoom-in-up">
                  <ContactCard
                    name={member.Name}
                    designation={member.Post}
                    facebook={member.Facebook}
                    linkedin={member.LinkedIn}
                    email={member.Email}
                    imgSrc={`/data/media/images/contacts/${member.img}`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className={Styles.postHeading}>Secretaries</h2>
          <div className={Styles.multipleCards}>
            {secretaries.map((member, index) => {
              return (
                <div data-aos="zoom-in-up">
                  <ContactCard
                    name={member.Name}
                    designation={member.Post}
                    facebook={member.Facebook}
                    linkedin={member.LinkedIn}
                    email={member.Email}
                    imgSrc={`/data/media/images/contacts/${member.img}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
