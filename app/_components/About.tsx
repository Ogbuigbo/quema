import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <section className='py-24 md:px-10 px-6 xl:px-[150px] lg:px-[50px]'>
      <div className='mx-auto max-w-screen-xl flex flex-col lg:flex-row items-center justify-between gap-12'>
        
        {/* Text Section */}
        <div className='xl:max-w-[500px] space-y-6'>
          <h1 className='text-4xl font-bold text-gray-900'>
            About Us
          </h1>
          <h2 className='text-xl font-medium text-gray-700'>
            Business planning, Strategy and Execution. A problem-solving philosophy that leads to products people actually want to use.
          </h2>
          <p className='text-base text-gray-600 leading-relaxed'>
          Quema Consulting is an organizational development and HR business advisory firm that provides organizational solution for companies and institutions to ensure that their corporate concern are thriving through strategic planning. 
          </p>
        </div>

        {/* Image Section */}
        <div className='flex-shrink-0'>
          <Image 
            src='https://tinypic.host/images/2024/10/09/about.png' 
            alt='about-us' 
            width={500} 
            height={500} 
            className='lg:w-[400px]  xl:w-full'
          />
        </div>
        
      </div>
    </section>
  )
}

export default About;
