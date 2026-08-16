import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import style from './navbar.module.css'
import mainPage from './../assets/logo-warna.svg'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className={style.nav}>
            <div className={style.navContainer}>
                <div className={style.nav1}>
                    <NavLink to="/" onClick={closeMenu}>
                        <img src={mainPage} alt="" />
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
                                onClick={closeMenu}>Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/about" 
                                className={({ isActive }) => isActive ? style.active : ''}
                                onClick={closeMenu}>About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/service" 
                                className={({ isActive }) => isActive ? style.active : ''}
                                onClick={closeMenu}>Service
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/study-case" 
                                className={({ isActive }) => isActive ? style.active : ''}
                                onClick={closeMenu}>Study Case
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/article" 
                                className={({ isActive }) => isActive ? style.active : ''}
                                onClick={closeMenu}>Article
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
    )
}