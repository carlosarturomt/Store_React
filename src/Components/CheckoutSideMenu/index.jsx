import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { ICONS } from '../../assets/icons'
import './styles.css'
import OrderCard from '../OrderCard'

export default function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cardProducts.filter(product => product.id != id)
  }

  return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ? 'flex ' : 'hidden'} checkout__side--menu flex flex-col right-0 border border-[#200a3e] bg-white rounded-lg  py-2`}
    >
      <div className='flex justify-between items-center px-4'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div
          className='hover:bg-[#200a3e44] rounded-md flex justify-center items-center cursor-pointer backdrop-blur-sm'
          onClick={() => context.closeCheckoutSideMenu()}
        >
          {ICONS.close.border}
        </div>
      </div>

      <div className='flex flex-col mt-3 overflow-y-scroll pl-3'>
        {
          context.cartProducts.map(product =>
            <OrderCard
              key={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          )
        }
      </div>

    </aside>
  )
}
