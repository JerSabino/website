import React from 'react'

import styles from "./FixedContact.module.css"
import { getImageUrl } from '../../utils';

export const FixedContact = () => {
  return (
    <div className={styles.list}>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/jeremiah-sabino/"> 
            <img src={getImageUrl('contact/linkedin.svg')} id={styles["icon"]} alt="LinkedIn Icon" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/JerSabino">
            <img src={getImageUrl('contact/github.svg')} id={styles["icon"]} alt="Github Icon" />
          </a>
        </li>
      </ul>
    </div>
  )
}
