import React from 'react'

import { motion } from 'framer-motion';

import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils';

const bottomSide = {
    offscreen: {
      y: 100,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2
      }
    }
};

const leftSide = {
    offscreen: {
      x: -100,
      opacity: 0
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2
      }
    }
};

const rightSide = {
    offscreen: {
      x: 100,
      opacity: 0
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2
      }
    }
};


export const Contact = () => {
  return (
    <motion.div
        variants={bottomSide}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{once:true}}
    >
        <footer id="contact" className={styles.container}>
            <motion.div
                variants={leftSide}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{once:true}}
            >
                <div className={styles.text}>
                    <h2>Contact</h2>
                    <p>Reach out to me!</p>
                </div>
            </motion.div>
            <motion.div
                variants={rightSide}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{once:true}}
            >
                <ul className={styles.links}>
                    <li className={styles.link}>
                        {/*<a className="material-symbols-outlined" id={styles["icon"]}>contact_mail</a>*/}
                        <a href="mailto:jer.lsabino@gmail.com" id={styles["text"]} target="_blank">jer.lsabino@gmail.com</a>
                    </li>
                    <li className={styles.link}>
                        {/*<img src={getImageUrl('contact/linkedin.svg')} id={styles["icon"]} alt="LinkedIn Icon" />*/}
                        <a href="https://www.linkedin.com/in/jeremiah-sabino/" id={styles["text"]} target="_blank">linkedin.com/jeremiah-sabino</a>
                    </li>
                    <li className={styles.link}>
                      {/*<img src={getImageUrl('contact/github.svg')} id={styles["icon"]} alt="Github Icon" />*/}
                        <a href="https://www.github.com/JerSabino" id={styles["text"]} target="_blank">github.com/JerSabino</a>
                    </li>
                </ul>
            </motion.div>
        </footer>
    </motion.div>
  )
}
