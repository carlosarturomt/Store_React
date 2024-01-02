import { ICONS } from '../../assets/icons'

export default function OrderCard(props) {
  const { id, title, imageUrl, price, handleDelete, plus, minus } = props
  let renderClose
  if (handleDelete) {
    renderClose = <div className='hover:bg-[#200a3e44] rounded-md flex justify-center items-center cursor-pointer backdrop-blur-sm' onClick={() => handleDelete(id)}>{ICONS.close.border}</div>
  }

  return (
    <div className='flex justify-between items-center w-full'>
      <div className='flex items-center gap-2'>
        <img className='w-16 h-16 rounded-lg object-cover' src={imageUrl} alt={title} />
        <p className='text-sm leading-4 font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <div>
          <p className='text-base font-medium'>${price}</p>
          {/* <span className='bg-[#200a3e44] rounded-md w-[16.66px] flex justify-center items-center h-[16.66px] cursor-pointer hover:bg-[#200a3e7d]' onClick={() => plus(id)}> {ICONS.add.border}</span> */}
        </div>
        {renderClose}
      </div>
    </div>
  )
}
