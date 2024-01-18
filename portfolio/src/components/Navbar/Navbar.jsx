import React, {useState} from 'react';

import { Tooltip } from "../Tooltip/Tooltip";

import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a class="material-symbols-outlined" href="#hero" id={styles['icon']}>home</a>
      <div className={styles.menu}>
        { menuOpen 
          ? <span class="material-symbols-outlined" id={styles['hamburger']} onClick={() => setMenuOpen(!menuOpen)}>menu</span>
          : <span class="material-symbols-outlined" id={styles['hamburger']} onClick={() => setMenuOpen(!menuOpen)}>menu_open</span>}
        <ul 
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        > 
          <Tooltip text={"About"}> 
            <li><a class="material-symbols-outlined" href="#about" id={styles['icon']}>info</a></li>
          </Tooltip>
          <Tooltip text={"Experience"}>
            <li><a class="material-symbols-outlined" href="#experience" id={styles['icon']}>code</a></li>
          </Tooltip>
          <Tooltip text={"Contact"}>  
            <li><a class="material-symbols-outlined" href="#contact" id={styles['icon']}>mail</a></li>
          </Tooltip>
        </ul>
      </div>
    </nav>
  );
}
