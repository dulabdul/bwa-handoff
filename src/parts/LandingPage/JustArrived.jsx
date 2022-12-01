import React from 'react';
import img5 from '../../assets/images/content/image-5.jpg';
import img6 from '../../assets/images/content/image-6.jpg';
import img7 from '../../assets/images/content/image-7.jpg';
import img8 from '../../assets/images/content/image-8.jpg';
import img9 from '../../assets/images/content/image-9.jpg';
export default function JustArrived() {
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
        className='overflow-x-hidden'
        id='carousel'>
        <div className='container mx-auto'></div>
        <div className='container mx-auto flex flex-row relative pt-4 gap-x-3'>
          <div className='pl-4 relative h-full'>
            <div className='rounded-3xl shadow-md overflow-hidden h-[386px] w-[280px]'>
              <img
                src={img5}
                className='object-center object-cover w-full h-full'
                alt=''
              />
            </div>
            <h6 className='text-xl font-semibold text-start mt-2'>
              Cangkir Mauttie
            </h6>
            <p>IDR 89.300.000</p>
          </div>
          <div className='pl-4 relative h-full'>
            <div className='rounded-3xl shadow-md overflow-hidden h-[386px] w-[280px]'>
              <img
                src={img6}
                className='object-center object-cover w-full h-full'
                alt=''
              />
            </div>
            <h6 className='text-xl font-semibold text-start mt-2'>
              Cangkir Mauttie
            </h6>
            <p>IDR 89.300.000</p>
          </div>
          <div className='pl-4 relative h-full'>
            <div className='rounded-3xl shadow-md overflow-hidden h-[386px] w-[280px]'>
              <img
                src={img7}
                className='object-center object-cover w-full h-full'
                alt=''
              />
            </div>
            <h6 className='text-xl font-semibold text-start mt-2'>
              Cangkir Mauttie
            </h6>
            <p>IDR 89.300.000</p>
          </div>
          <div className='pl-4 relative h-full'>
            <div className='rounded-3xl shadow-md overflow-hidden h-[386px] w-[280px]'>
              <img
                src={img8}
                className='object-center object-cover w-full h-full'
                alt=''
              />
            </div>
            <h6 className='text-xl font-semibold text-start mt-2'>
              Cangkir Mauttie
            </h6>
            <p>IDR 89.300.000</p>
          </div>
          <div className='pl-4 relative h-full'>
            <div className='rounded-3xl shadow-md overflow-hidden h-[386px] w-[280px]'>
              <img
                src={img9}
                className='object-center object-cover w-full h-full'
                alt=''
              />
            </div>
            <h6 className='text-xl font-semibold text-start mt-2'>
              Cangkir Mauttie
            </h6>
            <p>IDR 89.300.000</p>
          </div>
          <div className='pl-4 relative h-full'>
            <div className='rounded-3xl shadow-md overflow-hidden h-[386px] w-[280px]'>
              <img
                src={img5}
                className='object-center object-cover w-full h-full'
                alt=''
              />
            </div>
            <h6 className='text-xl font-semibold text-start mt-2'>
              Cangkir Mauttie
            </h6>
            <p>IDR 89.300.000</p>
          </div>
        </div>
      </div>
    </section>
  );
}
