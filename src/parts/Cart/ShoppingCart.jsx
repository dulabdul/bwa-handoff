import React from 'react';

import Button from '../../components/Button';
import xSVG from '../../assets/images/design/X.svg';
import { useGlobalContext } from '../../helpers/hooks/useGlobalContext';
import Currency from '../../helpers/format/Currency';
import notFoundCart from '../../assets/images/design/not-found-shop.jpg';
export default function ShoppingCart() {
  const { state, dispatch } = useGlobalContext();
  return (
    <>
      <div className='grid grid-cols-1 px-4'>
        <div className='w-full pb-2 pt-8 md:pt-0'>
          <h1 className='font-semibold leading-8 text-2xl'>Shopping Cart</h1>
        </div>
        <div className='grid-cols-4 items-center overflow-hidden mb-1 mt-3 hidden md:grid'>
          <div className='w-full '>
            <h5 className='text-base font-normal'>Photo</h5>
          </div>
          <div className='w-full '>
            <h5 className='text-base font-normal'>Product</h5>
          </div>
          <div className='w-full '>
            <h5 className='text-base font-normal'>Price</h5>
          </div>
          <div className='w-full grid justify-center'>
            <h5 className='text-base font-normal'>Actions</h5>
          </div>
        </div>
        <hr />
      </div>
      {Object.keys(state.cart).length === 0 ? (
        <div className='my-4 mx-auto w-full h-full'>
          <h3 className='font-semibold text-2xl text-center mt-12'>
            Not Found Products...
          </h3>
          <div className='mx-auto overflow-hidden w-52 h-52'>
            <img
              src={notFoundCart}
              alt=''
            />
          </div>
          <div className='flex justify-center'>
            <Button
              href='/'
              type='link'
              hasShadow
              isWidthAuto
              className='button'>
              Go Shopping
            </Button>
          </div>
        </div>
      ) : (
        Object.keys(state.cart).map((key) => {
          const item = state.cart[key];

          return (
            <div
              key={key}
              className='grid-cart'>
              <div className='w-full h-full'>
                <img
                  src={item.imgUrls[0] || ''}
                  className='w-full h-full object-cover bg-no-repeat object-center rounded-2xl shadow-sm md:h-[90px] md:w-[90px]'
                  alt=''
                />
              </div>
              <div className='w-full h-full col-span-2 md:grid-cols-2 grid items-center'>
                <h5 className='font-semibold text-xl'>
                  {item.title} <br className='hidden md:block' />
                  <span className='text-base font-light'>
                    {item.category.title}
                  </span>
                </h5>

                <p className='text-base font-semibold'>
                  IDR {Currency(item.price)}
                </p>
              </div>
              <div className='flex items-center justify-center '>
                <Button
                  onClick={() => dispatch({ type: 'REMOVE_CART', id: item.id })}
                  type='button'
                  className='text-red text-xl'>
                  <img
                    src={xSVG}
                    className='w-6 h-6'
                    alt=''
                  />
                </Button>
              </div>
            </div>
          );
        })
      )}
    </>
  );
}
