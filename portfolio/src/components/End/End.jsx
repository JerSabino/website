import { useState, useEffect } from 'react'

import { ParallaxBanner } from 'react-scroll-parallax';
import { ParallaxProvider } from "react-scroll-parallax"
import { motion } from 'framer-motion';
import styles from "./End.module.css"

export const End = () => {

  const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);
  const [isTablet, setTablet] = useState(window.innerWidth > 630);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1024);
    setTablet(window.innerWidth > 630);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

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
              {
                isDesktop ? (
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
                ) : 
                isTablet ? (
                  <ParallaxBanner
                    layers={[
                        /* Sky, Stars, Moon */
                        { image: '../../../assets/about/1024/sky.png',
                          translateY: [-20, 10]},
                        { image: '../../../assets/about/1024/stars.png',
                          translateY: [1, 25]},
                        { image: '../../../assets/about/1024/moon.png',
                          translateY: [4, 27]},
                        /* Mountains */
                        { image: '../../../assets/about/1024/mountain1.png',
                          translateY: [-5, 9]},
                        { image: '../../../assets/about/1024/mountain2.png',
                          translateY: [-5, 3]},
                        { image: '../../../assets/about/1024/mountain3.png',
                          translateY: [-1.5, -2],},
                        /* Trees */
                        { image: '../../../assets/about/1024/reflection.png',
                          translateY: [4, -6]},
                        { image: '../../../assets/about/1024/tree1.png',
                          translateY: [2.5, 3.7]},
                        { image: '../../../assets/about/1024/tree2.png',
                          translateY: [3, 0]},
                        { image: '../../../assets/about/1024/tree3.png',
                          translateY: [4.7, -4]}, 
                        { image: '../../../assets/about/1024/tree4.png',
                          translateY: [5.5, -4.5]},
                        /* Waterline */
                        { image: '../../../assets/about/1024/waterline.png',
                          translateY: [5,-4]},
                        /* Boat */
                        { image: '../../../assets/about/1024/boat.png',
                          translateY: [5, -9]},
                        /* Grass */
                        { image: '../../../assets/about/1024/grass1.png',
                          translateY: [12, -9]},
                        { image: '../../../assets/about/1024/grass2.png',
                          translateY: [15,-15]},
                    ]}
                    className={styles.banner}
                  >
                  </ParallaxBanner>
                ) :
                (
                  <ParallaxBanner
                    layers={[
                        /* Sky, Stars, Moon */
                        { image: '../../../assets/about/630/sky.png',
                          translateY: [-20, 10]},
                        { image: '../../../assets/about/630/stars.png',
                          translateY: [1, 25]},
                        { image: '../../../assets/about/630/moon.png',
                          translateY: [4, 25]},
                        /* Mountains */
                        { image: '../../../assets/about/630/mountain1.png',
                          translateY: [-5, 9]},
                        { image: '../../../assets/about/630/mountain2.png',
                          translateY: [-5, 3]},
                        { image: '../../../assets/about/630/mountain3.png',
                          translateY: [-1.5, -2],},
                        /* Trees */
                        { image: '../../../assets/about/630/reflection.png',
                          translateY: [5, -9]},
                        { image: '../../../assets/about/630/tree1.png',
                          translateY: [0, 3]},
                        { image: '../../../assets/about/630/tree2.png',
                          translateY: [2, 0]},
                        { image: '../../../assets/about/630/tree3.png',
                          translateY: [4.5, -4]}, 
                        { image: '../../../assets/about/630/tree4.png',
                          translateY: [3.5, 1]},
                        /* Waterline */
                        { image: '../../../assets/about/630/waterline.png',
                          translateY: [3, -1]},
                        /* Boat */
                        { image: '../../../assets/about/630/boat.png',
                          translateY: [8, -7.8]},
                        /* Grass */
                        { image: '../../../assets/about/630/grass1.png',
                          translateY: [10, -11]},
                        { image: '../../../assets/about/630/grass2.png',
                          translateY: [12, -4]},
                    ]}
                    className={styles.banner}
                  >
                  </ParallaxBanner>
                )
              }    
            </ParallaxProvider>
        </div>
      </motion.div>
    </div>
  )
}
