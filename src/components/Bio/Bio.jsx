import React from 'react'

import { motion } from 'framer-motion';
import { getImageUrl } from '../../utils';

import styles from "./Bio.module.css";

export const Bio = () => {

  const onViewVariants = {
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
        duration: 1.5
      }
    }
  };

  return (
    <div>
      <motion.div 
        variants={onViewVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{once: true, amount: 0.3}}>
        <div className={styles.container} id="bio">
          <div className={styles.bio}>
            <div className={styles.title}>
              <h4>01.</h4>
              <h2>About Me</h2>
            </div>
            <div>
              <div className={styles.imgBox}>
                <img className={styles.bioImg} src={getImageUrl('bio/self.JPG')} alt="" />
                <div className={styles.resume}>
                  <a className={styles.button} href={getImageUrl('SabinoJeremiah_Resume.pdf')} download="SabinoJeremiah-Resume.pdf">
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.infoBox}>
              <div className={styles.bioIntro}>
                <br />
                <h3>Hello! I'm <span className={styles.name}>Jeremiah Sabino 
                👋</span> </h3>           
              </div>
              <div className={styles.bioInfo}>
                <p>
                  I am a Software Engineer with a heavy focus on creative design to build exceptional digital experiences.
                  Growing up I have always had an interest in all things tech-related.
                </p>
                <p>
                  I've had the privillege of working as an intern for <a href="https://www.introhive.com/" target="_blank">a Client Intelligence Platform</a>, and then as an intern and eventual fulltime
                  employee for <a href="https://www.ibm.com/ca-en" target="_blank">a giant technology corporation</a>. Currently, my main focus is towards looking for new work!
                </p>
                <p>
                  If I'm not brushing up on my coding skills, you'd often see me producing music or designing as a side-hobby.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div> 
  )
}
