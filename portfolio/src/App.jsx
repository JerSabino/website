
import styles from './App.module.css'
import { Navbar } from "./components/Navbar/Navbar"
import { ParallaxHero } from "./components/ParallaxHero/ParallaxHero"
import { ParallaxScroll } from "./components/ParallaxScroll/ParallaxScroll"
import { ParallaxProvider } from "react-scroll-parallax";
import { Hero } from "./components/Hero/Hero"
import { About } from "./components/About/About"
import { Experience } from "./components/Experience/Experience"
import { Contact } from "./components/Contact/Contact"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {

  return (
    <div className={styles.App}>
      <Navbar></Navbar>
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
