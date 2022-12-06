import React, { useEffect } from 'react';
import BreadCrumb from '../components/Breadcrumb';
import ProductDetails from '../parts/DetailsPage/ProductDetails';
import Suggestion from '../parts/DetailsPage/Suggestion';
import Footer from '../parts/Footer';
import Header from '../parts/Header';
import Sitemap from '../parts/Sitemap';

export default function DetailsPage() {
  return (
    <>
      <Header pages='Details' />
      <main>
        <BreadCrumb
          list={[
            { url: '/', name: 'Home' },
            { url: '/categories/912', name: 'Office Desk' },
            { url: 'categories/912/products/219', name: 'Chair Desk' },
          ]}
        />
        <ProductDetails />
        <Suggestion />
      </main>
      <footer>
        <Sitemap />
        <Footer />
      </footer>
    </>
  );
}
