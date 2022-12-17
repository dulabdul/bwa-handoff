import React from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import fetchData from '../../helpers/fetch';
import { useGlobalContext } from '../../helpers/hooks/useGlobalContext';
import useForm from '../../helpers/hooks/useForm';

export default function ShippingDetails({ data, isLoading }) {
  const navigate = useNavigate();
  const { state, dispatch } = useGlobalContext();
  const { state: payload, fnUpdateState } = useForm({
    completeName: '',
    emailAddress: '',
    address: '',
    phoneNumber: '',
    courier: '',
    payment: '',
  });
  async function fnSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetchData({
        url: '/api/checkout',
        method: 'POST',
        body: JSON.stringify({
          ...payload,
          cart: Object.keys(state.cart).map((key) => state.cart[key]),
        }),
      });
      if (res) {
        navigate('/success');
        dispatch({
          type: 'RESET_CART',
        });
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  const isButtonDisabled =
    Object.keys(payload).filter((key) => {
      return payload[key] !== '';
    }).length === Object.keys(payload).length &&
    Object.keys(state.cart).length !== 0;

  return (
    <div className='bg-gray-100 py-6 px-4 md:px-8 md:py-8 md:rounded-xl'>
      <div className='grid w-full grid-cols-1 justify-start items-center'>
        <h1 className='font-semibold text-2xl'>Shipping Details</h1>
      </div>
      <div className='grid w-full grid-cols-1 items-center my-4'>
        <form onSubmit={fnSubmit}>
          <label
            htmlFor='completeName'
            className='after:content-["*"] after:ml-0.5 after:text-red-500'>
            Completed Name
          </label>
          <input
            onChange={fnUpdateState}
            value={payload.completeName}
            required
            type='text'
            name='completeName'
            className='w-full mt-2 px-4 py-3 rounded-xl placeholder:italic focus:outline-none focus:border focus:border-pink-300 focus:ring-1 focus:ring-pink-300'
            placeholder='your name...'
          />
          <label
            className='after:content-["*"] after:ml-0.5 after:text-red-500'
            htmlFor='emailAddress'>
            Email Address
          </label>
          <input
            value={payload.emailAddress}
            onChange={fnUpdateState}
            type='email'
            required
            name='emailAddress'
            className='peer w-full mt-2 px-4 py-3 rounded-xl placeholder:italic focus:outline-none focus:border focus:border-pink-300 focus:ring-1 focus:ring-pink-300'
            placeholder='your email...'
          />
          <span className='block mt-2 invisible peer-invalid:visible text-pink-600 text-sm'>
            Please provide a valid email address.
          </span>
          <label
            className='after:content-["*"] after:ml-0.5 after:text-red-500'
            htmlFor='address'>
            Address
          </label>
          <input
            value={payload.address}
            onChange={fnUpdateState}
            type='text'
            required
            name='address'
            className='w-full mt-2 px-4 py-3 rounded-xl placeholder:italic focus:outline-none focus:border focus:border-pink-300 focus:ring-1 focus:ring-pink-300'
            placeholder='your address...'
          />
          <label
            className='after:content-["*"] after:ml-0.5 after:text-red-500'
            htmlFor='phoneNumber'>
            Phone Number
          </label>
          <input
            value={payload.phoneNumber}
            onChange={fnUpdateState}
            type='number'
            required
            name='phoneNumber'
            className='w-full mt-2 px-4 py-3 rounded-xl placeholder:italic focus:outline-none focus:border focus:border-pink-300 focus:ring-1 focus:ring-pink-300'
            placeholder='your phone number...'
          />
          <div className='w-full h-full overflow-hidden my-4'>
            <label
              className='after:content-["*"] after:ml-0.5 after:text-red-500'
              htmlFor='courier'>
              Choose Courier
            </label>
            <div className='grid grid-cols-2 items-center justfiy-center overflow-hidden my-3 gap-x-4'>
              {isLoading
                ? Array(2)
                    .fill()
                    .map((_, index) => {
                      return (
                        <div
                          key={index}
                          className='bg-gray-300 p-5 mx-auto flex items-center rounded-xl shadow-sm w-[155px] h-[80px]'>
                          <div className='w-full h-full animate-pulse'></div>
                        </div>
                      );
                    })
                : data?.couriers?.map?.((item) => {
                    return (
                      <div
                        key={item.id}
                        className='mx-auto w-[155px] h-[80px]'>
                        <button
                          type='button'
                          onClick={() =>
                            fnUpdateState({
                              target: {
                                name: 'courier',
                                value: item.id,
                              },
                            })
                          }
                          className={`border px-2 py-1 flex justify-center focus:outline-none items-center rounded-xl shadow-sm bg-white w-full h-full ${
                            payload.courier === item.id
                              ? 'border-pink-400'
                              : 'border-gray-200'
                          }`}>
                          <img
                            src={item.imgUrl}
                            className='object-contain h-full object-center bg-no-repeat '
                            alt={item.name}
                          />
                        </button>
                      </div>
                    );
                  })}
            </div>
          </div>
          <div className='w-full h-full overflow-hidden my-4'>
            <label
              className='after:content-["*"] after:ml-0.5 after:text-red-500'
              htmlFor='choosePayment'>
              Choose Payment
            </label>
            <div className='grid grid-cols-2 items-center justfiy-center overflow-hidden my-3 gap-y-2 gap-x-4'>
              {isLoading
                ? Array(4)
                    .fill()
                    .map((_, index) => {
                      return (
                        <div
                          key={index}
                          className='bg-gray-300 p-5 mx-auto flex items-center rounded-xl shadow-sm w-[155px] h-[80px]'>
                          <div className='w-full h-full animate-pulse'></div>
                        </div>
                      );
                    })
                : data?.payments?.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className='mx-auto w-[155px] h-[80px]'>
                        <button
                          type='button'
                          onClick={() =>
                            fnUpdateState({
                              target: {
                                name: 'payment',
                                value: item.id,
                              },
                            })
                          }
                          className={`border px-2 py-1 flex justify-center focus:outline-none items-center rounded-xl shadow-sm bg-white w-full h-full ${
                            payload.payment === item.id
                              ? 'border-pink-400'
                              : 'border-gray-200'
                          }`}>
                          <img
                            src={item.imgUrl}
                            className='object-contain h-full object-center bg-no-repeat '
                            alt={item.name}
                          />
                        </button>
                      </div>
                    );
                  })}
            </div>
          </div>
          <div className='w-full'>
            <button
              type='submit'
              disabled={!isButtonDisabled}
              className={`${
                isButtonDisabled ? 'button w-full' : 'button-disabled w-full'
              }`}>
              Checkout Now
            </button>
            <span
              className={`text-red-500 mt-2 transitio-all duration-500 ${
                isButtonDisabled ? 'hidden' : 'block'
              }`}>
              Please fill all fields input
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
