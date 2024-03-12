import React, { useState } from 'react'

import styles from "./Tooltip.module.css";

export const Tooltip = ({text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.tooltip_container}
      onMouseEnter = {() => setIsVisible(true)}
      onMouseLeave = {() => setIsVisible(false)}
    >
      {children}
      {isVisible && <div className={styles.tooltip}>{text}</div>}
    </div>
  );
}
