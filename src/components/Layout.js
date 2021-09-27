import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import NavbarStyles from '../styles/components/navbar.module.css';
import FooterStyles from '../styles/components/footer.module.css';
import { useState } from 'react';
import logo from '../images/IIT_Kharagpur_Logo.png';

export default function Layout({ children }) {
    // using setIsScrolled state to render navbar on the basis of scroll status

    const [isScrolled, setIsScrolled] = useState(false);
    const logoText = document.querySelector(`.${NavbarStyles.logo}`);
    const changeNavbarBackground = ()=>{
        window.scrollY>80? setIsScrolled(true) : setIsScrolled(false); 
        
    }

    window.addEventListener('scroll',changeNavbarBackground);
    // navbar class on the basis of scroll status
    let navbarClass;
    if(isScrolled){
        navbarClass= `${NavbarStyles.navbar} ${NavbarStyles.active}`;
        logoText.textContent= 'Gymkhana';
    }else{
        navbarClass=`${NavbarStyles.navbar}`;
        // logoText.textContent = ' ';
    }

    return (
        <div className="layout">
            <nav className={navbarClass}>
                <div>
                    <Link to="/" className={NavbarStyles.logo}>Gymkhana</Link>
                    <input className={NavbarStyles.menuBtn} type="checkbox" id={NavbarStyles.menuBtn} />
                    <label className={NavbarStyles.menuIcon} htmlFor={NavbarStyles.menuBtn}>
                        <span className={NavbarStyles.navicon}></span>
                    </label>
                    <ul className={NavbarStyles.menu}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/results">Results</Link>
                        </li>
                        <li>
                            <Link to="/awards">Awards</Link>
                        </li>
                        {/* <li>
                            <Link to="/elections">Elections</Link>
                        </li> */}
                        <li>
                            <Link to="/booking">Booking</Link>
                        </li>
                        <li>
                            <Link to="/contacts">Contacts</Link>
                        </li>
                    </ul>
                </div>

            </nav>



            <div className="main-container">
                {children}
            </div>
            <footer>
                <div className={FooterStyles.footerContainer}>


                    <div className={FooterStyles.footerCol}>
                        <center>
                            <div className={FooterStyles.columnOne}>
                                <img src={logo} alt="IITKGP Logo" />
                                <div className={FooterStyles.address}>

                                    <div>
                                        <br />

                                        <h3>
                                            Technology Students' Gymkhana
                                        </h3>
                                        <p>
                                            Indian Institute of Technology Kharagpur, <br />
                                            West Bengal - 721302
                                        </p>
                                        <br />
                                        <div className={FooterStyles.iconsContainer}>
                                            <a href="https://www.facebook.com/TSG.IITKharagpur">
                                                <FaFacebook />
                                            </a>
                                            <a href="https://twitter.com/tsg_iitkgp">
                                                <FaTwitter />
                                            </a>
                                            <a href="https://www.youtube.com/channel/UCuTNELMlkNfJxAQ2vGJIe5Q">
                                                <FaYoutube />
                                            </a>
                                            <a href="https://github.com/tsg-iitkgp">
                                                <FaGithub />
                                            </a>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </center>
                    </div>
                    <div className={FooterStyles.footerCol}>
                        <div className={FooterStyles.columnTwo}>
                            <a className={FooterStyles.quickLinkHeader} href="/">
                                Quick Links
                            </a>
                            <br />
                            <br />
                            <br />
                            <a className={FooterStyles.quickLinkOne} href="/">
                                Departments
                            </a>
                            <br />
                            <br />
                            <a className={FooterStyles.quickLinkOne} href="/">
                                Centres
                            </a>
                            <br />
                            <br />
                            <a className={FooterStyles.quickLinkOne} href="/">
                                Departments
                            </a>
                            <br />
                            <br />
                            <a className={FooterStyles.quickLinkOne} href="/">
                                Departments
                            </a>
                        </div>
                    </div>
                    <div className={FooterStyles.footerCol}>
                        <div className={FooterStyles.columnThree}>
                            <a className={FooterStyles.quickLinkHeader} href="/">
                                Explore
                            </a>
                            <br />
                            <br />
                            <br />
                            <a className={FooterStyles.quickLinkOne} href="/">
                                IITKGP Website
                            </a>
                            <br />
                            <br />
                            <a className={FooterStyles.quickLinkOne} href="/">
                                Departments
                            </a>
                            <br />
                            <br />
                            <a className={FooterStyles.quickLinkOne} href="/">
                                Departments
                            </a>
                            <br />
                            <br />
                            <a className={FooterStyles.quickLinkOne} href="/">
                                Departments
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}