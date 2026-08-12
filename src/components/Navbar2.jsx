import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import style from './navbar2.module.css';
import logoWhite from '../assets/logo-white.svg';
import logoColor from '../assets/logo-warna.svg';

export default function Navbar2() {
    const [isScrolled, setIsScrolled] = useState(false);

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

    return (
        <nav className={`${style.nav} ${isScrolled ? style.scrolled : ''}`}>
            <div className={style.navContainer}>
                <div className={style.nav1}>
                    <NavLink to="/">
                        <img src={isScrolled ? logoColor : logoWhite} alt="Logo" />
                    </NavLink>
                </div>

                <div className={style.nav2}>
                    <ul>
                        <li>
                            <NavLink 
                                to="/" className={({ isActive }) => isActive ? style.active : ''}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/about" className={({ isActive }) => isActive ? style.active : ''}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/service" className={({ isActive }) => isActive ? style.active : ''}>
                                Service
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/study-case" className={({ isActive }) => isActive ? style.active : ''}>
                                Study Case
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/article" className={({ isActive }) => isActive ? style.active : ''}>
                                Article
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className={style.nav3}>
                    <NavLink to="/contact">
                        <button type="button">Contact</button>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}