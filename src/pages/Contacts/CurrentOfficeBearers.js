import React, { useEffect, useState } from "react";
import ContactCard from "../../components/ContactCard";
import contactsData from "../../data/contactsData.js";
import Styles from "../../styles/pages/contacts.module.css";
import axios from "axios";
import apiService from "../../apiService.js";

export default function CurrentOfficeBearers() {
    const [contacts, setContacts] = useState();
    const [refreshContacts, setRefreshContacts] = useState(true);

    const President = contactsData.data.find(
        (contact) => contact.Post === "President"
    );
    const Associate_President = contactsData.data.find(
        (contact) => contact.Post === "Associate President"
    );
    const HonoraryTreasurer = contactsData.data.find(
        (contact) => contact.Post === "Honorary Treasurer"
    );

    // const VicePresident = contactsData.data.find(
    //   (contact) => contact.Post === "Vice President"
    // );

    const thirdYearCouncil = contactsData.data.filter(
        (element) =>
            element.Category === "General Secretary" ||
            element.Category === "Nominated"
    );
    const secretaries = contactsData.data.filter(
        (element) => element.Category === "Secretary"
    );

    useEffect(() => {
        const getContacts = async () => {
            const response = await axios.get(
                `${apiService}/user/getContacts/2024-2025`
            );

            if (response.status === 200) {
                setContacts(response.data.contacts);
            }
        };

        getContacts();
    }, [refreshContacts]);

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
                            name={Associate_President.Name}
                            designation={Associate_President.Post}
                            facebook={Associate_President.Facebook}
                            linkedin={Associate_President.LinkedIn}
                            email={Associate_President.Email}
                            imgSrc={`/data/media/images/contacts/${Associate_President.img}`}
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
                {contacts && (
                    <>
                        <div>
                            <div data-aos="zoom-in-up">
                                <ContactCard
                                    name={contacts["VICE PRESIDENT"].name}
                                    designation={contacts["VICE PRESIDENT"].por}
                                    facebook={
                                        contacts["VICE PRESIDENT"].fb_link
                                    }
                                    linkedin={
                                        contacts["VICE PRESIDENT"].linkedin_link
                                    }
                                    email={contacts["VICE PRESIDENT"].email}
                                    imgSrc={contacts["VICE PRESIDENT"].image}
                                />
                            </div>
                        </div>

                        <div>
                            <div className={Styles.multipleCards}>
                                {contacts["THIRD YEAR COUNCIL"].map(
                                    (member, index) => {
                                        return (
                                            <div data-aos="zoom-in-up">
                                                <ContactCard
                                                    name={member.name}
                                                    designation={member.por}
                                                    facebook={member.fb_link}
                                                    linkedin={
                                                        member.linkedin_link
                                                    }
                                                    email={member.email}
                                                    imgSrc={member.image}
                                                />
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        </div>

                        <div>
                            <h2 className={Styles.postHeading}>Secretaries</h2>
                            <div className={Styles.multipleCards}>
                                {contacts["SECRETARY"].map((member, index) => {
                                    return (
                                        <div data-aos="zoom-in-up">
                                            <ContactCard
                                                name={member.name}
                                                designation={member.por}
                                                facebook={member.fb_link}
                                                linkedin={member.linkedin_link}
                                                email={member.email}
                                                imgSrc={member.image}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
