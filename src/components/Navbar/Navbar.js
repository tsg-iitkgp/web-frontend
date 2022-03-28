import React, { useState } from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { NavLink } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import Styles from "../../styles/components/navbar.module.css";
import useNavbar from "./useNavbar";
import eventsData from "../Events/eventsData";
import Notification from "./Notification";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  //using Custom Hook useNavbar for logic of navbarClass
  const navbarClass = useNavbar();
  const [click, setClick] = useState(false);
  const [notification, setNotification] = useState({
    badgeContent: 0,
    click: false,
  });
  const handleClick = () => setClick(!click);
  const highlightEvents = eventsData.filter((event) => event.isHighlight);
  console.log(highlightEvents);
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
  const handleNotificationClick = () => {
    if (!notification.click) {
      setNotification({ badgeContent: 0, click: true });
    } else {
      setNotification({ badgeContent: 0, click: false });
    }
  };
  const history = useHistory();
  const handleNotiClick = () => {
    history.push("/events");
  };
  return (
    <div className={navbarClass}>
      <nav className={Styles.navbar}>
        {/* Navbar logo */}

        <div className={Styles.navLogo}>
          <NavLink to="/">GYMKHANA</NavLink>
        </div>

        {/* Menu icon on smaller devices */}

        <div className={Styles.menuIcon} onClick={() => handleClick()}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
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
              to="/events"
              className={Styles.navLinks}
              activeClassName={Styles.acitveLink}
            >
              Events
            </NavLink>
          </li>
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
              to="/gallery"
              className={Styles.navLinks}
              activeClassName={Styles.acitveLink}
            >
              Gallery
            </NavLink>
          </li>
          <li className={Styles.navItem}>
            <NavLink
              to="/faq"
              className={Styles.navLinks}
              activeClassName={Styles.acitveLink}
            >
              FAQ
            </NavLink>
          </li>
          {window.innerWidth > 768 && (
            <li
              className={Styles.navItem}
              onClick={handleNotificationClick}
              style={{ position: "relative" }}
              id="notification"
            >
              <Badge badgeContent={notification.badgeContent} color="secondary">
                <NotificationsIcon
                  style={{ color: "darkgrey", cursor: "pointer" }}
                />
              </Badge>
              {notification.click && (
                <div className={Styles.notifications}>
                  {highlightEvents.map((event, index) => (
                    <Notification
                      key={index}
                      event={event}
                      handleClick={handleNotiClick}
                    />
                  ))}
                </div>
              )}
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
