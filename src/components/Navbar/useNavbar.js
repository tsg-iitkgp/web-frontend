import { useState } from "react";
import { useLocation } from "react-router-dom";
import Styles from "../../styles/components/navbar.module.css";
export default function useNavbar() {
  // using setIsScrolled state to render navbar on the basis of scroll status
  const location = useLocation(); //to render navbar on the basis of route
  const [isScrolled, setIsScrolled] = useState(false);
  const changeNavbarBackground = () => {
    window.scrollY > 80 ? setIsScrolled(true) : setIsScrolled(false);
  };
  window.addEventListener("scroll", changeNavbarBackground);
  // navbar class on the basis of scroll status
  let navbarClass;

  //if path is home then render tranparent navbar
  if (location.pathname === "/") {
    if (isScrolled) {
      navbarClass = `${Styles.navbarContainer} ${Styles.activeNavbar}`;
    } else {
      navbarClass = `${Styles.navbarContainer}`;
    }
  } else {
    navbarClass = `${Styles.navbarContainer} ${Styles.activeNavbar}`;
  }
  return navbarClass;
}
