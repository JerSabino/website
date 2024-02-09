import React from 'react'

import styles from "./Experience.module.css";
import { motion } from 'framer-motion';
import { getImageUrl } from '../../utils';

import skills from "../../data/skills.json";
import history from "../../data/history.json";

export const Experience = () => {

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

    return (
        <section className={styles.container} id="experience">
            {/* Bio */}
            <div className={styles.bio}>
                <div>
                    <motion.div
                        variants={onViewVariants}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{once: true, amount: 0.1}}>   
                        <div className={styles.imgBox}>
                            <img className={styles.bioImg} src={getImageUrl('bio/self.JPG')} alt="" />
                        </div>
                    </motion.div>
                </div>
                <div>
                    <div className={styles.bioIntro}>
                        👋🤓
                        <br />
                        <h3>Hello! I'm <span className={styles.name}>Jeremiah Sabino</span> </h3>           
                    </div>
                    <motion.div 
                            variants={onViewVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{once: true, amount: 0.1}}>
                            <div className={styles.bioInfo}>
                                <p>
                                    I consider myself a <span className={styles.emphasis}>Creative Dev:</span> 
                                    <br />
                                    • <span className={styles.biocolor1}>Software Developer</span> by profession 
                                    <br />
                                    • <span className={styles.biocolor2}>Creative Artist</span> by nature.
                                </p>
                                <p>
                                    I LOVE expressing myself through outlets of 
                                    <span className={styles.emphasis}> creativity </span>
                                    and have always had an interest for 
                                    <span className={styles.biocolor1}> tech </span> 
                                    and the 
                                    <span className={styles.biocolor2}> arts </span>
                                    alike.
                                </p>
                                <p>
                                    In honing my abilities- I'm often seen working on 
                                    <span className={styles.biocolor1}> side coding projects</span>, 
                                    playing around with 
                                    <a href="https://www.ableton.com/en/" className={styles.biocolor2}> Ableton</a>, 
                                    or designing in  
                                    <a href="https://www.adobe.com/ca/products/illustrator.html" className={styles.biocolor2}> Illustrator</a>.
                                </p>
                                <p> 
                                    <span className={styles.emphasis}>Currently</span>- 
                                    my main focus is towards looking for<span className={styles.biocolor1}> work! </span>
                                </p>
                                <div className={styles.resume}>
                                    <a className={styles.button} href="../../../assets/SabinoJeremiah-Resume.pdf" download="SabinoJeremiah-Resume.pdf">
                                        Download Resume
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                </div>
            </div>
            <div className={styles.content}>
                {/* History */}
                <ul className={styles.history}>
                    {
                        history.map((historyItem, id) => {
                            return (
                                <motion.div
                                    variants={onViewVariants}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{once: true, amount: 0.1}}>
                                    <li className={styles.historyItem} key={id}>
                                        <div className={styles.historyItemDetails}>
                                            <h3>{`${historyItem.role} • ${historyItem.organization}`}</h3>
                                            <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                            <ul>{
                                                historyItem.experiences.map((experience, id) => {
                                                    return (
                                                        <li className={styles.historyInfo} key={id}>{experience}</li>
                                                    );
                                                })}
                                            </ul>
                                            <div className={styles.techBox}>{
                                                historyItem.tech.map((tech, id) => {
                                                    return (
                                                        <li className={styles.tech} key={id}>{tech}</li>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </li>
                                </motion.div>
                            )
                        })
                    }
                </ul>
            </div>
            <div className={styles.box}>
                <picture>
                    <source className={styles.aboutImage} srcSet="https://placehold.co/200x700" media="(min-width: 1340px)" alt="" />
                    <source className={styles.aboutImage} srcSet="https://placehold.co/1000x200" media="(max-width: 1340px)" alt="" />
                    <img className={styles.aboutImage} src="https://placehold.co/200x700" alt="" />
                </picture>
            </div>
        </section>
    )
}
