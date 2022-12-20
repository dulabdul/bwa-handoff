import React from 'react';
import notFound from '../assets/images/design/notfound.jpg';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <section className='container mx-auto py-12 px-4'>
      <div className='grid grid-cols-1 justify-center items-center'>
        <div className='mx-auto flex justify-center'>
          <img
            className='w-full h-full object-center object-cover mx-auto'
            src={notFound}
            alt=''
          />
        </div>
        <div className='grid grid-cols-1 text-center'>
          <h1 className='text-2xl font-semibold mb-3 md:text-4xl'>
            Sorry, your destination not found
          </h1>

          <div>
            <Button
              type='link'
              href='/'
              hasShadow
              className='w-[75%] md:w-auto button'>
              Back To Home
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
