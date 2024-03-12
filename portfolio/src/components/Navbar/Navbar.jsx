import React, {useState} from 'react';

import { Tooltip } from "../Tooltip/Tooltip";
import { MdMenu } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";

import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div>
        <a className="material-symbols-outlined" href="#home" id={styles['icon']}>home</a>
      </div>
      <div className={styles.menu}>
        { menuOpen 
          ? <span className="material-symbols-outlined" id={styles['hamburger']} onClick={() => setMenuOpen(!menuOpen)}>menu</span>
          : <span className="material-symbols-outlined" id={styles['hamburger']} onClick={() => setMenuOpen(!menuOpen)}>menu_open</span>}
        <ul 
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        > 
          <li><a className={styles.menuItem} href="#bio"><span className={styles.number}>01.</span> About</a></li>
          <li><a className={styles.menuItem} href="#experience"><span className={styles.number}>02.</span> Experience</a></li>
          <li><a className={styles.menuItem} href="#projects"><span className={styles.number}>03.</span> Projects</a></li>
        </ul>
      </div>
    </nav>
  );
}
