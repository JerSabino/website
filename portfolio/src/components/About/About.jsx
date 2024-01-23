import React from 'react'

import { motion } from 'framer-motion';
import styles from "./About.module.css"

import { getImageUrl } from '../../utils';

export const About = () => {
  
    const onViewVariants = {
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
            duration: 1.5
          }
        }
    };
    
    return (
        <motion.div
            variants={onViewVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: true, amount: 0.2}}>
            <section className={styles.container} id="about">
                <div className={styles.content}>
                    <ul className={styles.aboutItems}>
                        <li className={styles.aboutItem}>
                            <img src="https://placehold.co/100x100" alt="" />
                            <div className={styles.aboutItemText}>
                                <h3>Creative</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat, metus nec malesuada convallis
                                </p>
                            </div>
                        </li>

                        <li className={styles.aboutItem}>
                            <img src="https://placehold.co/50x50" alt="" />
                            <div className={styles.aboutItemText}>
                                <h3>Adaptable</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat, metus nec malesuada convallis
                                </p>
                            </div>
                        </li>

                        <li className={styles.aboutItem}>
                            <img src="https://placehold.co/50x50" alt="" />
                            <div className={styles.aboutItemText}>
                                <h3>Efficient</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat, metus nec malesuada convallis
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </motion.div>
    )
}
