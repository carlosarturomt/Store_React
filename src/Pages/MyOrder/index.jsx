import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";
import { ICONS } from "../../assets/icons";

export default function MyOrder() {
  const context = useContext(ShoppingCartContext)
  let location = useLocation();
  let index = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
  //console.log(index);
  if (index === 'last') index = context.order?.length - 1

  return (
    <Layout>
      <div className='flex items-center justify-between w-80 mb-4'>
        <Link to='/my-orders' className='w-[25px] flex items-center justify-center'>
          {ICONS.arrow.left}
        </Link>
        <h1>My Order</h1>
      </div>

      <div className='w-80 flex flex-col items-start gap-2'>
        {
          context.order?.[index]?.products.map(product =>
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          )
        }
      </div>
    </Layout>
  )
}
