import React from 'react';
import ikeaLogo from '../assets/images/design/ikea.svg';
import tokpedLogo from '../assets/images/design/tokopedia.svg';
import hermanMiller from '../assets/images/design/herman-miller.svg';
export default function Clients() {
  return (
    <section className='flex flex-col'>
      <div className='overflow-x-auto md:overflow-hidden'>
        <div className='container grid grid-flow-col items-center md:justify-center relative pt-4 gap-x-8 mx-auto pl-4'>
          <div className='h-full relative grid items-center'>
            <div className='w-[150px] md:w-[400px]'>
              <img
                src={ikeaLogo}
                className='object-cover object-center bg-no-repeat grayscale hover:grayscale-0 transition-all duration-500'
                alt=''
              />
            </div>
          </div>
          <div className='h-full relative grid items-center'>
            <div className='w-[150px]'>
              <img
                src={tokpedLogo}
                className='object-cover object-center bg-no-repeat grayscale hover:grayscale-0 transition-all duration-500'
                alt=''
              />
            </div>
          </div>
          <div className='h-full relative grid-items-center'>
            <div className='w-[150px]'>
              <img
                src={hermanMiller}
                className='object-cover object-center bg-no-repeat grayscale hover:grayscale-0 transition-all duration-500'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
