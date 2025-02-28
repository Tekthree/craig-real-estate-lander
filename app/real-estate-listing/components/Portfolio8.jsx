'use client';

import { Button } from '@relume_io/relume-ui';
import React from 'react';
import { RxChevronRight } from 'react-icons/rx';

export function Portfolio8() {
  return (
    <section
      id='relume'
      className='px-[5%] py-16 md:py-24 lg:py-28 bg-gray-950 text-white'>
      <div className='container'>
        <div className='mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20'>
          <p className='mb-3 font-semibold md:mb-4 text-yellow-500'>
            Featured Listings
          </p>
          <h2 className='mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl'>
            Current Properties For Sale
          </h2>
          <p className='md:text-md text-gray-300'>
            Discover exceptional properties currently available on the market.
          </p>
        </div>
        <div className='grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:gap-x-12'>
          <article className='border border-gray-800 bg-gray-900 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300'>
            <div>
              <a href='https://www.zillow.com/homedetails/1927-Eaton-St-Lakewood-CO-80214/249094518_zpid/'>
                <img
                  src='https://photos.zillowstatic.com/fp/5399ab62a8dea96514f6717f517948cd-a_a.jpg'
                  className='w-full h-64 object-cover hover:opacity-90 transition-opacity duration-300'
                  alt='1927 Eaton St property'
                />
              </a>
            </div>
            <div className='px-5 py-6 sm:px-6'>
              <h3 className='mb-2 text-xl font-bold md:text-2xl'>
                <a
                  href='https://www.zillow.com/homedetails/1927-Eaton-St-Lakewood-CO-80214/249094518_zpid/'
                  className='hover:text-yellow-500 transition-colors duration-300'>
                  1927 Eaton St
                </a>
              </h3>
              <p className='mb-2 text-gray-400'>Lakewood, CO 80214</p>
              <p className='text-xl font-bold text-yellow-500 mb-2'>$650,000</p>
              <p className='text-gray-300'>
                Spacious property featuring 2 bedrooms and 4 bathrooms.
              </p>
              <ul className='mt-3 flex flex-wrap gap-2 md:mt-4'>
                <li className='flex'>
                  <span className='bg-gray-800 px-2 py-1 text-sm font-semibold text-gray-300 border border-gray-700 rounded-lg'>
                    2 Bed
                  </span>
                </li>
                <li className='flex'>
                  <span className='bg-gray-800 px-2 py-1 text-sm font-semibold text-gray-300 border border-gray-700'>
                    4 Bath
                  </span>
                </li>
                <li className='flex'>
                  <span className='bg-gray-800 px-2 py-1 text-sm font-semibold text-gray-300 border border-gray-700'>
                    Lakewood
                  </span>
                </li>
              </ul>
              <Button
                title='View property'
                variant='link'
                size='link'
                iconRight={<RxChevronRight className='text-yellow-500' />}
                className='mt-5 md:mt-6 text-yellow-500 hover:text-yellow-400'>
                <a href='https://www.zillow.com/homedetails/1927-Eaton-St-Lakewood-CO-80214/249094518_zpid/'>
                  View property
                </a>
              </Button>
            </div>
          </article>
          <article className='border border-gray-800 bg-gray-900 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300'>
            <div>
              <a href='https://www.zillow.com/homedetails/4432-Tennyson-St-UNIT-3-Denver-CO-80212/2083414835_zpid/'>
                <img
                  src='https://photos.zillowstatic.com/fp/ef4846da16e0c4d3ba0050ea0621e6d3-a_a.jpg'
                  className='w-full h-64 object-cover hover:opacity-90 transition-opacity duration-300'
                  alt='4432 Tennyson St property'
                />
              </a>
            </div>
            <div className='px-5 py-6 sm:px-6'>
              <h3 className='mb-2 text-xl font-bold md:text-2xl'>
                <a
                  href='https://www.zillow.com/homedetails/4432-Tennyson-St-UNIT-3-Denver-CO-80212/2083414835_zpid/'
                  className='hover:text-yellow-500 transition-colors duration-300'>
                  4432 Tennyson St UNIT 3
                </a>
              </h3>
              <p className='mb-2 text-gray-400'>Denver, CO 80212</p>
              <p className='text-xl font-bold text-yellow-500 mb-2'>$465,000</p>
              <p className='text-gray-300'>
                Cozy urban residence with 1 bedroom and 2 bathrooms.
              </p>
              <ul className='mt-3 flex flex-wrap gap-2 md:mt-4'>
                <li className='flex'>
                  <span className='bg-gray-800 px-2 py-1 text-sm font-semibold text-gray-300 border border-gray-700'>
                    1 Bed
                  </span>
                </li>
                <li className='flex'>
                  <span className='bg-gray-800 px-2 py-1 text-sm font-semibold text-gray-300 border border-gray-700'>
                    2 Bath
                  </span>
                </li>
                <li className='flex'>
                  <span className='bg-gray-800 px-2 py-1 text-sm font-semibold text-gray-300 border border-gray-700'>
                    Denver
                  </span>
                </li>
              </ul>
              <Button
                title='View property'
                variant='link'
                size='link'
                iconRight={<RxChevronRight className='text-yellow-500' />}
                className='mt-5 md:mt-6 text-yellow-500 hover:text-yellow-400'>
                <a href='https://www.zillow.com/homedetails/4432-Tennyson-St-UNIT-3-Denver-CO-80212/2083414835_zpid/'>
                  View property
                </a>
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
