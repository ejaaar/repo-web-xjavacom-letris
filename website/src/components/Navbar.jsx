import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";

function Navbar() {
const [menuOpen, setMenuOpen] = useState(false);

return (
    <nav className="navbar">
    <div className="container navbar-container">
        <Link to="/" className="logo">
        Tech<span>Vision</span>
        </Link>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>

        <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        >
        {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
    </div>
    </nav>
);
}

export default Navbar;