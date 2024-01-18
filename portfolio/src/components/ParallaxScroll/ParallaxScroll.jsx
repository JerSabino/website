import React from 'react'

import { ParallaxBanner } from 'react-scroll-parallax';
import styles from "./ParallaxScroll.module.css";

export const ParallaxScroll = () => {
  return (
    <div className={styles.frame}>
      <ParallaxBanner
        layers={[
          { image: '../../../assets/layers/1x/space2.png', speed: -20 },
          { image: '../../../assets/layers/1x/space1.png', speed: -10 },
          { image: '../../../assets/layers/1x/stars1.png', speed: -10 },
          { image: '../../../assets/layers/1x/stars2.png', speed: -10 },
          { image: '../../../assets/layers/1x/stars3.png', speed: -10 },
          { image: '../../../assets/layers/1x/layer4.png', speed: -10 },
          { image: '../../../assets/layers/1x/layer3.png', speed: -1,
            shouldAlwaysCompleteAnimation: true},
          { image: '../../../assets/layers/1x/layer2.png', speed: -5,
            translateY: [10, 5],
            shouldAlwaysCompleteAnimation: true },
          { image: '../../../assets/layers/1x/layer1.png', speed: -10,
            translateY: [10, -15],
            scale: [0.6, 0.6],
            shouldAlwaysCompleteAnimation: true }
        ]}
        className={styles.banner}
      >
      </ParallaxBanner>
    </div>
  )
}
