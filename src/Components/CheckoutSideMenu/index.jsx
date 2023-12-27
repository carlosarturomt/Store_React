import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { ICONS } from '../../assets/icons'
import { totalPrice } from '../../Utils'
import OrderCard from '../OrderCard'
import './styles.css'

export default function CheckoutSideMenu() {
  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

  /* const plusProduct = (id) => {
    console.log(context.cartProducts)
  } */

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
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
              handleDelete={handleDelete}
            //plus={plusProduct}
            />
          )
        }
      </div>

      <div className='px-4'>
        <p className='flex justify-between items-center'>
          <span className='text-sm font-light'>Total:</span>
          {/* <span>${totalPrice(context.cartProducts)}</span> */}
          <p className='font-medium text-[#40147c] flex text-2xl'>
            ${totalPrice(context.cartProducts)}.
            <span className='text-xs flex flex-col justify-center pt-1 leading-[0.666rem]'>
              <span>00</span>
              <span className='uppercase font-light'>mxn</span>
            </span>
          </p>
        </p>
      </div>

    </aside>
  )
}
