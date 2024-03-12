import React from 'react'

import { ParallaxBanner } from 'react-scroll-parallax';
import { ParallaxProvider } from "react-scroll-parallax"
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
            bounce: 0.3,
            duration: 1.5
          }
        }
    };

    const parallaxVariants = {
        offscreen: {
          opacity: 0
        },
        onscreen: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 1.5
          }
        }
    };
    
    return (
        <div id="about">
            <section className={styles.container}>
                <div className={styles.content}>
                    {/* VALUES */}
                    <motion.div 
                        variants={onViewVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{once: true, amount: 0.1}}>
                        <ul className={styles.aboutItems}>
                            <li className={styles.aboutItem}>
                                <div className={styles.front}>
                                    <img className={styles.aboutImage} src="https://placehold.co/200x200" alt="" />
                                    <div>
                                        <h3 className={styles.aboutItemText}>Continuous Learning</h3>
                                    </div>
                                </div>
                                <p className={styles.desc}>
                                    I embrace a mindset of lifelong learning in the dynamic field of technology.
                                    <br />
                                    <br />
                                    Staying updated on the latest languages, tools, and methodologies is essential for my growth.
                                </p> 
                            </li>

                            <li className={styles.aboutItem}>
                                <div className={styles.front}>
                                    <img className={styles.aboutImage} src="https://placehold.co/200x200" alt="" />
                                    <div>
                                        <h3 className={styles.aboutItemText}>User-Focused</h3>
                                    </div>
                                </div>
                                <p className={styles.desc}>
                                    The needs and experiences of end-users in what I create is my utmost priority.
                                    <br />
                                    <br />
                                    I place high importance in intuitive interfaces, speed, and convenience to ensure a positive user-friendly experience.
                                </p> 
                            </li>

                            <li className={styles.aboutItem}>
                                <div className={styles.front}>
                                    <img className={styles.aboutImage} src="https://placehold.co/200x200" alt="" />
                                    <div>
                                        <h3 className={styles.aboutItemText}>Collaboration</h3>
                                    </div>
                                </div>
                                <p className={styles.desc}>
                                    I recognize the value of effective communication and collaboration with people I work with.
                                    <br />
                                    <br />
                                    Always being open to feedback and willing to share knowledge with others is crucial to success of a project.
                                </p> 
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
