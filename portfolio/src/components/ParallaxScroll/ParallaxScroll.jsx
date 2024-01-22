import React from 'react'

import { ParallaxBanner } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

import styles from "./ParallaxScroll.module.css";

export const ParallaxScroll = () => {
  
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
        bounce: 0.55,
        duration: 4
      }
    }
  };

  return (
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                viewport={{ once: true}}
              >
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
              </motion.div>
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
  );
}
