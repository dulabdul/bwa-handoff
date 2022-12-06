import React from 'react';
import successSvg from '../assets/images/design/success.svg';
import Button from '../components/Button';

export default function SuccessCheckout() {
  return (
    <section className='container mx-auto py-12 px-4'>
      <div className='grid grid-cols-1 justify-center items-center'>
        <div className='w-[260px] h-[260px] mx-auto flex justify-center md:w-[500px] md:h-[500px]'>
          <img
            className='w-full h-full object-center object-cover mx-auto'
            src={successSvg}
            alt=''
          />
        </div>
        <div className='grid grid-cols-1 text-center'>
          <h1 className='text-2xl font-semibold mb-3 md:text-4xl'>
            Ah yes it’s success!
          </h1>
          <p className='text-lg md:text-xl font-light'>
            Furniture yang anda beli akan kami kirimkan saat ini juga{' '}
            <br className='hidden md:block' /> so now please sit tight and be
            ready for it
          </p>
          <div>
            <Button
              type='button'
              hasShadow
              className='w-[75%] md:w-auto button'>
              Back To Shop
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
