import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { ICONS } from '../../assets/icons'
import './styles.css'

export default function ProductDetail() {
  const context = useContext(ShoppingCartContext)

  return (
    <aside
      className={`${context.isProductDetailOpen ? 'flex ' : 'hidden'} product-detail flex flex-col right-0 border border-[#200a3e] bg-white rounded-lg`}
    >
      <div className='flex justify-between items-center py-2 px-4'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div
          className='hover:bg-[#200a3e44] rounded-lg flex justify-center items-center cursor-pointer backdrop-blur-sm'
          onClick={() => context.closeProductDetail()}
        >
          {ICONS.close.border}
        </div>
      </div>
    </aside>
  )
}
