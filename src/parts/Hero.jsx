import React from 'react';
import heroImg from '../assets/images/content/hero-img.jpg';
import Button from '../elements/Button';
const Hero = () => {
  return (
    <section className='flex items-center hero'>
      <div className='w-full flex flex-col justify-center z-20 inset-0 absolute text-center min-h-[90vh] md:min-h-[auto] md:relative md:w-1/2 '>
        <h1 className='text-3xl font-semibold leading-normal text-black md:text-6xl md:leading-snug'>
          The Room <br /> You've Dreaming
        </h1>
        <h3 className='text-base font-normal text-black md:text-lg md:tracking-wider'>
          We provide classy furniture <br /> that makes the room feel
          comfortable
        </h3>
        <div>
          <Button
            type='link'
            href='/'
            hasShadow
            className='bg-pink-300 rounded-full px-6 py-3 inline-block mt-10 text-slate-900 font-semibold text-base hover:text-pink-300 hover:bg-black transition-all ease-in-out'>
            Explore Now
          </Button>
        </div>
      </div>
      <div className='w-full inset-0 md:w-1/2 md:relative'>
        <div className='relative min-h-[90vh] md:min-h-[auto]'>
          <div className='absolute inset-0 hover:bg-black opacity-20 z-10 transition-all duration-400'></div>

          <img
            src={heroImg}
            className='absolute w-full h-full inset-0 md:relative object-cover object-center'
            alt='Sofa with plants'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;