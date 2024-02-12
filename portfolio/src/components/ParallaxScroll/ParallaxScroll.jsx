import { useRef, useState } from 'react'

import { ParallaxBanner } from 'react-scroll-parallax';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { ScrollDown } from './ScrollDown/ScrollDown'

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
              translateY:[8,-13]},
            {/*
            { children: (
              <div className={styles.header}>
                <Typewriter className={styles.text}
                  options={{loop: true}}
                  onInit={(typewriter) => {
                    typewriter
                    .pauseFor(1000)
                    .typeString('Software Dev')
                    .pauseFor(2000)
                    .deleteChars(12)
                    .typeString('Musician')
                    .pauseFor(2000)
                    .deleteChars(8)
                    .typeString('Designer')
                    .pauseFor(2000)
                    .deleteChars(8)
                    .start();
                  }}
                />
              </div>
            ),
            speed: 20,
            translateY: [28,40]}
            */}
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
