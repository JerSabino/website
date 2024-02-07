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
            <div className={styles.content}>
                {/* History */}
                <div className={styles.box}>
                    <img className={styles.aboutImage} src="https://placehold.co/400x800" alt="" />
                </div>
                <ul className={styles.history}>
                    {
                        history.map((historyItem, id) => {
                            return (
                                <motion.div id="experience"
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
        </section>
    )
}
