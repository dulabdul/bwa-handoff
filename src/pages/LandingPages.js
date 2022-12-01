import React from 'react';
import BrowserRoom from '../parts/LandingPage/BrowserRoom';
import Header from '../parts/Header';
import Hero from '../parts/Hero';
import JustArrived from '../parts/LandingPage/JustArrived';
import Clients from '../parts/Clients';
export default function LandingPages() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <BrowserRoom />
        <JustArrived />
        <Clients />
      </main>
    </>
  );
}
