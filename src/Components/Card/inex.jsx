import React from 'react'

export default function Card() {
  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-1'>Electronics</span>
        <img className='w-full h-full object-cover rounded-lg' src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671097' alt='image' />
        <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2'>+</div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>Headphone</span>
        <span className='text-lg font-semibold'>$999.99</span>
      </p>
    </div>
  )
}
