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
import { End } from "./components/End/End"
import { FixedContact } from "./components/FixedContact/FixedContact"
import { Contact } from "./components/Contact/Contact"
import { Projects } from "./components/Projects/Projects"
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
      <div className={styles.App} id="home">
        <Headroom>
          <Navbar></Navbar>
        </Headroom>
        <div>
          <ParallaxProvider>
            <ParallaxScroll></ParallaxScroll>
          </ParallaxProvider>
        </div>
        <div className={styles.content}>
          <Bio></Bio>
          <Experience></Experience>
          <Projects></Projects>
        </div>
        <div>
          <End></End>
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
}

export default App
