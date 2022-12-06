import React from 'react';

import Header from '../parts/Header';
import Sitemap from '../parts/Sitemap';
import Footer from '../parts/Footer';
import NotFound from '../parts/NotFound';
export default function NotFoundPages() {
  return (
    <>
      <Header />
      <NotFound />
      <Sitemap />
      <Footer />
    </>
  );
}
