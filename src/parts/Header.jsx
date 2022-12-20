import React, { useState, useLayoutEffect, useRef } from 'react';
import logoSVG from '../assets/images/design/logo.svg';

import hamburgerMenu from '../assets/images/design/menu-hamburger.svg';
import { ReactComponent as CartSVG } from '../assets/images/design/cart.svg';
import Button from '../components/Button';
import { useGlobalContext } from '../helpers/hooks/useGlobalContext';
// Hamburger

//End of Hamburger
export default function Header({ pages }) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  const [isCartChanged, setCartChanged] = useState(false);
  const { state } = useGlobalContext();

  const prevCart = useRef(state?.cart || {});
  useLayoutEffect(() => {
    if (prevCart.current !== state.cart) {
      prevCart.current = state?.cart || {};
      setCartChanged(true);
      setTimeout(() => {
        setCartChanged(false);
      }, 1000);
    }
  }, [state.cart]);
  return (
    <>
      <header
        className={`w-full z-50 top-0 ${pages === 'Home' ? 'absolute' : ''}`}>
        <div className='container mx-auto'>
          <div className='flex items-center justify-between relative py-5'>
            <div className='px-4'>
              <Button
                type='link'
                href='/'>
                <img
                  src={logoSVG}
                  alt='LuxSpace Logo'
                />
              </Button>
            </div>
            <div className='px-4 flex items-center'>
              <Button
                type='button'
                id='hamburger'
                name='hamburger'
                onClick={toggleHamburger}
                className={`absolute block mt-[1%] md:mt-0 right-4 md:hidden mr-10 ${
                  hamburgerOpen ? 'hamburger-active' : ''
                }`}>
                <span className='hamburger-line transition-all duration-300 ease-in-out origin-top-left'></span>
                <span className='hamburger-line transition-all duration-300 ease-in-out'></span>
                <span className='hamburger-line transition-all duration-300 ease-in-out origin-bottom-left'></span>
              </Button>

              <nav
                className={`absolute transition-all px-2 py-4 right-0 bg-white w-full md:bg-transparent md:block md:w-full md:static top-full ease-out duration-500 ${
                  hamburgerOpen ? 'block' : 'hidden'
                }`}
                id='navMenu'>
                <ul className='block lg:flex gap-y-4'>
                  <li className='group'>
                    <a
                      href='/'
                      className={`text-slate-900 text-center mx-4 py-1 flex text-base group-hover:underline ${
                        pages === 'Home'
                          ? 'md:group-hover:text-white'
                          : 'group-hover:text-black'
                      }`}>
                      Showcase
                    </a>
                  </li>
                  <li className='group'>
                    <a
                      href='/'
                      className={`text-slate-900 text-center mx-4 py-1 flex text-base group-hover:underline ${
                        pages === 'Home'
                          ? 'md:group-hover:text-white'
                          : 'group-hover:text-black'
                      }`}>
                      Catalog
                    </a>
                  </li>
                  <li className='group'>
                    <a
                      href='/'
                      className={`text-slate-900 text-center mx-4 py-1 flex text-base group-hover:underline ${
                        pages === 'Home'
                          ? 'md:group-hover:text-white'
                          : 'group-hover:text-black'
                      }`}>
                      Delivery
                    </a>
                  </li>
                  <li className='group'>
                    <a
                      href='/'
                      className={`text-slate-900 text-center mx-4 py-1 flex text-base group-hover:underline ${
                        pages === 'Home'
                          ? 'md:group-hover:text-white'
                          : 'group-hover:text-black'
                      }`}>
                      Rewards
                    </a>
                  </li>

                  <li className='group'>
                    <input
                      type='checkbox'
                      id='toggle'
                      className='hidden'
                    />
                  </li>
                </ul>
              </nav>
              <div>
                <div
                  className={`items-center transition-all justify-center absolute z-50 top-2 md:top-[18px] right-[3px] bg-pink-400 rounded-full w-7 h-7 text-center ${
                    Object.keys(state.cart).length === 0 ? 'hidden' : 'flex '
                  } ${isCartChanged ? 'animate-bounce ' : ''}`}>
                  <span className='text-white text-sm'>
                    {Object.keys(state.cart).length}
                  </span>
                </div>
                <Button
                  type='link'
                  href='/cart'
                  className={`cart ${
                    isCartChanged ? 'animate-bounce block' : ''
                  }`}>
                  <CartSVG />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
