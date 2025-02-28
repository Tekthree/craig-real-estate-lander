'use client';

import { Button } from '@relume_io/relume-ui';
import React from 'react';
import { RxChevronRight } from 'react-icons/rx';

export function Layout245() {
  return (
    <section
      id='relume'
      className='px-[5%] py-16 md:py-24 lg:py-28 bg-black text-white'>
      <div className='container'>
        <div className='flex flex-col items-start'>
          <div className='rb-12 mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20'>
            <div>
              <p className='mb-3 font-semibold md:mb-4 text-yellow-500'>
                Services
              </p>
              <h2 className='text-5xl font-bold md:text-7xl lg:text-8xl'>
                Comprehensive Real Estate Solutions for You
              </h2>
            </div>
            <div>
              <p className='md:text-md text-gray-300'>
                We offer a full range of real estate services tailored to meet
                your needs. Whether you are buying, selling, or seeking property
                valuations, our expert team is here to guide you. Trust us to
                provide market analysis that empowers your decisions.
              </p>
            </div>
          </div>
          <div className='grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12'>
            <div className='bg-gray-900 p-6 rounded-xl border border-gray-800 hover:shadow-lg transition-shadow duration-300'>
              <div className='rb-5 mb-5 md:mb-6'>
                <div className='size-12 bg-gray-800 flex items-center justify-center rounded-xl border border-gray-700'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z'
                      stroke='#D4AF37'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M9 22V12H15V22'
                      stroke='#D4AF37'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </div>
              <h3 className='mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl'>
                Buying Your Dream Home Made Easy, like super easy
              </h3>
              <p className='text-gray-300'>
                Our agents will help you find the perfect property.
              </p>
            </div>
            <div className='bg-gray-900 p-6 rounded-xl border border-gray-800 hover:shadow-lg transition-shadow duration-300'>
              <div className='rb-5 mb-5 md:mb-6'>
                <div className='size-12 bg-gray-800 flex items-center justify-center rounded-xl border border-gray-700'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M12 2L2 7V22H22V7L12 2Z'
                      stroke='#D4AF37'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z'
                      stroke='#D4AF37'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M12 15V18'
                      stroke='#D4AF37'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M12 9V6'
                      stroke='#D4AF37'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </div>
              <h3 className='mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl'>
                Expert Selling Strategies for Maximum Value
              </h3>
              <p className='text-gray-300'>
                We utilize proven techniques to sell your home quickly.
              </p>
            </div>
            <div className='bg-gray-900 p-6 rounded-xl border border-gray-800 hover:shadow-lg transition-shadow duration-300'>
              <div className='rb-5 mb-5 md:mb-6'>
                <div className='size-12 bg-gray-800 flex items-center justify-center rounded-xl border border-gray-700'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M18 20V10'
                      stroke='#D4AF37'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M12 20V4'
                      stroke='#D4AF37'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M6 20V14'
                      stroke='#D4AF37'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </div>
              <h3 className='mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl'>
                Accurate Property Valuations and Market Insights
              </h3>
              <p className='text-gray-300'>
                Get a detailed analysis to understand your property's worth.
              </p>
            </div>
          </div>
          <div className='mt-10 flex items-center gap-4 md:mt-14 lg:mt-16'>
            <Button
              variant='secondary'
              className='bg-yellow-500 text-black border-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-xl font-medium'>
              Learn More
            </Button>
            <Button
              iconRight={<RxChevronRight className='text-yellow-500' />}
              variant='link'
              size='link'
              className='text-yellow-500 hover:text-yellow-400 rounded-xl'>
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
