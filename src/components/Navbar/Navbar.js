import React, { useState } from "react";

import { NavLink } from "react-router-dom";
// import ResultsDropdown from "./ResultsDropdown";
// import AwardsDropdown from "./AwardsDropdown";
import Styles from "../../styles/components/navbar.module.css";
import useNavbar from "./useNavbar";
export default function Navbar() {
  //using Custom Hook useNavbar for logic of navbarClass
  const navbarClass = useNavbar();
  // const [resultsDropdown, setResultsDropdown] = useState(false);
  // const [awardsDropdown, setAwardsDropdown] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // const handleMouseEnter = (dropdownName) => {
  //   if (window.innerWidth < 960) {
  //     setResultsDropdown(false);
  //     setAwardsDropdown(false);
  //   } else {
  //     if (dropdownName === "Results") setResultsDropdown(true);
  //     else setAwardsDropdown(true);
  //   }
  // };
  // const handleMouseLeave = (dropdownName) => {
  //   if (window.innerWidth < 960) {
  //     setResultsDropdown(false);
  //     setAwardsDropdown(false);
  //   } else {
  //     if (dropdownName === "Results") setResultsDropdown(false);
  //     else setAwardsDropdown(false);
  //   }
  // };
  let listClass;
  if (click) {
    listClass = `${Styles.navMenu} ${Styles.active}`;
  } else {
    listClass = `${Styles.navMenu}`;
  }
  return (
    <div className={navbarClass}>
      <nav className={Styles.navbar}>
        {/* Navbar logo */}

        <div className={Styles.navLogo}>
          <NavLink to="/">GYMKHANA</NavLink>
        </div>

        {/* Menu icon on smaller devices */}

        <div className={Styles.menuIcon} onClick={() => handleClick()}>
          <i class={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        {/* Navlinks */}

        <ul className={listClass}>
          <li className={Styles.navItem}>
            <NavLink
              to="/"
              className={Styles.navLinks}
              activeClassName={Styles.acitveLink}
            >
              Home
            </NavLink>
          </li>
          {/* <li className={Styles.navItem}>
            <NavLink
              to="/blog"
              className={Styles.navLinks}
              activeClassName={Styles.acitveLink}
            >
              Blog
            </NavLink>
          </li> */}
          {/* <li
            className={Styles.navItem}
            onMouseEnter={() => handleMouseEnter("Results")}
            onMouseLeave={() => handleMouseLeave("Results")}
          >
            <NavLink
              to="/results"
              className={Styles.navLinks}
              activeClassName={Styles.acitveLink}
            >
              Results <i class="fas fa-caret-down"></i>
              {resultsDropdown && <ResultsDropdown />}
            </NavLink>
          </li>
          <li
            className={Styles.navItem}
            onMouseEnter={() => handleMouseEnter("Awards")}
            onMouseLeave={() => handleMouseLeave("Awards")}
          >
            <NavLink
              to="/awards"
              className={Styles.navLinks}
              activeClassName={Styles.acitveLink}
            >
              Awards <i class="fas fa-caret-down"></i>
              {awardsDropdown && <AwardsDropdown />}
            </NavLink>
          </li> */}
          <li className={Styles.navItem}>
            <NavLink
              to="/results"
              className={Styles.navLinks}
              activeClassName={Styles.acitveLink}
            >
              Results
            </NavLink>
          </li>
          <li className={Styles.navItem}>
            <NavLink
              to="/awards"
              className={Styles.navLinks}
              activeClassName={Styles.acitveLink}
            >
              Hall of Fame
            </NavLink>
          </li>
          <li className={Styles.navItem}>
            <NavLink
              to="/contacts"
              className={Styles.navLinks}
              activeClassName={Styles.acitveLink}
            >
              Contacts
            </NavLink>
          </li>
          <li className={Styles.navItem}>
            <NavLink
              to="/events"
              className={Styles.navLinks}
              activeClassName={Styles.acitveLink}
            >
              Events
            </NavLink>
          </li>
          <li className={Styles.navItem}>
            <NavLink
              to="/gallery"
              className={Styles.navLinks}
              activeClassName={Styles.acitveLink}
            >
              Gallery
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
