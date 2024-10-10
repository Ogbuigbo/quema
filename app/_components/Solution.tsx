import React from 'react'
import { ITEMS } from '../utils/data'

function Solution() {
  return (
    <div className='px-6 md:px-10 xl:px-[150px] lg:px-[50px] bg-[#f8f9fa] pt-16 pb-20'>
      {/* Title Section */}
      <div className='flex flex-col items-center justify-center gap-6'>
        <h1 className='text-4xl font-bold text-gray-900 text-center flex flex-col justify-center items-center'>
          Meet Our Solution For You
          <hr className='w-[100px] bg-slate-500 p-[1px] mt-2' />
        </h1>
        <p className='lg:w-[600px] text-center text-gray-700'>
          Discover the best tailored solutions for your business needs, designed to maximize efficiency and drive growth.
        </p>
      </div>

      {/* Solution Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 xl:gap-10 gap-6'>
        {ITEMS.map((item, index) => (
          <div 
            key={index} 
            className='flex flex-col items-center justify-center gap-4 bg-white py-12 px-6 text-center rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2'
          >
            <span className='text-[40px] text-[#762b26]'>{item.icons}</span>
            <h1 className='text-xl font-semibold text-gray-900'>{item.title}</h1>
            <p className='text-gray-600'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Solution
