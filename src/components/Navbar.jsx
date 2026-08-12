import { NavLink} from 'react-router-dom'
import style from './navbar.module.css'
import mainPage from './../assets/logo-warna.svg'

export default function Navbar() {
    return (
        <nav className={style.nav}>
            <div className={style.navContainer}>
                <div className={style.nav1}>
                    <NavLink to="/">
                        <img src={mainPage} alt="" />
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
    )
}