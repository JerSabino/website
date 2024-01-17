import React from 'react'

import styles from "./About.module.css"
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
                className={styles.aboutImage}
                src={getImageUrl("about/about.webp")} 
                alt="" 
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src="https://placehold.co/50x50" alt="" />
                    <div className={styles.aboutItemText}>
                        <h3>Lorem ipsum</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat, metus nec malesuada convallis
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src="https://placehold.co/50x50" alt="" />
                    <div className={styles.aboutItemText}>
                        <h3>Lorem ipsum</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat, metus nec malesuada convallis
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src="https://placehold.co/50x50" alt="" />
                    <div className={styles.aboutItemText}>
                        <h3>Lorem ipsum</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat, metus nec malesuada convallis
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
