import React from 'react';
import Button from '../../components/Button';
import Currency from '../../helpers/format/Currency';

export default function Suggestion({ data }) {
  return (
    <section className='bg-gray-100'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 items-center overflow-x-auto'>
          <div className='w-full pt-12 pb-8'>
            <h1 className='font-semibold text-2xl capitalize leading-8'>
              Completed your room <br /> with we designed
            </h1>
          </div>
          <div className='w-full h-full pb-20 overflow-auto grid-flow-col grid gap-x-5 justify-start'>
            {data.map((item) => {
              return (
                <div
                  key={item.id}
                  className='shadow-sm relative bg-white rounded-3xl overflow-hidden w-[287px] h-[328px] px-4 py-8'>
                  <div className='mb-8'>
                    <img
                      src={item.imageUrl}
                      className='rounded-3xl shadow-sm object-cover bg-no-repeat object-center'
                      alt=''
                    />
                  </div>
                  <h5 className='font-semibold text-lg'>{item.title}</h5>
                  <p className=''>IDR {Currency(item.price)}</p>
                  <Button
                    type='link'
                    href={`/categories/${item.idc}/products/${item.id}`}
                    className='stretched-link cursor-pointer'>
                    {/* A JSX comment */}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
