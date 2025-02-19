import Header from "../components/semantic/Header";
import Footer from "../components/semantic/Footer";
import AboutHero from "../components/sections-aboutpage/AboutHero";
import AboutImgSection from "../components/sections-aboutpage/AboutImgSection";
import AboutTextSection from "../components/sections-aboutpage/AboutTextSection";
import AboutContact from "../components/sections-aboutpage/AboutContact";
import { motion, useScroll } from "framer-motion";
import Scroller from "../components/elements/Scroller";
import AboutMagSection from "../components/sections-aboutpage/AboutMagSection";

export default function AboutPage() {

  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div className="fixed bottom-0 left-0 right-0 z-50 h-2 bg-blue origin-left"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <header>
        <Header />
      </header>
      <main>
        <AboutHero />
        <AboutImgSection />
        <AboutTextSection />
        <AboutMagSection />
        <AboutContact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}