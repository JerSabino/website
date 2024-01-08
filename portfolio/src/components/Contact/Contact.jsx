import React from 'react'

import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Reach out to me!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src="https://placehold.co/50x50" alt="Email Icon" />
                <a href="mailto:jer.lsabino@gmail.com">jer.lsabino@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src="https://placehold.co/50x50" alt="LinkedIn Icon" />
                <a href="https://www.linkedin.com/in/jeremiah-sabino/">linkedin.com/jeremiah-sabino</a>
            </li>
            <li className={styles.link}>
                <img src="https://placehold.co/50x50" alt="Github Icon" />
                <a href="https://www.github.com/JerSabino">github.com/JerSabino</a>
            </li>
        </ul>
    </footer>
  )
}
