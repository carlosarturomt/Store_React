import React from 'react'
import { ICONS } from '../../assets/icons'

export default function OrderCard(props) {
  const { title, imageUrl, price } = props

  return (
    <div className='flex justify-center items-center'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20 flex items-center'>
          <img className='w-full rounded-lg object-cover' src={imageUrl} alt={title} />
        </figure>
        <p className='text-sm leading-4 font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-base font-medium'>${price}</p>
        <div
          className='hover:bg-[#200a3e44] rounded-md flex justify-center items-center cursor-pointer backdrop-blur-sm'
        >
          {ICONS.close.border}
        </div>
      </div>
    </div>
  )
}
