import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import styles from "./ParallaxHero.module.css"
import { getImageUrl } from '../../utils';

export const ParallaxHero = () => {
  return (
    <div className={styles.frame}>
        <Parallax pages={1} style={{ top: '0', left: '0' }} className={styles.animation}>
          <ParallaxLayer offset={0} speed={2.5}>
            <div className={styles.animation_layer} id={styles["space1"]}></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={2.0}>
            <div className={styles.animation_layer} id={styles["space2"]}></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={2.5}>
            <div className={styles.animation_layer} id={styles["stars1"]}></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={2.5}>
            <div className={styles.animation_layer} id={styles["stars2"]}></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={2.5}>
            <div className={styles.animation_layer} id={styles["stars3"]}></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={10}>
            <div className={styles.animation_layer} id={styles["layer1"]}></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={2.5}>
            <div className={styles.animation_layer} id={styles["layer2"]}></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={2.5}>
            <div className={styles.animation_layer} id={styles["layer3"]}></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={2.5}>
            <div className={styles.animation_layer} id={styles["layer4"]}></div>
          </ParallaxLayer>   
        </Parallax>
      </div>
  )
}
