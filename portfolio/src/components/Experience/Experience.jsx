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
        <motion.div
        variants={onViewVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{once: true, amount: 0.1}}>
        <div className={styles.primaryContainer} id="experience">
            <section className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h4>02.</h4>
                        <h2>Where I've worked</h2>
                    </div>
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
                {/*
                <div className={styles.box}>
                    <picture>
                        <source className={styles.aboutImage} srcSet="https://placehold.co/200x700" media="(min-width: 1340px)" alt="" />
                        <source className={styles.aboutImage} srcSet="https://placehold.co/1000x200" media="(max-width: 1340px)" alt="" />
                        <img className={styles.aboutImage} src="https://placehold.co/200x700" alt="" />
                    </picture>
                </div>
                */}
            </section>
        </div>
        </motion.div>
    )
}
