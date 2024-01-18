import React, {useState} from 'react';

import { Tooltip } from "../Tooltip/Tooltip";

import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img 
          className={styles.menuBtn} 
          src={ 
            menuOpen 
              ? getImageUrl("nav/hamburgerCloseIcon.png")
              : getImageUrl("nav/hamburgerIcon.png")} 
          alt="menu-button" 
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul 
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        > 
          <Tooltip text={"About"}> 
            <li><a href="#about">About</a></li>
          </Tooltip>
          <Tooltip text={"Experience"}>
            <li><a href="#experience">Experience</a></li>
          </Tooltip>
          <Tooltip text={"Contact"}>  
            <li><a href="#contact">Contact</a></li>
          </Tooltip>
        </ul>
      </div>
    </nav>
  );
}
