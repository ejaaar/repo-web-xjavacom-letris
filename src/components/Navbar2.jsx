import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import style from './navbar2.module.css';

import logoWhite from '../assets/logo-white.svg';
import logoColor from '../assets/logo-warna.svg';

export default function Navbar2() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className={`${style.nav} ${isScrolled ? style.scrolled : ''}`}>
            <div className={style.navContainer}>
                <div className={style.nav1}>
                    <NavLink to="/" onClick={closeMenu}>
                        <img src={isScrolled ? logoColor : logoWhite} alt="Logo" />
                    </NavLink>  

                    <button 
                        className={`${style.hamburger} ${isOpen ? style.hamburgerActive : ''}`} 
                        onClick={toggleMenu}
                        type="button"
                        aria-label="Toggle navigation">
                        <span className={style.bar}></span>
                        <span className={style.bar}></span>
                        <span className={style.bar}></span>
                    </button>
                </div>

                <div className={`${style.nav2} ${isOpen ? style.nav2Active : ''}`}>
                    <ul>
                        <li>
                            <NavLink 
                                to="/" 
                                className={({ isActive }) => isActive ? style.active : ''}
                                onClick={closeMenu}> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/about" 
                                className={({ isActive }) => isActive ? style.active : ''}
                                onClick={closeMenu}> About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/service" 
                                className={({ isActive }) => isActive ? style.active : ''}
                                onClick={closeMenu}> Service
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/study-case" 
                                className={({ isActive }) => isActive ? style.active : ''}
                                onClick={closeMenu}> Study Case
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/article" 
                                className={({ isActive }) => isActive ? style.active : ''}
                                onClick={closeMenu}> Article
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className={`${style.nav3} ${isOpen ? style.nav3Active : ''}`}>
                    <NavLink to="/contact" onClick={closeMenu}>
                        <button type="button">Contact</button>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}