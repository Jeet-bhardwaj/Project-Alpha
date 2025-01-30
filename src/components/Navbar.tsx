import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import gymLogo from "../logo/gymLogo.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger icons

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                {/* Logo */}
                <div className={styles.logo}>
                    <img src={gymLogo} alt="Gym Logo" />
                    <span className={styles.brandName}>Fitness Platinum</span>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Navigation Links */}
                <div className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
                    <Link className={styles.navLink} to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link className={styles.navLink} to="/Gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
                    <Link className={styles.navLink} to="/Trainers" onClick={() => setMenuOpen(false)}>Trainers</Link>
                    <Link className={styles.navLink} to="/Pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
                    <Link className={styles.navLink} to="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                    <Link className={styles.navLink} to="/About" onClick={() => setMenuOpen(false)}>About</Link>
                </div>

                {/* Join Now Button */}
                <button className={styles.joinButton}>Join Now</button>
            </div>
        </nav>
    );
};

export default Navbar;
