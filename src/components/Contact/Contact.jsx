import React from 'react'

import { motion } from 'framer-motion';

import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils';

const bottomSide = {
    offscreen: {
      y: 50,
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
    <div>
      <footer id="contact" className={styles.container}>
          <motion.div
              variants={bottomSide}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{once:true}}
          >
              <div className={styles.text}>
                  <h2>Get in touch!</h2>
                  <p>
                    I'm currently looking for new opportunities so feel free to contact me with them or to even just say hi, and 
                    I'll do my best to get back to you!
                  </p>
              </div>
          </motion.div>
          <motion.div
              variants={bottomSide}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{once:true, amount: 0}}
          >
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
          </motion.div>
          <motion.div
              variants={bottomSide}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{once:true}}
          >
              <a className={styles.button} href="">
                Say Hi!
              </a>
          </motion.div>
      </footer>
      <footer className={styles.author}>
        Artwork and Website designed & created by Jeremiah Sabino 
      </footer>
    </div>
  )
}
