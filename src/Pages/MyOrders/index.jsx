import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import OrdersCard from '../../Components/OrdersCard'

export default function MyOrders() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className='mb-3'>
        <h1>My Orders</h1>
      </div>

      {
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts} />
          </Link>
        )
        )
      }
    </Layout>
  )
}
