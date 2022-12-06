import React from 'react';
import chair1 from '../../assets/images/content/chair-1.png';
import chair2 from '../../assets/images/content/chair-2.png';
import chair3 from '../../assets/images/content/chair-3.png';
import Button from '../../components/Button';
import xSVG from '../../assets/images/design/X.svg';
export default function ShoppingCart() {
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
      <div className='grid-cart'>
        <div className='w-full h-full'>
          <img
            src={chair1}
            className='w-full h-full object-cover bg-no-repeat object-center rounded-2xl shadow-sm md:h-[90px] md:w-[90px]'
            alt=''
          />
        </div>
        <div className='w-full h-full col-span-2 md:grid-cols-2 grid items-center'>
          <h5 className='font-semibold text-xl'>
            Saman Kakka{' '}
            <span className='text-base font-light'>Office Room</span>
          </h5>

          <p className='text-base font-semibold'>IDR 28.000.000</p>
        </div>
        <div className='flex items-center justify-center '>
          <Button
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
      <div className='grid-cart'>
        <div className='w-full h-full'>
          <img
            src={chair1}
            className='w-full h-full object-cover bg-no-repeat object-center rounded-2xl md:w-[90px] md:h-[90px] shadow-sm'
            alt=''
          />
        </div>
        <div className='w-full h-full col-span-2 md:grid-cols-2 grid items-center'>
          <h5 className='font-semibold text-xl'>
            Saman Kakka{' '}
            <span className='text-base font-light'>Office Room</span>
          </h5>

          <p className='text-base font-semibold'>IDR 28.000.000</p>
        </div>
        <div className='flex items-center justify-center '>
          <Button
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
      <div className='grid-cart'>
        <div className='w-full h-full'>
          <img
            src={chair1}
            className='w-full h-full object-cover bg-no-repeat object-center rounded-2xl shadow-sm md:w-[90px] md:h-[90px]'
            alt=''
          />
        </div>
        <div className='w-full h-full col-span-2 md:grid-cols-2 grid items-center'>
          <h5 className='font-semibold text-xl'>
            Saman Kakka{' '}
            <span className='text-base font-light'>Office Room</span>
          </h5>

          <p className='text-base font-semibold'>IDR 28.000.000</p>
        </div>
        <div className='flex items-center justify-center '>
          <Button
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
    </>
  );
}
