import HTMLReactParser from 'html-react-parser';
import React, { useState, useEffect } from 'react';

import cartSVG from '../../assets/images/design/cart.svg';
import Button from '../../components/Button';
import Currency from '../../helpers/format/Currency';
import { useGlobalContext } from '../../helpers/hooks/useGlobalContext';

export default function ProductDetails({ data }) {
  const [slider, setSlider] = useState(null);
  useEffect(() => {
    setSlider(data?.imgUrls[0] || '');
  }, [data]);
  const { dispatch } = useGlobalContext();

  return (
    <section className='container mx-auto'>
      <div className='grid grid-cols-1 px-4 pt-8 md:grid-cols-12 md:grid-rows-1'>
        <div className='w-full md:col-start-9 md:col-end-13 md:row-start-1'>
          <h5 className='font-semibold text-4xl leading-normal'>
            {data?.title}
          </h5>
          <p className='text-xl font-normal'>IDR {Currency(data?.price)}</p>
        </div>
        <div className='thumbnail grid grid-flow-col gap-x-2 -mx-2 overflow-x-auto row-start-3 pl-2 md:grid-flow-row md:row-start-1 md:col-start-1 md:col-end-2'>
          {data?.imgUrls?.map((item) => {
            return (
              <div
                key={item}
                onClick={() => setSlider(item)}>
                <div
                  className={`bg-gray-100 w-[106px] h-[106px] cursor-pointer item ${
                    slider === item ? 'selected' : ''
                  }`}>
                  <img
                    src={item}
                    className='overflow-hidden rounded-lg object-cover w-full h-full object-center'
                    alt={item}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className='w-full py-6 md:h-[609px] md:w-[560px] md:col-start-2 md:col-end-5 md:row-start-1'>
          <div className='overflow-hidden h-full bg-gray-100 rounded-xl'>
            <img
              src={slider}
              className='object-cover object-center overflow-hidden h-full w-full'
              alt=''
            />
          </div>
        </div>
        <div className='w-full py-10 flex mx-auto md:col-start-9 md:row-start-1 md:col-end-13 flex-col md:justify-center'>
          <Button
            className='button justify-center items-center md:h-0 md:py-5 md:w-[75%]'
            type='button'
            onClick={() =>
              dispatch({
                type: 'ADD_TO_CART',
                item: data,
              })
            }
            hasShadow
            isFlex>
            <img
              src={cartSVG}
              className='flex mr-1'
              alt=''
            />
            <span> Add To Cart</span>
          </Button>
          <h5 className='font-semibold text-lg leading-relaxed mb-2 md:mt-10 mt-6'>
            About the product
          </h5>
          <p className='text-base leading-relaxed'>
            {data?.description ? HTMLReactParser(data?.description) : 'Loading'}
          </p>
        </div>
      </div>
    </section>
  );
}
