import React from 'react';
import Button from '../Button';
import PropTypes from 'prop-types';
export default function BreadCrumb({ list }) {
  console.log(list);
  return (
    <section className='bg-gray-100 py-8 px- w-full mx-auto'>
      <div className='container mx-auto px-4'>
        <ul className='breadcrumb flex items-center flex-row text-lg'>
          {list?.map?.((item, index) => {
            const arias =
              index === list?.length ? { 'aria-label': 'current-page' } : '';
            return (
              <li key={`key-${item.url}`}>
                <Button
                  type='link'
                  href={item.url}
                  {...arias}>
                  {item.name}
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
BreadCrumb.propTypes = {
  list: PropTypes.array.isRequired,
};
