import { useEffect, useState } from 'react';

import styles from './App.module.css'
import Headroom from 'react-headroom'

import { Navbar } from "./components/Navbar/Navbar"
import { ParallaxScroll } from "./components/ParallaxScroll/ParallaxScroll"
import { ParallaxProvider } from "react-scroll-parallax"
import { Bio } from "./components/Bio/Bio"
import { Hero } from "./components/Hero/Hero"
import { About } from "./components/About/About"
import { Experience } from "./components/Experience/Experience"
import { Contact } from "./components/Contact/Contact"
import { End } from "./components/End/End"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { motion } from 'framer-motion';

function App() {

  /* Mouse Methods */
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX - 8,
        y: e.clientY - 8
      })
    }

    window.addEventListener("mousemove", mouseMove);
    
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);
  
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  const variants = {
    default: {
      x: mousePosition.x+4,
      y: mousePosition.y+4,
      mixBlendMode: "difference"
    },
    text: {
      height: 50,
      width: 50,
      x: mousePosition.x + 25,
      y: mousePosition.y + 25,
    }
  }

  return (
    <div>
      <motion.div 
        className={styles.cursor}
        variants={variants}
        animate="default"
        transition={{
          duration: 0.0
        }}
        id="cursor"
      >
      </motion.div>
      <div className={styles.App} id="home">
        <Headroom>
          <Navbar></Navbar>
        </Headroom>
        <ParallaxProvider>
          <ParallaxScroll></ParallaxScroll>
        </ParallaxProvider>
        <Bio></Bio>
        <Experience></Experience>
        <About></About>
        <End></End>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App
