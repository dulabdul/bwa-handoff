import React from 'react';
import Button from '../../components/Button';
import dhlSvg from '../../assets/images/design/dhl.svg';
import fedExSvg from '../../assets/images/design/fedEx.svg';
import midtrans from '../../assets/images/design/midtrans.png';
import bitcoin from '../../assets/images/design/bitcoin.png';
import mastercard from '../../assets/images/design/mastercard.png';
import usaExs from '../../assets/images/design/usaEx.png';

export default function ShippingDetails() {
  return (
    <div className='bg-gray-100 py-6 px-4 md:px-8 md:py-8 md:rounded-xl'>
      <div className='grid w-full grid-cols-1 justify-start items-center'>
        <h1 className='font-semibold text-2xl'>Shipping Details</h1>
      </div>
      <div className='grid w-full grid-cols-1 items-center my-4'>
        <form action=''>
          <label htmlFor='completedName'>Completed Name</label>
          <input
            type='text'
            name='completedName'
            className='w-full mt-2 px-4 py-3 rounded-xl placeholder:italic focus:outline-none focus:border focus:border-pink-300 focus:ring-1 focus:ring-pink-300'
            placeholder='your name...'
          />
          <label htmlFor='email'>Email Address</label>
          <input
            type='text'
            name='email'
            className='w-full mt-2 px-4 py-3 rounded-xl placeholder:italic focus:outline-none focus:border focus:border-pink-300 focus:ring-1 focus:ring-pink-300'
            placeholder='your email...'
          />
          <label htmlFor='Address'>Address</label>
          <input
            type='text'
            name='Address'
            className='w-full mt-2 px-4 py-3 rounded-xl placeholder:italic focus:outline-none focus:border focus:border-pink-300 focus:ring-1 focus:ring-pink-300'
            placeholder='your address...'
          />
          <label htmlFor='phoneNumber'>Phone Number</label>
          <input
            type='number'
            name='phoneNumber'
            className='w-full mt-2 px-4 py-3 rounded-xl placeholder:italic focus:outline-none focus:border focus:border-pink-300 focus:ring-1 focus:ring-pink-300'
            placeholder='your phone number...'
          />
          <div className='w-full h-full overflow-hidden my-4'>
            <label htmlFor='chooseCourier'>Choose Courier</label>
            <div className='grid grid-cols-2 items-center justfiy-center overflow-hidden my-3 gap-x-4'>
              <div className='bg-white p-5 mx-auto flex items-center rounded-xl shadow-sm w-[155px] h-[80px]'>
                <Button type='button'>
                  <img
                    src={dhlSvg}
                    className='object-cover w-full h-full object-center bg-no-repeat '
                    alt=''
                  />
                </Button>
              </div>
              <div className='bg-white p-5 mx-auto flex items-center rounded-xl shadow-sm w-[155px] h-[80px]'>
                <Button type='button'>
                  <img
                    src={fedExSvg}
                    className='object-cover w-full h-full object-center bg-no-repeat '
                    alt=''
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className='w-full h-full overflow-hidden my-4'>
            <label htmlFor='choosePayment'>Choose Payment</label>
            <div className='grid grid-cols-2 items-center justfiy-center overflow-hidden my-3 gap-y-2 gap-x-4'>
              <div className='bg-white p-5 mx-auto flex justify-center items-center rounded-xl shadow-sm w-[155px] h-[80px]'>
                <Button type='button'>
                  <img
                    src={mastercard}
                    className='object-cover w-full h-full object-center bg-no-repeat '
                    alt=''
                  />
                </Button>
              </div>
              <div className='bg-white p-5 mx-auto flex justify-center items-center rounded-xl shadow-sm w-[155px] h-[80px]'>
                <Button type='button'>
                  <img
                    src={bitcoin}
                    className='object-cover w-full h-full object-center bg-no-repeat '
                    alt=''
                  />
                </Button>
              </div>
              <div className='bg-white p-5 mx-auto flex justify-center items-center rounded-xl shadow-sm w-[155px] h-[80px]'>
                <Button type='button'>
                  <img
                    src={midtrans}
                    className='object-cover w-full h-full object-center bg-no-repeat '
                    alt=''
                  />
                </Button>
              </div>
              <div className='bg-white p-5 mx-auto flex justify-center items-center rounded-xl shadow-sm w-[155px] h-[80px]'>
                <Button type='button'>
                  <img
                    src={usaExs}
                    className='object-cover w-full h-full object-center bg-no-repeat '
                    alt=''
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className='w-full'>
            <Button
              type='button'
              hasShadow
              isFull
              className='button'>
              Checkout Now
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
