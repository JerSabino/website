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
                {/* Skills */}
                {/*
                    <div className={styles.skills}>{
                        skills.map((skill, id) => {
                            return (
                                <div className={styles.skill} key={id}>
                                    <div className={styles.skillImageContainer}>
                                        <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                    </div>
                                    <p>{skill.title}</p>
                                </div>
                            );
                        })
                    }
                    </div>
                */}
                {/* History */}
                <ul className={styles.history}>
                    {
                        history.map((historyItem, id) => {
                            return (
                                <motion.div id="about"
                                    variants={onViewVariants}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{once: true, amount: 0.2}}>
                                    <li className={styles.historyItem} key={id}>
                                        <div className={styles.leftSide}>
                                            {/*
                                                <img 
                                                    src={getImageUrl(historyItem.imageSrc)} 
                                                    alt={`${historyItem.organization} Logo`}
                                                />
                                            */}
                                        </div>
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
