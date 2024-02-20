import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import logo from "../../assets/logo.png";
import name2 from "../../assets/name2.png";

function Header() {
  return (
    <header>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.logoLink}>
          <div className={styles.logoContainer}>
            <img src={name2} alt="Logo Name" className={styles.name} />
            <img src={logo} alt="Logo" className={styles.logo} />
          </div>
        </Link>
        <div className={styles.linkList}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/descriptions" className={styles.navLink}>
                Descriptions
              </Link>
            </li>
            {/* <li className={styles.navItem}>
              <Link to="/costumes" className={styles.navLink}>
                Costume Ideas
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
