import React, { useEffect } from 'react';
import BreadCrumb from '../components/Breadcrumb';
import fetchData from '../helpers/fetch';
import useAsync from '../helpers/hooks/useAsync';
import ShippingDetails from '../parts/Cart/ShippingDetails';
import ShoppingCart from '../parts/Cart/ShoppingCart';
import Footer from '../parts/Footer';
import Header from '../parts/Header';
import Sitemap from '../parts/Sitemap';

export default function Cart() {
  const { data, isLoading, run } = useAsync();
  useEffect(() => {
    run(fetchData({ url: '/api/checkout/meta' }));
  }, [run]);
  return (
    <>
      <Header />
      <BreadCrumb
        list={[
          { url: '/', name: 'Home' },
          { url: '/cart', name: 'Shopping Cart' },
        ]}
      />
      <section className='container mx-auto md:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-12 overflow-hidden'>
          <div className='md:col-start-1 md:col-end-8 md:col-span-7 md:mr-12'>
            <ShoppingCart />
          </div>
          <div className='md:col-start-8 md:col-end-13'>
            <ShippingDetails
              data={data}
              isLoading={isLoading}
            />
          </div>
        </div>
      </section>
      <hr />
      <Sitemap />
      <Footer />
    </>
  );
}
