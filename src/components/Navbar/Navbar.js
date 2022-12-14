import React, { useState, useEffect } from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { NavLink } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import Styles from "../../styles/components/navbar.module.css";
import useNavbar from "./useNavbar";
import eventsData from "../Events/eventsData";
import Notification from "./Notification";
import { useHistory } from "react-router-dom";
import Dropdown from "./Dropdown.js";

export default function Navbar() {
  //using Custom Hook useNavbar for logic of navbarClass
  const [dropdown, setDropdown] = useState(false);
  const navbarClass = useNavbar();
  const [click, setClick] = useState(false);
  const [notification, setNotification] = useState({
    badgeContent: 0,
    click: false,
  });
  const handleClick = () => setClick(!click);
  const highlightEvents = eventsData.filter((event) => event.isHighlight);
  // console.log(highlightEvents);
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
  useEffect(() => {
    setNotification({ badgeContent: highlightEvents.length, click: false });
  }, [highlightEvents.length]);

  return (
    <div className={navbarClass}>
      <nav className={Styles.navbar}>
        {/* Navbar logo */}

        <div className={Styles.navLogo}>
          <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <img src="/data/media/images/general/gymkhanaLogo.png" alt="KGP_logo" />
            <span>&nbsp;TSG</span>
          </NavLink>
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
              exact
            >
              Home
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

          <li
                  className={Styles.navItem}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <NavLink
              to={NaN}
              className={Styles.navLinks}
              activeClassName={Styles.acitveLink}
            >
              Results
            </NavLink>
                  {dropdown && <Dropdown handleClick = {()=>{handleClick()}}/>}
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
              to="/opportunities"
              className={Styles.navLinks}
              activeClassName={Styles.acitveLink}
            >
              Opportunities
            </NavLink>
          </li>
          {/* <li className={Styles.navItem}>
            <NavLink
              to="/gallery"
              className={Styles.navLinks}
              activeClassName={Styles.acitveLink}
            >
              Gallery
            </NavLink>
          </li> */}
          <li className={Styles.navItem}>
            {false ? <NavLink>TSG Blog</NavLink> : <a href="https://tsgblog.iitkgp.ac.in/" target="_blank" rel="noreferrer" >TSG Blog</a>}
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
                  {highlightEvents.length ? (
                    highlightEvents.map((event, index) => (
                      <Notification
                        key={index}
                        event={event}
                        handleClick={handleNotiClick}
                      />
                    ))
                  ) : (
                    <p style={{ padding: "1rem" }}>No Notifications</p>
                  )}
                </div>
              )}
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
