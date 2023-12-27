import { ICONS } from '../../assets/icons'

export default function OrderCard(props) {
  const { id, title, imageUrl, price, handleDelete, plus, minus } = props

  return (
    <div className='flex justify-center items-center'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20 flex items-center'>
          <img className='w-full rounded-lg object-cover' src={imageUrl} alt={title} />
        </figure>
        <p className='text-sm leading-4 font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <div>
          <p className='text-base font-medium'>${price}</p>
          {/* <span className='bg-[#200a3e44] rounded-md w-[16.66px] flex justify-center items-center h-[16.66px] cursor-pointer hover:bg-[#200a3e7d]' onClick={() => plus(id)}> {ICONS.add.border}</span> */}
        </div>
        <div
          className='hover:bg-[#200a3e44] rounded-md flex justify-center items-center cursor-pointer backdrop-blur-sm'
          onClick={() => handleDelete(id)}
        >
          {ICONS.close.border}
        </div>
      </div>
    </div>
  )
}
