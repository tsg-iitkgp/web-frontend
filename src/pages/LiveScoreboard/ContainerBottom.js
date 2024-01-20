import React from 'react';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Styles from "./ContainerBottom.module.css";

const ContainerBottom = () => {

    const teamabats = [
        { name: "Ramesh", r: "4", b: "5", c:"0", d:"0"},
        { name: "Ramesh", r: "4", b: "5", c:"0", d:"0"},
        { name: "Ramesh", r: "4", b: "5", c:"0", d:"0"},
        { name: "Ramesh", r: "4", b: "5", c:"0", d:"0"},
        { name: "Ramesh", r: "4", b: "5", c:"0", d:"0"},
        { name: "Ramesh", r: "4", b: "5", c:"0", d:"0"},
    ];

    const teamabow = [
        { name: "Ramesh", r: "4", b: "5", c:"0"},
        { name: "Ramesh", r: "4", b: "5", c:"0"},
        { name: "Ramesh", r: "4", b: "5", c:"0"},
        { name: "Ramesh", r: "4", b: "5", c:"0"},
    ];

    const teambbats = [
        { name: "suresh", r: "4", b: "5", c:"0", d:"0"},
        { name: "Suresh", r: "4", b: "5", c:"0", d:"0"},
        { name: "Suresh", r: "4", b: "5", c:"0", d:"0"},
        { name: "Suresh", r: "4", b: "5", c:"0", d:"0"},
        { name: "Suresh", r: "4", b: "5", c:"0", d:"0"},
        { name: "Suresh", r: "4", b: "5", c:"0", d:"0"},
        { name: "Suresh", r: "4", b: "5", c:"0", d:"0"},
    ];

    const teambbow = [
        { name: "Suresh", r: "4", b: "5", c:"0"},
        { name: "Suresh", r: "4", b: "5", c:"0"},
        { name: "Suresh", r: "4", b: "5", c:"0"},
        { name: "Suresh", r: "4", b: "5", c:"0"},
    ]

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="withTable">
        <div className={Styles.container}>
            <div className={Styles.blocktabs}>
                <div className={toggleState === 1 ? Styles.tabsactivetabs : Styles.tabs} onClick={() => toggleTab(1)}>
                    LBS
                </div>
                <div className={toggleState === 2 ? Styles.tabsactivetabs : Styles.tabs} onClick={() => toggleTab(2)}>
                    RPH
                </div>
            </div>

            <div className={Styles.contenttabs}>
                <div className={toggleState === 1 ?Styles.contentactivecontent : Styles.content}>
                    <table className={Styles.description}>
                    <tr>
                        <th className={Styles.heading}> Batsman </th>
                        <th className={Styles.heading}> R </th>
                        <th className={Styles.heading}> B </th>
                        <th className={Styles.heading}> 4s </th>
                        <th className={Styles.heading}> 6s </th>
                    </tr>
                    <hr className={Styles.ruler}></hr>
                    {teamabats.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.r}</td>
                                <td>{val.b}</td>
                                <td>{val.c}</td>
                                <td>{val.d}</td>
                            </tr>
                        )
                    })}
                    </table>


                    <table className={Styles.description}>
                    <tr>
                        <th className={Styles.heading}> Bowler </th>
                        <th className={Styles.heading}> O </th>
                        <th className={Styles.heading}> R </th>
                        <th className={Styles.heading}> W </th>
                    </tr>
                    <hr className={Styles.ruler2}></hr>
                    {teamabow.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.r}</td>
                                <td>{val.b}</td>
                                <td>{val.c}</td>
                            </tr>
                        )
                    })}
                    </table>
                </div>

                <div className={toggleState === 2 ?Styles.contentactivecontent : Styles.content}>
                <table className={Styles.description}>
                    <tr>
                        <th className={Styles.heading}> Batsman </th>
                        <th className={Styles.heading}> R </th>
                        <th className={Styles.heading}> B </th>
                        <th className={Styles.heading}> 4s </th>
                        <th className={Styles.heading}> 6s </th>
                    </tr>
                    <hr className={Styles.ruler}></hr>
                    {teambbats.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.r}</td>
                                <td>{val.b}</td>
                                <td>{val.c}</td>
                                <td>{val.d}</td>
                            </tr>
                        )
                    })}
                    </table>


                    <table className={Styles.description}>
                    <tr>
                        <th className={Styles.heading}> Bowler </th>
                        <th className={Styles.heading}> O </th>
                        <th className={Styles.heading}> R </th>
                        <th className={Styles.heading}> W </th>
                    </tr>
                    <hr className={Styles.ruler2}></hr>
                    {teambbow.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.name}</td>
                                <td>{val.r}</td>
                                <td>{val.b}</td>
                                <td>{val.c}</td>
                            </tr>
                        )
                    })}
                    </table>
                </div>
            </div>

        </div>
    </section>
  )
}

export default ContainerBottom