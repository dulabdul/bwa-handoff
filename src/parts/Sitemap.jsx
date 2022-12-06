import React, { useState } from 'react';
import Button from '../components/Button';
import logo from '../assets/images/design/logo.svg';
function SitemapLink({ isActive, setActive, title, children }) {
  return (
    <div className='px-4 w-full mb-4 md:mb-0 accordion'>
      <h5 className='text-lg relative mb-2 font-semibold flex items-center'>
        {title}
        <Button
          onClick={() => setActive(isActive)}
          className={[
            'absolute block right-0 transform -translate-y-1/2 focus:outline-none transition duration-200 md:hidden ',
            isActive ? 'rotate-0' : 'rotate-180',
          ].join('')}>
          <svg
            width='20'
            height='9'
            viewBox='0 0 20 9'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0.197257 0.403676C0.526597 -0.0396672 1.15298 -0.132085 1.59632 0.197256L9.75 6.25427L17.9037 0.197256C18.347 -0.132085 18.9734 -0.0396672 19.3027 0.403676C19.6321 0.847019 19.5397 1.4734 19.0963 1.80274L10.3463 8.30274C9.99227 8.56575 9.50773 8.56575 9.15368 8.30274L0.403676 1.80274C-0.0396667 1.4734 -0.132084 0.847019 0.197257 0.403676Z'
              fill='black'
            />
          </svg>
        </Button>
      </h5>
      <ul
        className={[
          'md:h-auto md:visible md:opacity-100 overflow-hidden transtion duration-200 ',
          isActive ? 'h-0 invisible opacity-0' : 'opacity-100',
        ].join('')}>
        {children}
      </ul>
    </div>
  );
}
export default function Sitemap() {
  const [active, setActive] = useState(null);
  return (
    <section id='sitemap'>
      <div className='border-b border-gray-200 py-12 mt-8 px-4'>
        <div className='flex justify-center items-center mb-8 md:mb-16'>
          <img
            src={logo}
            alt='LuxSpace Logo'
          />
        </div>
        <div className='container md:px-20 mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-4 justify-center -mx-4'>
            <SitemapLink
              title='Overview'
              setActive={setActive}
              isActive={active === 1 ? null : 1}>
              <li>
                <Button
                  type='link'
                  className='py-1 block hover:underline'>
                  Shipping
                </Button>
              </li>
              <li>
                <Button
                  type='link'
                  className='py-1 block hover:underline'>
                  Refund
                </Button>
              </li>
              <li>
                <Button
                  type='link'
                  className='py-1 block hover:underline'>
                  Promotion
                </Button>
              </li>
            </SitemapLink>
            <SitemapLink
              title='Company'
              setActive={setActive}
              isActive={active === 2 ? null : 2}>
              <li>
                <Button
                  type='link'
                  className='py-1 block hover:underline'>
                  About
                </Button>
              </li>
              <li>
                <Button
                  type='link'
                  className='py-1 block hover:underline'>
                  Career
                </Button>
              </li>
              <li>
                <Button
                  type='link'
                  className='py-1 block hover:underline'>
                  Contact Us
                </Button>
              </li>
            </SitemapLink>
            <SitemapLink
              title='Explore'
              setActive={setActive}
              isActive={active === 3 ? null : 3}>
              <li>
                <Button
                  type='link'
                  className='py-1 block hover:underline'>
                  T&C
                </Button>
              </li>
              <li>
                <Button
                  type='link'
                  className='py-1 block hover:underline'>
                  Privacy Policy
                </Button>
              </li>
              <li>
                <Button
                  type='link'
                  className='py-1 block hover:underline'>
                  For Developer
                </Button>
              </li>
            </SitemapLink>
            <div className='w-full mb-4 md:mb-0 px-4'>
              <h5 className='font-semibold text-lg mb-2'>Special Letters</h5>
              <form action=''>
                <label className='relative w-full'>
                  <input
                    type='email'
                    placeholder='Type Your Email Address'
                    className='bg-gray-100 rounded-xl shadow-sm w-full py-3 px-5 focus:outline-none focus:ring-1 focus:ring-pink-200'
                  />
                  <Button
                    type='button'
                    className='bg-pink-200 p-3 rounded-xl absolute right-0'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M23.6177 0.411971C23.6163 0.410624 23.6152 0.409187 23.6138 0.407839C23.6124 0.406492 23.6109 0.405414 23.6095 0.404157C23.236 0.049307 22.7002 -0.0573008 22.2098 0.126411L0.833871 8.13353C0.268743 8.34518 -0.0623361 8.87521 0.0098048 9.4523C0.0821332 10.0294 0.53462 10.4694 1.13589 10.547L11.5833 11.8968C11.6028 11.8994 11.6185 11.9143 11.6212 11.9332L13.0301 21.9417C13.1112 22.5177 13.5704 22.9512 14.1729 23.0204C14.2279 23.0268 14.2824 23.0298 14.3364 23.0298C14.8735 23.0298 15.3486 22.7229 15.5495 22.231L23.9077 1.75274C24.0994 1.28302 23.9882 0.76983 23.6177 0.411971ZM1.30534 9.34475C1.2819 9.34169 1.27136 9.34039 1.26728 9.30788C1.26325 9.27537 1.27319 9.27159 1.29508 9.26347L21.2946 1.77187L11.9404 10.7333C11.8794 10.7163 1.30534 9.34475 1.30534 9.34475ZM14.37 21.7892C14.3614 21.8102 14.358 21.8198 14.3236 21.8158C14.2897 21.8119 14.2883 21.8017 14.2852 21.7794C14.2852 21.7794 12.8535 11.6495 12.8358 11.5911L22.19 2.62972L14.37 21.7892Z'
                        fill='white'
                      />
                    </svg>
                  </Button>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
