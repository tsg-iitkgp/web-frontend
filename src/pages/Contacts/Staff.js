import React from "react";
import Styles from "../../styles/pages/contacts.module.css";
import ContactCard from "../../components/ContactCard";
import staffData from "../../data/staffData";

export default function Staff() {
  return (
    <div>
      <div className={Styles.multipleCards}>
        {staffData.data.map((member, index) => {
          return (
            <div data-aos="zoom-in-up">
              <ContactCard
                name={member.Name}
                designation={member.Post}
                email={member.Email}
                imgSrc={`/data/media/images/staff/${member.RollNo}.png`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
