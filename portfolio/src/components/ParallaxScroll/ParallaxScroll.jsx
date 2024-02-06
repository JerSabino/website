import { useRef, useState } from 'react'

import { ParallaxBanner } from 'react-scroll-parallax';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import Typewriter from 'typewriter-effect';

import styles from "./ParallaxScroll.module.css";

export const ParallaxScroll = () => {
  
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
        <ParallaxBanner id="hero"
          layers={[
            /* Space Background */
            { image: '../../../assets/layers/1x/webp/space2.webp', speed: -5 },
            { image: '../../../assets/layers/1x/webp/space1.webp', speed: -20},
            /* Stars */
            { image: '../../../assets/layers/1x/webp/stars1.webp', speed: -25 },
            { image: '../../../assets/layers/1x/webp/stars2.webp', speed: -18 },
            { image: '../../../assets/layers/1x/webp/stars3.webp', speed: -23 },
            /* Headline */
            { speed: -5,
              translateY: [-35, -15],
              scale: [1, 0.65],
              children: (
                <div className={styles.header}>
                  <Typewriter 
                    options={{
                      strings: ['Hello!', 'Hi!', 'Welcome!', 'Greetings!'],
                      autoStart: true,
                      delay: 250,
                      loop: true,
                    }}
                  />
                </div>
              )},
            /* Planets */
            { image: '../../../assets/layers/1x/webp/layer4.webp', speed: -15},
            { image: '../../../assets/layers/1x/webp/layer3.webp', speed: -10},
            { image: '../../../assets/layers/1x/webp/layer2.webp', speed: -5},
            { image: '../../../assets/layers/1x/webp/layer1.webp', speed: -10,
              translateY: [8, -15],
              shouldAlwaysCompleteAnimation: true },
          ]}
          className={styles.banner}
        >
        </ParallaxBanner>
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          duration: 0.4,
          delay: 1.5
        }}
        style={{
          opacity: opacity,
        }}
      >
        <div className={styles.arrow}>
          <span className={styles.scroll}>scroll</span>
          <div className={styles.down_arrow}></div>
        </div>
      </motion.div>
    </div>
  );
}
