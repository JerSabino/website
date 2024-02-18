import React from 'react'

import { ParallaxBanner } from 'react-scroll-parallax';
import { ParallaxProvider } from "react-scroll-parallax"
import { motion } from 'framer-motion';
import styles from "./End.module.css"

export const End = () => {

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
    <div className={styles.container}>
      {/* PARALLAX BANNER */}
      <motion.div
        variants={parallaxVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{once: true, amount: 0.25}}>
        <div className={styles.box}>
            <ParallaxProvider>
                <ParallaxBanner
                    layers={[
                        /* Sky, Stars, Moon */
                        { image: '../../../assets/about/layers2/sky.png',
                          translateY: [-20, 10]},
                        { image: '../../../assets/about/layers2/stars.png',
                          translateY: [1, 25]},
                        { image: '../../../assets/about/layers2/moon.png',
                          translateY: [4, 20]},
                        /* Mountains */
                        { image: '../../../assets/about/layers2/mountain1.png',
                          translateY: [-5, 9]},
                        { image: '../../../assets/about/layers2/mountain2.png',
                          translateY: [-5, 3]},
                        { image: '../../../assets/about/layers2/mountain3.png',
                          translateY: [-1.5, -2],},
                        /* Trees */
                        { image: '../../../assets/about/layers2/reflection.png',
                          translateY: [5, -9]},
                        { image: '../../../assets/about/layers2/tree1.png',
                          translateY: [0, 2]},
                        { image: '../../../assets/about/layers2/tree2.png',
                          translateY: [2, -1]},
                        { image: '../../../assets/about/layers2/tree3.png',
                          translateY: [4.5, -4]}, 
                        { image: '../../../assets/about/layers2/tree4.png',
                          translateY: [5.5, -5]},
                        /* Waterline */
                        { image: '../../../assets/about/layers2/waterline.png',
                          translateY: [31, 23]},
                        /* Boat */
                        { image: '../../../assets/about/layers2/boat.png',
                          translateY: [5, -10]},
                        /* Grass */
                        { image: '../../../assets/about/layers2/grass1.png',
                          translateY: [10, -15]},
                        { image: '../../../assets/about/layers2/grass2.png',
                          translateY: [8, -12]},
                    ]}
                    className={styles.banner}
                    >
                </ParallaxBanner>
            </ParallaxProvider>
        </div>
      </motion.div>
    </div>
  )
}
