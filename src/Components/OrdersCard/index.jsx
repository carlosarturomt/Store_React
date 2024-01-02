import { ICONS } from '../../assets/icons'

export default function OrdersCard(props) {
  const { totalPrice, totalProducts } = props

  return (
    <div className='w-80 flex justify-center items-center border border-[#200a3e43] py-2 px-3 rounded-lg my-1'>
      <p className='w-full flex gap-1 items-center font-light justify-between'>
        <span className='flex flex-col justify-center text-sm'>
          <span className='flex items-center gap-1'>
            <i className='w-5 h-5 flex justify-center items-center'>{ICONS.date.border}</i>
            2/1/24
          </span>

          <span className='flex items-center gap-1'>
            <i className='w-5 h-5 flex justify-center items-center'>{ICONS.cart.border}</i>
            {totalProducts} products
          </span>
        </span>

        <p className='flex justify-between items-center'>
          <span className='font-medium text-[#40147c] flex text-2xl mr-1'>
            {totalPrice}.
            <span className='text-xs flex flex-col justify-center pt-1 leading-[0.666rem]'>
              <span>00</span>
              <span className='uppercase font-light'>mxn</span>
            </span>
          </span>
          <i className='w-5 flex items-center justify-center'>
            {ICONS.arrow.right}
          </i>
        </p>

      </p>
    </div>
  )
}
