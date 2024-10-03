import React from "react";
import Styles from "../../styles/pages/previous.module.css";
import senateData from "./senateData.json";
import { useState } from "react";
import ContactCard from "../../components/ContactCard";
import primg from "./../Contacts/Images/prf.png";

const years = [
    "2023-2024",
    "2022-2023",
    "2021-2022",
    "2020-2021",
    "2019-2020",
    "2018-2019",
    "2017-2018",
    "2016-2017",
    "2015-2016",
    "2014-2015",
    "2013-2014",
    "2012-2013",
    "2011-2012",
    "2010-2011",
    "2009-2010",
    "2008-2009",
    "2007-2008",
    "2006-2007",
    "2005-2006",
    "2004-2005",
    "2003-2004",
    "2002-2003",
    "2001-2002",
    "2000-2001",
    "1999-2000",
    "1998-1999",
    "1997-1998",
    "1996-1997",
    "1995-1996",
    "1994-1995",
    "1993-1994",
    "1992-1993",
    "1991-1992",
    "1990-1991",
    "1989-1990",
    "1988-1989",
    "1987-1988",
    "1986-1987",
    "1985-1986",
    "1984-1985",
    "1983-1984",
    "1982-1983",
    "1981-1982",
    "1980-1981",
    "1979-1980",
    "1978-1979",
    "1977-1978",
    "1976-1977",
    "1975-1976",
    "1974-1975",
    "1973-1974",
    "1972-1973",
    "1971-1972",
    "1970-1971",
    "1969-1970",
    "1968-1969",
    "1967-1968",
    "1966-1967",
    "1965-1966",
    "1964-1965",
    "1963-1964",
    "1962-1963",
    "1961-1962",
    "1960-1961",
    "1959-1960",
    "1958-1959",
    "1957-1958",
    "1956-1957",
    "1955-1956",
    "1954-1955",
    "1953-1954",
    "1952-1953",
];

export default function PreviousOfficeBearers() {
    const [currentTab, setCurrentTab] = useState("senate");
    const [currentYear, setCurrentYear] = useState("2023-2024");

    return (
        <div>
            <section className="awards content">
                <div className="tabs"></div>
                <div className="select">
                    <select
                        value={currentYear}
                        onChange={(e) => setCurrentYear(e.target.value)}
                    >
                        {years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                {(senateData[currentYear][currentTab]["profs"] !== undefined ||
                    currentTab === "specialRecog") && (
                    <>
                        <div className="cards">
                            {currentTab !== "specialRecog"
                                ? senateData[currentYear][currentTab][
                                      "profs"
                                  ]?.map((winner) => (
                                      <div data-aos="zoom-in-up">
                                          <ContactCard
                                              name={winner.Name}
                                              imgSrc={primg}
                                              designation={winner.Post}
                                          />
                                      </div>
                                  ))
                                : senateData[currentYear][currentTab].map(
                                      (winner) => (
                                          <div data-aos="zoom-in-up">
                                              <ContactCard
                                                  name={winner.Name}
                                                  imgSrc={"primg"}
                                                  designation={winner.Post}
                                              />
                                          </div>
                                      )
                                  )}
                        </div>
                    </>
                )}
                {currentTab !== "specialRecog" && (
                    <>
                        <div className={Styles.senateCard}>
                            {senateData[currentYear][currentTab]["honours"].map(
                                (winner) => (
                                    <card
                                        className={Styles.card1}
                                        data-aos="zoom-in-up"
                                    >
                                        <p>
                                            <span
                                                style={{
                                                    color: "rgb(190, 190, 190)",
                                                }}
                                            >
                                                {" "}
                                                {winner.Post}
                                            </span>
                                            <br />

                                            {winner.Name}
                                        </p>
                                    </card>
                                )
                            )}
                        </div>
                    </>
                )}
            </section>
        </div>
    );
}
