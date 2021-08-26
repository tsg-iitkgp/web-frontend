import React from 'react';
import { Link } from 'react-router-dom';
import NavbarStyles from '../styles/components/navbar.module.css';

export default function Layout({ children }) {
    return (
        <div className="layout">
            <nav className={NavbarStyles.navbar}>
                <Link to="/" className={NavbarStyles.logo}>CSS Nav</Link>
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
                        <a href="#careers">About</a>
                    </li>
                    <li>
                        <a href="#contact">Blog</a>
                    </li>
                    <li>
                        <a href="#contact">Results</a>
                    </li>
                    <li>
                        <a href="#contact">Hall of Fame</a>
                    </li>
                    <li>
                        <a href="#contact">Elections</a>
                    </li>
                    <li>
                        <a href="#contact">Contacts</a>
                    </li>
                </ul>
            </nav>
            <div>
                {children}
            </div>
            <footer></footer>
        </div>
    );
}