import { useEffect } from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import TechStrip from '../components/TechStrip';
import Services from '../components/Services';
import CheckerRule from '../components/CheckerRule';
import Process from '../components/Process';
import About from '../components/About';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import BgSwitch from '../components/BgSwitch';
import { initPageMotion } from '../lib/pageMotion';
import { initChessGame } from '../lib/chessGame';

export default function Landing() {
  useEffect(() => {
    // The prototype's own scripts, started once the markup is on the page.
    initPageMotion();
    initChessGame();
  }, []);

  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <TechStrip />
        <Services />
        <CheckerRule />
        <Process />
        <CheckerRule />
        <About />
        <CheckerRule />
        <ContactSection />
      </main>
      <Footer />
      <BgSwitch />
    </>
  );
}
