import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { ICONS } from "../../assets/icons"

export default function Card(data) {
  const context = useContext(ShoppingCartContext)

  return (
    <div
      className='bg-white w-56 h-60 rounded-lg cursor-pointer'
      onClick={() => context.openProductDetail()}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-1'>{data.data.category.name}</span>
        <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title} />
        <div
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 cursor-pointer hover:bg-[#200a3e44] backdrop-blur-sm'
          onClick={() => context.setCount(context.count + 1)}
        >
          {ICONS.add.border}
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{data.data.title}</span>
        <span className='text-lg font-semibold'>${data.data.price}.00</span>
      </p>
    </div>
  )
}
