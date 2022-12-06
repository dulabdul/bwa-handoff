import React from 'react';
import BreadCrumb from '../components/Breadcrumb';
import ShippingDetails from '../parts/Cart/ShippingDetails';
import ShoppingCart from '../parts/Cart/ShoppingCart';
import Footer from '../parts/Footer';
import Header from '../parts/Header';
import Sitemap from '../parts/Sitemap';

export default function Cart() {
  return (
    <>
      <Header />
      <BreadCrumb
        list={[
          { url: '/', name: 'Home' },
          { url: '/Cart/203', name: 'Shopping Cart' },
        ]}
      />
      <section className='container mx-auto md:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-12 overflow-hidden'>
          <div className='md:col-start-1 md:col-end-8 md:col-span-7 md:mr-12'>
            <ShoppingCart />
          </div>
          <div className='md:col-start-8 md:col-end-13'>
            <ShippingDetails />
          </div>
        </div>
      </section>
      <hr />
      <Sitemap />
      <Footer />
    </>
  );
}
