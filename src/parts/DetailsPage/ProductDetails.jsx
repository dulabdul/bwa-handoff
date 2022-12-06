import React from 'react';
import showcaseFront from '../../assets/images/content/showcase-1.front.jpg';
import showcaseBack from '../../assets/images/content/showcase-1.back.jpg';
import showcaseRear from '../../assets/images/content/showcase-1.rear.jpg';
import showcaseSide from '../../assets/images/content/showcase-1.side.jpg';
import showcaseTop from '../../assets/images/content/showcase-1.top.jpg';
import cartSVG from '../../assets/images/design/cart.svg';
import Button from '../../components/Button';
export default function ProductDetails() {
  return (
    <section className='container mx-auto'>
      <div className='grid grid-cols-1 px-4 pt-8 md:grid-cols-12 md:grid-rows-1'>
        <div className='w-full md:col-start-9 md:col-end-13 md:row-start-1'>
          <h5 className='font-semibold text-4xl leading-normal'>
            Chair Chatty
          </h5>
          <p className='text-xl font-normal'>IDR 12.000.000</p>
        </div>
        <div className='thumbnail grid grid-flow-col gap-x-2 -mx-2 overflow-x-auto row-start-3 pl-2 md:grid-flow-row md:row-start-1 md:col-start-1 md:col-end-2'>
          <div className='bg-gray-100 w-[106px] h-[106px]'>
            <img
              src={showcaseBack}
              className='overflow-hidden rounded-lg object-cover w-full h-full object-center'
              alt=''
            />
          </div>
          <div className='bg-gray-100 w-[106px] h-[106px]'>
            <img
              src={showcaseBack}
              className='overflow-hidden rounded-lg object-cover w-full h-full object-center'
              alt=''
            />
          </div>
          <div className='bg-gray-100 w-[106px] h-[106px]'>
            <img
              src={showcaseBack}
              className='overflow-hidden rounded-lg object-cover w-full h-full object-center'
              alt=''
            />
          </div>
          <div className='bg-gray-100 w-[106px] h-[106px]'>
            <img
              src={showcaseBack}
              className='overflow-hidden rounded-lg object-cover w-full h-full object-center'
              alt=''
            />
          </div>
        </div>
        <div className='w-full py-6 md:h-[609px] md:w-[560px] md:col-start-2 md:col-end-5 md:row-start-1'>
          <div className='overflow-hidden h-full bg-gray-100 rounded-xl'>
            <img
              src={showcaseFront}
              className='object-cover object-center overflow-hidden h-full w-full'
              alt=''
            />
          </div>
        </div>
        <div className='w-full py-10 flex mx-auto md:col-start-9 md:row-start-1 md:col-end-13 flex-col md:justify-center'>
          <Button
            className='button justify-center items-center md:h-0 md:py-5 md:w-[75%]'
            type='button'
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
            Tailored to a level of perfection synonymous with that of a Savile
            Row suit and with understated quality in the detail, Jetty has been
            influenced by timeless 1950s style. Providing a subtle nod to the
            past,
            <br />
            <br /> Jetty also provides a perfect solution for the way we work
            today. A comprehensive product family, Jetty features a variety of
            elegant chairs and sofas.
          </p>
        </div>
      </div>
    </section>
  );
}
