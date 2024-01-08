import React from 'react'

import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Jer!</h1>
        {/* <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat, metus nec malesuada convallis, elit enim vulputate erat, a fringilla augue enim vulputate velit. Nam eget auctor orci. </p> */}
            <a href="mailto:jer.lsabino@gmail.com" className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
        <img src={getImageUrl("hero/hero.png")} alt="hero" className={styles.heroImage}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  );
}
