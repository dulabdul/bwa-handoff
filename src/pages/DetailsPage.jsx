import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BreadCrumb from '../components/Breadcrumb';
import fetchData from '../helpers/fetch';
import useAsync from '../helpers/hooks/useAsync';
import ProductDetails from '../parts/DetailsPage/ProductDetails';
import Suggestion from '../parts/DetailsPage/Suggestion';
import Footer from '../parts/Footer';
import Header from '../parts/Header';
import ScrollToTop from '../parts/ScrollToTop';
import Sitemap from '../parts/Sitemap';

function LoadingProductsDetails() {
  return (
    <section className='container mx-auto'>
      <div className='grid grid-cols-1 px-4 pt-8 md:grid-cols-12 md:grid-rows-1'>
        <div className='w-full md:col-start-9 md:col-end-13 md:row-start-1'>
          <div className='w-80 h-10 bg-gray-300 animate-pulse rounded-full'></div>
          <div className='w-40 h-8 bg-gray-300 animate-pulse rounded-full my-4'></div>
        </div>
        <div className='thumbnail grid grid-flow-col gap-x-2 -mx-2 overflow-x-auto row-start-3 pl-2 md:grid-flow-row md:row-start-1 md:col-start-1 md:col-end-2'>
          {Array(5)
            .fill()
            .map((_, index) => {
              return (
                <div
                  key={index}
                  className='animate-pulse'>
                  <div className='relative group card'>
                    <div className='w-[106px] h-[106px] rounded-xl bg-gray-300'></div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className='w-full pl-8 md:h-[609px] md:w-[560px] md:col-start-2 md:col-end-5 md:row-start-1'>
          <div className='overflow-hidden h-full bg-gray-300 rounded-xl'></div>
        </div>
        <div className='w-full py-10 flex mx-auto md:col-start-9 md:row-start-1 md:col-end-13 flex-col md:justify-center'>
          <div className='w-72 h-12 rounded-full animate-pulse bg-gray-300'></div>
          <div className='w-72 h-4 mt-12 bg-gray-300 animate-pulse rounded-full'></div>
          <div className='w-44 h-4 mt-6 bg-gray-300 animate-pulse rounded-full'></div>
          <div className='w-80 h-4 mt-2 bg-gray-300 animate-pulse rounded-full'></div>
          <div className='w-72 h-4 mt-2 bg-gray-300 animate-pulse rounded-full'></div>
          <div className='w-60 h-4 mt-2 bg-gray-300 animate-pulse rounded-full'></div>
          <div className='w-72 h-4 mt-2 bg-gray-300 animate-pulse rounded-full'></div>
          <div className='w-48 h-4 mt-2 bg-gray-300 animate-pulse rounded-full'></div>
        </div>
      </div>
    </section>
  );
}

function LoadingSuggest() {
  return (
    <section className='bg-gray-100'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 items-center overflow-x-auto'>
          <div className='w-full pt-12 pb-8'>
            <div className='w-80 h-6 bg-gray-300 animate-pulse rounded-full'></div>
            <div className='w-48 h-4 mt-3 bg-gray-300 animate-pulse rounded-full'></div>
          </div>
          <div className='w-full h-full pb-20 overflow-auto grid-flow-col grid gap-x-5 justify-start'>
            {Array(4)
              .fill()
              .map((_, index) => {
                return (
                  <div
                    key={index}
                    className='relative rounded-2xl overflow-hidden w-full h-full pb-16'>
                    <div className='w-full h-full overflow-hidden animate-pulse'>
                      <div className='rounded-2xl shadow-sm bg-gray-300 w-full md:w-[287px] h-[150px]'></div>
                    </div>
                    <div className='w-64 h-5 mb-2 bg-gray-300 animate-pulse rounded-full'></div>
                    <div className='w-40 h-4 bg-gray-300 animate-pulse rounded-full'></div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
export default function DetailsPage() {
  const { idp, idc } = useParams();

  const { data, run, status, error, isLoading } = useAsync();
  useEffect(() => {
    run(
      fetchData({
        url: `/api/products/${idp}`,
      })
    );
  }, [idp, run]);
  console.log(data);
  useEffect(() => {
    document.title = `Details | ${data ? `${data.title}` : ''}`;
  }, [data]);
  return (
    <>
      <Header pages='Details' />
      <main>
        <BreadCrumb
          list={[
            { url: '/', name: 'Home' },
            { url: `/categories/${idc}/products/${idp}`, name: 'Details' },
          ]}
        />

        {isLoading ? (
          <LoadingProductsDetails />
        ) : (
          <ProductDetails data={data} />
        )}

        {isLoading ? (
          <LoadingSuggest />
        ) : (
          <Suggestion data={data?.relatedProducts} />
        )}
      </main>
      <footer>
        <Sitemap />
        <Footer />
      </footer>
      <ScrollToTop />
    </>
  );
}
