import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { ICONS } from '../../assets/icons'
import './styles.css'

export default function ProductDetail() {
  const context = useContext(ShoppingCartContext)

  return (
    <aside
      className={`${context.isProductDetailOpen ? 'flex ' : 'hidden'} product-detail flex flex-col right-0 border border-[#200a3e] bg-white rounded-lg  py-2 px-4`}
    >
      <div className='flex justify-between items-center'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div
          className='hover:bg-[#200a3e44] rounded-md flex justify-center items-center cursor-pointer backdrop-blur-sm'
          onClick={() => context.closeProductDetail()}
        >
          {ICONS.close.border}
        </div>
      </div>

      <div className='flex flex-col'>
        <figure>
          <img src={context.productToShow.images} alt={context.productToShow.title} className='rounded-lg w-full mt-3 mb-2' />
        </figure>
        <p className='font-semibold uppercase'>{context.productToShow.title}</p>
        <p className='text-3xl font-medium text-[#40147c] flex'>
          ${context.productToShow.price}.
          <span className='text-sm flex flex-col justify-center pt-1 leading-[0.666rem]'>
            <span>00</span>
            <span className='uppercase font-light'>mxn</span>
          </span>
        </p>
        <span className='text-xs mt-3'>{context.productToShow.description}.</span>

        <button
          className='mt-3 bg-[#40147c] hover:bg-[#200a3e] text-white rounded-lg py-1'
          onClick={() => context.setCount(context.count + 1)}
        >Add to Cart</button>
      </div>

    </aside>
  )
}
