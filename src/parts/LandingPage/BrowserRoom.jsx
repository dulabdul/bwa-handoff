import React from 'react';
import img1 from '../../assets/images/content/image-1.jpg';
import img2 from '../../assets/images/content/image-2.jpg';
import img3 from '../../assets/images/content/image-3.jpg';
import img4 from '../../assets/images/content/image-4.jpg';

import Button from '../../elements/Button';
export default function BrowserRoom() {
  return (
    <>
      <section
        className=' bg-gray-100 px-5 py-8'
        id='browser-the-room'>
        <div className='container mx-auto items-center'>
          <div className='flex flex-start w-full'>
            <h1 className='font-semibold text-2xl text-black text-start leading-normal'>
              Browser The Room <br />
              That We Designed For You
            </h1>
          </div>
          <div className='grid items-center justify-center mt-8 grid-cols-1 grid-rows-1 md:grid-cols-12 gap-4'>
            <div className='overflow-hidden relative md:col-span-6 md:row-span-1 md:h-[180px] hover:scale-95 transition-all duration-500 group rounded-3xl'>
              <img
                src={img1}
                alt=''
                className='w-full h-full object-cover object-center md:object-bottom bg-no-repeat shadow-md group-hover:scale-110 transition-all duration-500 md:absolute'
              />
              <div className='absolute z-50 top-10 right-8'>
                <h2 className='font-semibold text-xl text-black'>
                  Living Room
                </h2>
                <h3 className=''>18,309 items</h3>
              </div>
              <Button
                type='link'
                isExternal
                target='_blank'
                href='https://luxspace-react-demo.netlify.app/'
                className='stretched-link cursor-pointer'>
                {/* A JSX comment */}
              </Button>
            </div>
            <div className='h-[180px] overflow-hidden relative row-span-1 md:col-span-3 md:row-span-2 md:h-[390px] hover:scale-95 transition-all duration-500 group rounded-3xl'>
              <img
                src={img2}
                alt=''
                className='w-full h-full object-cover object-center md:object-bottom bg-no-repeat shadow-md group-hover:scale-110 transition-all duration-500 md:absolute'
              />
              <div className='absolute z-50 top-10 right-8'>
                <h2 className='font-semibold text-xl text-black'>
                  Living Room
                </h2>
                <h3 className=''>18,309 items</h3>
              </div>
              <Button
                type='link'
                isExternal
                target='_blank'
                href='https://luxspace-react-demo.netlify.app/'
                className='stretched-link cursor-pointer'>
                {/* A JSX comment */}
              </Button>
            </div>
            <div className='h-[180px] overflow-hidden relative md:col-span-3 md:row-span-2 md:h-[390px] hover:scale-95 transition-all duration-500 group rounded-3xl'>
              <img
                src={img3}
                alt=''
                className='w-full h-full object-cover object-center md:object-bottom bg-no-repeat shadow-md group-hover:scale-110 transition-all duration-500 md:absolute'
              />
              <div className='absolute z-50 top-10 right-8'>
                <h2 className='font-semibold text-xl text-black'>
                  Living Room
                </h2>
                <h3 className=''>18,309 items</h3>
              </div>
              <Button
                type='link'
                isExternal
                target='_blank'
                href='https://luxspace-react-demo.netlify.app/'
                className='stretched-link cursor-pointer'>
                {/* A JSX comment */}
              </Button>
            </div>
            <div className='h-[180px] overflow-hidden relative md:col-span-6 md:row-span-1 md:h-[180px] hover:scale-95 transition-all duration-500 group rounded-3xl'>
              <img
                src={img4}
                alt=''
                className='w-full h-full object-cover object-center md:object-bottom bg-no-repeat shadow-md group-hover:scale-110 transition-all duration-500 md:absolute'
              />
              <div className='absolute z-50 top-10 right-8'>
                <h2 className='font-semibold text-xl text-black'>
                  Living Room
                </h2>
                <h3 className=''>18,309 items</h3>
              </div>
              <Button
                type='link'
                isExternal
                target='_blank'
                href='https://luxspace-react-demo.netlify.app/'
                className='stretched-link cursor-pointer'>
                {/* A JSX comment */}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
