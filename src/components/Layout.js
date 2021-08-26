import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import NavbarStyles from '../styles/components/navbar.module.css';
import FooterStyles from '../styles/components/footer.module.css';
import kgpLogo from '../data/images/general/IIT_Kharagpur_Logo.svg';

export default function Layout({ children }) {
    return (
        <div className="layout">
            <nav className={NavbarStyles.navbar}>
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
                        {/* <li>
                        <a href>About</a>
                        <ul className={NavbarStyles.menu}>
                            <li><a href="#work">Our Work</a></li>
                            <li>
                                <a href>About</a>
                                <ul className={NavbarStyles.menu}>
                                    <li><a href="#work">Our Work</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#careers">Careers</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </li>
                            <li><a href="#careers">Careers</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </li> */}
                        <li>
                            <Link to="/about">About</Link>
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
                        <li>
                            <Link to="/elections">Elections</Link>
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
                        <div className={FooterStyles.address}>
                            <img src={kgpLogo} alt="IITKGP Logo" />
                            <div>
                                <h1>
                                    Technology Students' Gymkhana
                                </h1>
                                <p>
                                    Indian Institute of Technology Kharagpur, <br />
                                    West Bengal - 721302
                                </p>
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
                    <div className={FooterStyles.footerCol}>
                        <a className={FooterStyles.quickLink} href="/">
                            IITKGP Website
                        </a>
                        <a className={FooterStyles.quickLink} href="/">
                            IITKGP Website
                        </a>
                    </div>
                    <div className={FooterStyles.footerCol}>
                        <a className={FooterStyles.quickLink} href="/">
                            IITKGP Website
                        </a>
                        <a className={FooterStyles.quickLink} href="/">
                            IITKGP Website
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}