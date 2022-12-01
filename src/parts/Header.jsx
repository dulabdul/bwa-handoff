import React, { useState } from 'react';
import logoSVG from '../assets/images/design/logo.svg';
import hamburgerMenu from '../assets/images/design/menu-hamburger.svg';
import cartSVG from '../assets/images/design/cart.svg';
import Button from '../elements/Button';
// Hamburger

//End of Hamburger
export default function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <header className='absolute w-full z-50 top-0'>
        <div className='container mx-auto'>
          <div className='flex items-center justify-between relative py-5'>
            <div className='flex items-center px-4'>
              <img
                src={logoSVG}
                alt='LuxSpace Logo'
              />
            </div>
            <div className='flex items-center px-4 transition-all '>
              <Button
                type='button'
                id='hamburger'
                name='hamburger'
                onClick={toggleHamburger}
                className='absolute block right-4 md:hidden mr-10'>
                <img
                  src={hamburgerMenu}
                  alt='Hamburger Button'
                />
              </Button>
              <nav
                className={`absolute transition-all right-0 bg-white w-full lg:bg-transparent lg:block lg:w-full lg:static top-full ease-out duration-500 ${
                  hamburgerOpen ? 'block' : 'hidden'
                } ${hamburgerOpen ? 'h-100' : ''}`}
                id='navMenu'>
                <ul className='flex flex-col lg:flex-row items-center gap-y-10 mx-auto duration-300 ease-out'>
                  <li className='group '>
                    <a
                      href='a'
                      className='text-slate-900 text-center mx-4 py-1 flex text-base group-hover:text-white group-hover:underline'>
                      Showcase
                    </a>
                  </li>
                  <li className='group'>
                    <a
                      href='a'
                      className='text-slate-900 mx-4 py-1 flex text-base group-hover:text-white group-hover:underline'>
                      Catalog
                    </a>
                  </li>
                  <li className='group'>
                    <a
                      href='a'
                      className='text-slate-900 mx-4 py-1 flex text-base group-hover:text-white group-hover:underline'>
                      Delivery
                    </a>
                  </li>
                  <li className='group'>
                    <a
                      href='a'
                      className='text-slate-900 mx-4 py-1 flex text-base group-hover:text-white group-hover:underline'>
                      Rewards
                    </a>
                  </li>
                </ul>
              </nav>
              <a
                href='test'
                className='block'>
                <img
                  src={cartSVG}
                  alt=''
                />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
