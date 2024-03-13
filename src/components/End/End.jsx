import { useState, useEffect } from 'react'

import { ParallaxBanner } from 'react-scroll-parallax';
import { ParallaxProvider } from "react-scroll-parallax"
import { motion } from 'framer-motion';
import styles from "./End.module.css"

import { getImageUrl } from '../../utils';

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
        viewport={{once: true, amount: 0.15}}>
        <div className={styles.box}>
            <ParallaxProvider>
              {
                isDesktop ? (
                <ParallaxBanner
                  layers={[
                      /* Sky, Stars, Moon */
                      { image: `${getImageUrl("about/layers2/sky.png")}`,
                        speed: 10,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      { image: `${getImageUrl("about/layers2/stars2.png")}`,
                        translateY: [1, 25],
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      { image: `${getImageUrl("about/layers2/moon.png")}`,
                        translateY: [4, 20],
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      /* Mountains */
                      { image: `${getImageUrl("about/layers2/mountain1.png")}`,
                        speed: -1,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      { image: `${getImageUrl("about/layers2/mountain2.png")}`,
                        speed: 0,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      { image: `${getImageUrl("about/layers2/mountain3.png")}`,
                        speed: 2,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      { image: `${getImageUrl("about/layers/reflection2.png")}`,
                        speed: -3,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      /* Trees */
                      { image: `${getImageUrl("about/layers2/tree1.png")}`,
                        speed: 2,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      { image: `${getImageUrl("about/layers2/tree2.png")}`,
                        speed: 3,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      { image: `${getImageUrl("about/layers2/tree3.png")}`,
                        speed: 5,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true}, 
                      { image: `${getImageUrl("about/layers2/tree4.png")}`,
                        speed: 6,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      /* Waterline */
                      { image: `${getImageUrl("about/layers2/reflection.png")}`,
                        speed: 5,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      { image: `${getImageUrl("about/layers/waterline.png")}`,
                        speed: 6,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      /* Boat */
                      { image: `${getImageUrl("about/layers2/boat.png")}`,
                        speed: 7,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      /* Grass */
                      { image: `${getImageUrl("about/layers2/grass1.png")}`,
                        speed: 10,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      { image: `${getImageUrl("about/layers2/grass2.png")}`,
                        speed: 10,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                  ]}
                  className={styles.banner}
                >
                </ParallaxBanner>
              ) : 
              isTablet ? (
                <ParallaxBanner
                  layers={[
                      /* Sky, Stars, Moon */
                      { image: `${getImageUrl("about/630/sky.png")}`,
                        speed: 10,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      { image: `${getImageUrl("about/630/stars.png")}`,
                        translateY: [1, 25],
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      { image: `${getImageUrl("about/630/moon.png")}`,
                        translateY: [4, 20],
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      /* Mountains */
                      { image: `${getImageUrl("about/630/mountain1.png")}`,
                        speed: -1,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      { image: `${getImageUrl("about/630/mountain2.png")}`,
                        speed: 0,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      { image: `${getImageUrl("about/630/mountain3.png")}`,
                        speed: 2,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      { image: `${getImageUrl("about/630/reflection2.png")}`,
                        speed: -3,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      /* Trees */
                      { image: `${getImageUrl("about/630/tree1.png")}`,
                        speed: 2,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      { image: `${getImageUrl("about/630/tree2.png")}`,
                        speed: 3,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      { image: `${getImageUrl("about/630/tree3.png")}`,
                        speed: 5,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true}, 
                      { image: `${getImageUrl("about/630/tree4.png")}`,
                        speed: 6,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      /* Waterline */
                      { image: `${getImageUrl("about/630/reflection.png")}`,
                        speed: 4.5,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      { image: `${getImageUrl("about/630/waterline.png")}`,
                        speed: 5,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      /* Boat */
                      { image: `${getImageUrl("about/630/boat.png")}`,
                        speed: 7,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      /* Grass */
                      { image: `${getImageUrl("about/630/grass1.png")}`,
                        speed: 10,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      { image: `${getImageUrl("about/630/grass2.png")}`,
                        speed: 10,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                  ]}
                  className={styles.banner_tablet}
                >
                </ParallaxBanner>
              ) : ( 
                <ParallaxBanner
                  layers={[
                      /* Sky, Stars, Moon */
                      { image: `${getImageUrl("about/phone/sky.png")}`,
                        speed: 10,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      { image: `${getImageUrl("about/phone/stars.png")}`,
                        translateY: [1, 25],
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      { image: `${getImageUrl("about/phone/moon.png")}`,
                        translateY: [4, 20],
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      /* Mountains */
                      { image: `${getImageUrl("about/phone/mountain1.png")}`,
                        speed: -1,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      { image: `${getImageUrl("about/phone/mountain2.png")}`,
                        speed: 1,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      { image: `${getImageUrl("about/phone/mountain3.png")}`,
                        speed: 3,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      { image: `${getImageUrl("about/phone/reflection2.png")}`,
                        speed: -5,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      /* Trees */
                      { image: `${getImageUrl("about/phone/tree1.png")}`,
                        speed: 3,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      { image: `${getImageUrl("about/phone/tree2.png")}`,
                        speed: 4,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      { image: `${getImageUrl("about/phone/tree3.png")}`,
                        speed: 5,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true}, 
                      { image: `${getImageUrl("about/phone/tree4.png")}`,
                        speed: 6,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      /* Waterline */
                      { image: `${getImageUrl("about/phone/reflection.png")}`,
                        speed: 5,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      { image: `${getImageUrl("about/phone/waterline.png")}`,
                        speed: 6,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      /* Boat */
                      { image: `${getImageUrl("about/phone/boat.png")}`,
                        speed: 7,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      /* Grass */
                      { image: `${getImageUrl("about/phone/grass1.png")}`,
                        speed: 10,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                      { image: `${getImageUrl("about/phone/grass2.png")}`,
                        speed: 10,
                        shouldAlwaysCompleteAnimation: true,
                        shouldDisableScalingTranslations: true},
                  ]}
                  className={styles.banner_phone}
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
