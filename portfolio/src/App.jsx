
import styles from './App.module.css'
import { Navbar } from "./components/Navbar/Navbar"
import { ParallaxScroll } from "./components/ParallaxScroll/ParallaxScroll"
import { ParallaxProvider } from "react-scroll-parallax"
import Headroom from 'react-headroom'
import { Hero } from "./components/Hero/Hero"
import { About } from "./components/About/About"
import { Experience } from "./components/Experience/Experience"
import { Contact } from "./components/Contact/Contact"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {

  return (
    <div className={styles.App}>
      <Headroom>
        <Navbar></Navbar>
      </Headroom>
      <ParallaxProvider>
        <ParallaxScroll></ParallaxScroll>
      </ParallaxProvider>
      <About></About>
      <Experience></Experience>
      <Contact></Contact>
    </div>
  );
}

export default App
