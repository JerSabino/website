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
            bounce: 0.6,
            duration: 1.5
          }
        }
    };
    
    return (
        <motion.div id="about"
            variants={onViewVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: true, amount: 0.2}}>
            <section className={styles.container}>
                <div className={styles.title}>
                    my values
                </div>
                <div className={styles.content}>
                    {/* VALUES */}
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
                </div>
                {/* PARALLAX BANNER */}
                <motion.div id="about"
                    variants={onViewVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{once: true, amount: 0.25}}>
                    <div className={styles.box}>
                        <div className={styles.banner_container}>
                            <ParallaxProvider>
                                <ParallaxBanner
                                    layers={[
                                        /* Sky, Stars, Moon */
                                        { image: '../../../assets/about/layers/sky.webp',
                                            speed: 8},
                                        { image: '../../../assets/about/layers/stars.webp',
                                            translateY: [1, 25]},
                                        { image: '../../../assets/about/layers/moon.webp',
                                            translateY: [1, 18]},
                                        /* Mountains */
                                        { image: '../../../assets/about/layers/mountain1.webp',
                                            translateY: [-5, 4],
                                            speed: 2},
                                        { image: '../../../assets/about/layers/mountain2.webp',
                                            translateY: [-5, 1],
                                            speed: 2},
                                        { image: '../../../assets/about/layers/mountain3.webp',
                                            translateY: [-1.5],
                                            speed: 0.3},
                                        /* Trees */
                                        { image: '../../../assets/about/layers/tree1.webp',
                                            translateY: [2, -1],
                                            speed: 0.5},
                                        { image: '../../../assets/about/layers/reflection.webp',
                                            translateY: [2, 0]},
                                        { image: '../../../assets/about/layers/tree2.webp',
                                            translateY: [-1.5],
                                            speed: 0.5},
                                        { image: '../../../assets/about/layers/tree3.webp',
                                            translateY: [2, -2],
                                            speed: 3}, 
                                        { image: '../../../assets/about/layers/tree4.webp',
                                            translateY: [1.8, -1],
                                            speed: 1.5},
                                        /* Waterline */
                                        { image: '../../../assets/about/layers/waterline.webp',
                                            translateY: [51, 46]},
                                        /* Boat */
                                        { image: '../../../assets/about/layers/boat.webp',
                                            translateY: [5, -10]},
                                        /* Grass */
                                        { image: '../../../assets/about/layers/grass1.png',
                                            translateY: [18, -8]},
                                        { image: '../../../assets/about/layers/grass2.png',
                                            translateY: [14, -9.5]},
                                    ]}
                                    className={styles.banner}
                                    >
                                </ParallaxBanner>
                            </ParallaxProvider>
                        </div>  
                    </div>
                </motion.div>
            </section>
        </motion.div>
    )
}
