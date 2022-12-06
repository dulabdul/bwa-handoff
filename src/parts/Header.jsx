import React, { useState } from 'react';
import logoSVG from '../assets/images/design/logo.svg';
import hamburgerMenu from '../assets/images/design/menu-hamburger.svg';
import cartSVG from '../assets/images/design/cart.svg';
import Button from '../components/Button';
// Hamburger

//End of Hamburger
export default function Header({ pages }) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <header
        className={`w-full z-50 top-0 ${pages === 'Home' ? 'absolute' : ''}`}>
        <div className='container mx-auto'>
          <div className='flex items-center justify-between relative py-5'>
            <div className='flex items-center px-4'>
              <Button
                type='link'
                href='/'>
                <img
                  src={logoSVG}
                  alt='LuxSpace Logo'
                />
              </Button>
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
                className={`transition-all right-0 bg-white w-full lg:bg-transparent lg:block lg:w-full lg:static top-full ease-out duration-500 ${
                  hamburgerOpen ? 'block' : 'hidden'
                } ${hamburgerOpen ? 'h-100' : ''}`}
                id='navMenu'>
                <ul className='flex flex-col lg:flex-row items-center gap-y-10 mx-auto duration-300 ease-out'>
                  <li className='group '>
                    <a
                      href='a'
                      className={`text-slate-900 text-center mx-4 py-1 flex text-base group-hover:underline ${
                        pages === 'Home'
                          ? 'group-hover:text-white'
                          : 'group-hover:text-black'
                      }`}>
                      Showcase
                    </a>
                  </li>
                  <li className='group'>
                    <a
                      href='a'
                      className={`text-slate-900 text-center mx-4 py-1 flex text-base group-hover:underline ${
                        pages === 'Home'
                          ? 'group-hover:text-white'
                          : 'group-hover:text-black'
                      }`}>
                      Catalog
                    </a>
                  </li>
                  <li className='group'>
                    <a
                      href='a'
                      className={`text-slate-900 text-center mx-4 py-1 flex text-base group-hover:underline ${
                        pages === 'Home'
                          ? 'group-hover:text-white'
                          : 'group-hover:text-black'
                      }`}>
                      Delivery
                    </a>
                  </li>
                  <li className='group'>
                    <a
                      href='a'
                      className={`text-slate-900 text-center mx-4 py-1 flex text-base group-hover:underline ${
                        pages === 'Home'
                          ? 'group-hover:text-white'
                          : 'group-hover:text-black'
                      }`}>
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
