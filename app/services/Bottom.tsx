import React from 'react';
import Image from 'next/image';
import { BOTTOM } from '../utils/data';

function Bottom() {
  return (
    <section className='xl:px-[150px] lg:px-10 px-8 py-20 '>
      {/* Top Heading Section */}
      <div className='flex flex-col justify-center items-center px-6 w-full'>
        <h1 className='text-4xl font-extrabold text-gray-900 mt-10 flex flex-col gap-2 justify-center items-center text-center'>
          Simpler. Smarter. Faster.
          <hr className='w-[100px] bg-[#4a90e2] h-[3px] mt-4' />
        </h1>
        <p className='mt-6 w-full lg:w-[600px] text-center text-gray-600 leading-relaxed'>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
        </p>
      </div>

      {/* Content Section */}
      <div className='mt-16 flex flex-col lg:flex-row  items-center lg:items-start xl:space-y-10 gap-16'>
        <Image
          src='https://tinypic.host/images/2024/10/10/s.jpg'
          width={500}
          height={500}
          alt='computer'
          className='rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 xl:w-[500px] lg:w-[400px] w-full'
        />

        <div className='flex flex-col space-y-10 md:px-20 lg:px-0'>
          {BOTTOM.map((item, index) => (
            <div key={index} className='flex space-x-4 items-start'>
              <div className='bg-[#4a90e2] text-white p-3 rounded-full shadow-md'>
                {item.icons}
              </div>
              <div className='flex flex-col'>
                <h1 className='text-xl font-semibold text-gray-900'>
                  {item.title}
                </h1>
                <p className='text-gray-600 mt-2 lg:max-w-[400px]'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Bottom;
