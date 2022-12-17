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
                className={`transition-all right-0 bg-white w-full md:bg-transparent md:block md:w-full md:static top-full ease-out duration-500 ${
                  hamburgerOpen ? 'block' : 'hidden'
                } ${hamburgerOpen ? 'h-100' : ''}`}
                id='navMenu'>
                <ul className='flex flex-col md:flex-row items-center gap-y-10 mx-auto duration-300 ease-out'>
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
              <div>
                <div
                  className={`items-center transition-all justify-center absolute z-50 top-[9px] right-[3px] bg-pink-400 rounded-full w-7 h-7 text-center ${
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
