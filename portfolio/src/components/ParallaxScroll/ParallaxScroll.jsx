import React from 'react'

import { ParallaxBanner } from 'react-scroll-parallax';

import styles from "./ParallaxScroll.module.css";

export const ParallaxScroll = () => {
  
  return (
      <ParallaxBanner
        layers={[
          /* Space Background */
          { image: '../../../assets/layers/1x/webp/space3.webp', speed: 0 },
          { image: '../../../assets/layers/1x/webp/space2.webp', speed: -5 },
          { image: '../../../assets/layers/1x/webp/space1.webp', speed: -20},
          /* Stars */
          { image: '../../../assets/layers/1x/webp/stars1.webp', speed: -25 },
          { image: '../../../assets/layers/1x/webp/stars2.webp', speed: -18 },
          { image: '../../../assets/layers/1x/webp/stars3.webp', speed: -23 },
          /* Headline */
          { speed: -5,
            translateY: [-35, -15],
            scale: [1, 0.5],
            children: (
              <div className={styles.header}>
                Hello!
              </div>
            )},
          /* Planets */
          { image: '../../../assets/layers/1x/webp/layer4.webp', speed: -15 },
          { image: '../../../assets/layers/1x/webp/layer3.webp', speed: -10},
          { image: '../../../assets/layers/1x/webp/layer2.webp', speed: -5},
          { image: '../../../assets/layers/1x/webp/layer1.webp', speed: -10,
            translateY: [10, -15],
            shouldAlwaysCompleteAnimation: true },
        ]}
        className={styles.banner}
      >
      </ParallaxBanner>
  )
}
