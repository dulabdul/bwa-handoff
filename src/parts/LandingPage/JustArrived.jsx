import React, { useEffect, useRef } from 'react';

import btnView from '../../assets/images/design/btn_view.svg';
import Button from '../../components/Button';
import Carousel from '../../components/Carousell';
import fetchData from '../../helpers/fetch';
import useAsync from '../../helpers/hooks/useAsync';

export default function JustArrived() {
  const { data, run, isLoading, erorr } = useAsync();
  useEffect(() => {
    run(
      fetchData({
        url: '/api/products/?page=1&limit=10',
      })
    );
  }, [run]);
  const refContainer = useRef(null);
  return (
    <section
      className='py-8 flex flex-col'
      id='just-arrived'>
      <div className='container mx-auto px-5'>
        <div className='flex-start w-full'>
          <h1 className='font-semibold text-2xl text-black text-start leading-normal'>
            Just Arrived <br /> This Summer For you
          </h1>
        </div>
      </div>
      <div
        className='overflow-x-hidden px-4'
        id='carousel'>
        <div
          className='container mx-auto'
          ref={refContainer}></div>

        {isLoading ? (
          <div
            className=' flex flex-row relative -mx-4'
            style={{
              paddingLeft:
                refContainer.current?.getBoundingClientRect?.()?.left - 16 || 0,
            }}>
            Loading
          </div>
        ) : erorr ? (
          JSON.stringify(erorr)
        ) : data.data.length === 0 ? (
          'Data Not Found'
        ) : (
          <Carousel refContainer={refContainer}>
            {data.data.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className='pl-4 relative h-full group transition-all duration-300 card'>
                  <div className='h-[386px] w-[280px] rounded-3xl overflow-hidden relative transition-all duration-400 ease-in-out'>
                    <div className='absolute w-full h-full flex items-center justify-center overflow-hidden bg-black bg-opacity-30 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-400 ease-in-out'>
                      <div className='items-center justify-center bg-white hidden w-16 h-16 group-hover:flex rounded-full shadow-md'>
                        <img
                          src={btnView}
                          alt=''
                        />
                      </div>
                    </div>
                    <img
                      src={item.imageUrl}
                      className='object-center object-cover w-full h-full'
                      alt=''
                    />
                  </div>
                  <h6 className='text-xl font-semibold text-start mt-2'>
                    {item.title}
                  </h6>
                  <p>IDR {item.price}</p>
                  <Button
                    type='link'
                    isExternal
                    target='_blank'
                    href={`categories/${item.idc}/products/${item.id}`}
                    className='stretched-link cursor-pointer'>
                    {/* A JSX comment */}
                  </Button>
                </div>
              );
            })}
          </Carousel>
        )}
      </div>
    </section>
  );
}
