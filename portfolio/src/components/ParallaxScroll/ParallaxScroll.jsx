import { useRef, useState, useEffect } from 'react'

import { ParallaxBanner } from 'react-scroll-parallax';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { ScrollDown } from './ScrollDown/ScrollDown'

import styles from "./ParallaxScroll.module.css";

export const ParallaxScroll = () => {
  
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
  
  const onViewVariants = {
    offscreen: {
      opacity: 0
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.55,
        duration: 6
      }
    }
  };

  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setProgress(value);
  });

  const opacity = useTransform(scrollYProgress, [0.4,1], [1,0]);

  return (
    <div ref={ref}>
      <motion.div
        variants={onViewVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{once: true, amount: 0.5 }}
      >
        {
        isDesktop ? (
          <ParallaxBanner id="hero"
            layers={[
              /* Space Background */
              { image: '../../../assets/layers/1x/webp/space2.webp', speed: -5 },
              { image: '../../../assets/layers/1x/webp/space1.webp', speed: -20},
              /* Stars */
              { image: '../../../assets/layers/1x/webp/stars1.webp', speed: -25 },
              { image: '../../../assets/layers/1x/webp/stars2.webp', speed: -18 },
              { image: '../../../assets/layers/1x/webp/stars3.webp', speed: -23 },
              /* Planets */
              { image: '../../../assets/layers/1x/layer4.png', speed: -10},
              { image: '../../../assets/layers/1x/webp/layer3.webp', speed: -15},
              { image: '../../../assets/layers/1x/webp/layer2.webp', speed: -5},
              { image: '../../../assets/layers/1x/layer1.png', speed: -2,
                translateY:[7,5],
                shouldAlwaysCompleteAnimation: true },
              { children: <img src='../../../assets/layers/1x/spaceman.png' className={styles.heroImage}/>, 
                speed:25,
                translateY:[5,-15]},
              { children: (
                  <img src='../../../assets/layers/1x/sign.png' className={styles.tv}/>
                ), 
                speed: 20,
                translateY:[8,-13]}
            ]}
            className={styles.banner}
          >
          </ParallaxBanner>
        ) : 
        isTablet ? (
          <ParallaxBanner id="hero"
            layers={[
              /* Space Background */
              { image: '../../../assets/layers/1370/space2.png', speed: -5 },
              { image: '../../../assets/layers/1370/space1.png', speed: -20},
              /* Stars */
              { image: '../../../assets/layers/1370/stars1.png', speed: -25 },
              { image: '../../../assets/layers/1370/stars2.png', speed: -18 },
              { image: '../../../assets/layers/1370/stars3.png', speed: -23 },
              /* Planets */
              { image: '../../../assets/layers/1370/pink.png', speed: -10},
              { image: '../../../assets/layers/1370/yellow.png', speed: -15},
              { image: '../../../assets/layers/1370/blue.png', speed: -5},
              { image: '../../../assets/layers/1370/moon.png', speed: -2,
                translateY:[7,5],
                shouldAlwaysCompleteAnimation: true },
              { children: <img src='../../../assets/layers/1370/hero.png' className={styles.heroImage}/>, 
                speed:25,
                translateY:[5,-15]},
              { children: (
                  <img src='../../../assets/layers/1370/sign.png' className={styles.tv}/>
                ), 
                speed: 20,
                translateY:[8,-13]}
            ]}
            className={styles.banner_portrait}
          >
          </ParallaxBanner>
        ) : (
          <ParallaxBanner id="hero"
            layers={[
              /* Space Background */
              { image: '../../../assets/layers/920/space2.png', speed: -5 },
              { image: '../../../assets/layers/920/space1.png', speed: -20},
              /* Stars */
              { image: '../../../assets/layers/920/stars1.png', speed: -25 },
              { image: '../../../assets/layers/920/stars2.png', speed: -18 },
              { image: '../../../assets/layers/920/stars3.png', speed: -23 },
              /* Planets */
              { image: '../../../assets/layers/920/pink.png', translateY: [-10, 15]},
              { image: '../../../assets/layers/920/yellow.png', speed: -15},
              { image: '../../../assets/layers/920/blue.png', speed: -14},
              { image: '../../../assets/layers/920/moon.png', speed: -2,
                shouldAlwaysCompleteAnimation: true },
              { children: <img src='../../../assets/layers/920/hero.png' className={styles.heroImage}/>, 
                speed:25,
                translateY:[5,-15]},
              { children: (
                  <img src='../../../assets/layers/920/sign.png' className={styles.tv}/>
                ), 
                speed: 20,
                translateY:[8,-13]}
            ]}
            className={styles.banner_portrait}
          >
          </ParallaxBanner>
        )}
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          duration: 0.4,
          delay: 1
        }}
        style={{
          opacity: opacity,
        }}
      >
        <ScrollDown className={styles.scroll}></ScrollDown>
      </motion.div>
    </div>
  );
}
