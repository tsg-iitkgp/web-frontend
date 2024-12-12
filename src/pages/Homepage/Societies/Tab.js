import React from "react";
import Styles from "../../../styles/components/TabsSection/tabs.module.css";
const Tab = (props) => {
  return (
    <div className={Styles.tabContainer}>
      <button onClick={()=>props.setCategory("Socult")}  className={`${props.category === "Socult" ? Styles.activeTab : Styles.tabs}`}>Social And Cultural</button>
      <button onClick={()=>props.setCategory("Tech")} className={`${props.category === "Tech" ? Styles.activeTab : Styles.tabs}`}>Technology</button>
      <button onClick={()=>props.setCategory("Sports & Games")} className={`${props.category === "Sports & Games" ? Styles.activeTab : Styles.tabs}`}>Sports and Games</button>
      <button onClick={()=>props.setCategory("Welfare")} className={`${props.category === "Welfare" ? Styles.activeTab : Styles.tabs}`}>Student's Welfare</button>
    </div>
  );
}
export default Tab;
