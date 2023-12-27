import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { ICONS } from "../../assets/icons"

export default function Card(data) {
  const context = useContext(ShoppingCartContext)

  const showProduct = (productDetail) => {
    context.openProductDetail()
    context.closeCheckoutSideMenu()
    context.setProductToShow(productDetail)
  }

  const addProductsToCart = (e, productData) => {
    e.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productData])
    context.openCheckoutSideMenu()
    context.closeProductDetail()
  }

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

    if (isInCart) {
      return (
        <div
          className='absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 cursor-pointer bg-[#200a3e] backdrop-blur-sm p-[2px]'
        >
          {ICONS.check.border}
        </div>
      )
    } else {
      return (
        <div
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 cursor-pointer hover:bg-[#200a3e44] backdrop-blur-sm'
          onClick={(e) => addProductsToCart(e, data.data)}
        >
          {ICONS.add.border}
        </div>
      )
    }
  }

  return (
    <div
      className='bg-white w-56 h-60 rounded-lg cursor-pointer'
      onClick={() => showProduct(data.data)}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-1'>{data.data.category.name}</span>
        <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title} />
        {renderIcon(data.data.id)}
      </figure>
      <p className='flex justify-between text-sm '>
        <span className='font-light'>{data.data.title}</span>
        <span className='font-semibold'>${data.data.price}.00</span>
      </p>
    </div>
  )
}
