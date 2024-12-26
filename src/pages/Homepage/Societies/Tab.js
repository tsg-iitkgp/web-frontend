import React, { useState } from "react";
import Styles from "../../../styles/components/TabsSection/tabs.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const Tab = ({ category, onTabChange }) => {
  const categories = [
    { id: "Socult", label: "Social and Cultural" },
    { id: "Tech", label: "Technology" },
    { id: "Sports & Games", label: "Sports and Games" },
    { id: "Welfare", label: "Student's Welfare" },
  ];
  const [dropdown, setDropdown] = useState(false);
  const currentCategory = categories.find((cat) => cat.id === category)?.label;
  return (
    <div className={Styles.parentDiv}>
      <div className={Styles.tabContainer}>
        {categories.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`${category === id ? Styles.activeTab : Styles.tabs}`}
            aria-pressed={category === id}
          >
            {label}
          </button>
        ))}
      </div>
      <div className={Styles.smallParentDiv}>
      <div className={Styles.smTabContainer} >
          <span className={Styles.smHeading}>{currentCategory}</span>
          <button className={Styles.smDropdown} onClick={() => setDropdown((prev) => !prev)}>
            {dropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
        </div>  
          {dropdown && (
            <div className={Styles.dropdownMenu}>
               {categories.map(({ id, label }) => (
            <span
              key={id}
              className={Styles.dropdownItems}
              onClick={() => {
                onTabChange(id);
                setDropdown(false);
              }}
            >
              {label}
            </span>
          ))}
            </div>
          )}
      </div>
    </div>
       
     
 
  );
};

export default Tab;
