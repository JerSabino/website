import React from 'react'

import styles from "./ScrollDown.module.css"

export const ScrollDown = () => {
  return (
    <div id={styles["mouse-scroll"]}>
      <div className={styles.mouse}>
        <div className={styles.mousein}></div>
      </div>
      <div>
          <span className={styles.downarrow1}></span>
          <span className={styles.downarrow2}></span>
          <span className={styles.downarrow3}></span>
      </div>
    </div>
  )
}
