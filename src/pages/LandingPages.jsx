import React, { useRef, useEffect } from 'react';
import BrowserRoom from '../parts/LandingPage/BrowserRoom';
import Header from '../parts/Header';
import Hero from '../parts/Hero';
import JustArrived from '../parts/LandingPage/JustArrived';
import Clients from '../parts/Clients';
import Footer from '../parts/Footer';
import Sitemap from '../parts/Sitemap';
export default function LandingPages() {
  const exploreRef = useRef(null);
  useEffect(() => {
    document.title = 'Homepage | LuxSpace';
  }, []);

  return (
    <>
      <Header pages='Home' />
      <Hero exploreRef={exploreRef} />
      <main>
        <BrowserRoom exploreRef={exploreRef} />
        <JustArrived />
        <Clients />
      </main>
      <footer>
        <Sitemap />
        <Footer />
      </footer>
    </>
  );
}
