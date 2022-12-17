import React, { useEffect } from 'react';

import Button from '../../components/Button';
import fetchData from '../../helpers/fetch';
import Currency from '../../helpers/format/Currency';
import useAsync from '../../helpers/hooks/useAsync';
function SkeletonLoading({ ratio = {} }) {
  const dummy = [
    {
      id: 1,
      ratio: {
        default: '1/9',
        md: '1/4',
      },
    },
    {
      id: 2,
      ratio: {
        default: '1/9',
        md: '2/2',
      },
    },
    {
      id: 3,
      ratio: {
        default: '1/9',
        md: '2/3',
      },
    },
    {
      id: 4,
      ratio: {
        default: '1/9',
        md: '1/4',
      },
    },
  ];
  return dummy.map((item, index) => {
    return (
      <div
        key={item.id}
        className={`group card-categories ${
          ratio.wrapper.md?.[item.ratio.md]
        }`}>
        <div className='bg-gray-300 w-full h-full rounded-lg'>
          <div className='absolute z-50 top-10 right-8'>
            <div className='w-24 h-3 bg-gray-400 mt-2 rounded-full'></div>
            <div className='w-36 h-3 bg-gray-400 mt-3 rounded-full'></div>
          </div>
        </div>
      </div>
    );
  });
}
export default function BrowserRoom({ exploreRef }) {
  const { data, run, status, error, isLoading } = useAsync();
  useEffect(() => {
    run(
      fetchData({
        url: '/api/categories/?page=1&limit=4',
      })
    );
  }, [run]);
  const ratioClassNames = {
    wrapper: {
      md: {
        '1/4': 'md:col-span-5 md:row-span-1',
        '2/2': 'md:col-span-3 md:row-span-2 md:h-[386px]',
        '2/3': 'md:col-span-4 md:row-span-2 md:h-[386px]',
      },
    },
  };
  return (
    <>
      <section
        ref={exploreRef}
        className=' bg-gray-100 px-5 py-12'
        id='browser-the-room'>
        <div className='container mx-auto items-center'>
          <div className='flex flex-start w-full'>
            <h1 className='font-semibold text-2xl text-black text-start leading-normal'>
              Browser The Room <br />
              That We Designed For You
            </h1>
          </div>

          <div className='grid items-center justify-center mt-8 grid-cols-1 grid-rows-1 md:grid-cols-12 gap-4'>
            {isLoading ? (
              <SkeletonLoading ratio={ratioClassNames} />
            ) : (
              data.data.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className={`group card-categories ${
                      ratioClassNames.wrapper.md?.[item.ratio.md]
                    }`}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        `/images/content/${item.imageUrl}`
                      }
                      alt={item.title}
                      className='card-row__img'
                    />
                    <div className='absolute z-50 top-10 right-8'>
                      <h2 className='font-semibold text-xl text-black'>
                        {item.title}
                      </h2>
                      <h3 className=''>
                        {Currency(item.products)} Item
                        {item.products > 1 ? 's' : ''}{' '}
                      </h3>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
}
