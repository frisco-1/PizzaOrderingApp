import React from 'react'
import Image from 'next/image'
import Right from '../icons/Right'

export default function Hero() {
  return (

    <section className=" mt-4">
      
      <div className='py-12'>

        <h1 className='text-4xl font-semibold'>
          Everything <br/> is better <br/> with a&nbsp;  
          <span className='text-red-500'>
             Pizza
          </span>
          
        </h1>

        <p className='my-6 text-gray-500 text-sm'>
          Pizza is the misisng piece that makes every day complete, a simple yet delicious joy in life.
        </p>

        <div className='text-sm flex gap-4'>
          <button
          className='bg-red-500 uppercase flex gap-2 text-white px-4 py-2 rounded-full  items-center'>
            Order now
            <Right/>
          </button>

          <button className='flex gap-2 py-2 text-gray-600'>
            Learn more
            <Right/>
          </button>
        </div>

      </div>

      
      <div className='relative'>
        <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
      </div>
      
    </section>
  )
}
