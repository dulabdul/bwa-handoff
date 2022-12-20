import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Button from '../components/Button';
export default function ScrollToTop() {
  const [visible, setvisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setvisible(true);
    } else if (scrolled <= 300) {
      setvisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  window.addEventListener('scroll', toggleVisible);
  return (
    <Button
      onClick={scrollToTop}
      className='justify-center items-center bg-pink-400 w-12 h-12 text-center text-white fixed border-nonetext-white bottom-8 right-8 hover:animate-pulse transition-all cursor-pointer rounded-full mx-auto'
      type='button'
      style={{ display: visible ? 'flex' : 'none' }}>
      <FaArrowUp />
    </Button>
  );
}
