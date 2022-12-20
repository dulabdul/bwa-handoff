import React, { useEffect } from 'react';
import BreadCrumb from '../components/Breadcrumb';
import Footer from '../parts/Footer';
import Header from '../parts/Header';
import Sitemap from '../parts/Sitemap';
import SuccessCheckout from '../parts/SuccessCheckout';

export default function SuccessPages() {
  useEffect(() => {
    document.title = 'SuccessPage | LuxSpace';
  }, []);
  return (
    <>
      <Header />
      <BreadCrumb
        list={[
          { url: '/', name: 'Home' },
          { url: '/cart', name: 'Success Checout' },
        ]}
      />
      <SuccessCheckout />
      <Sitemap />
      <Footer />
    </>
  );
}
