import { useContext } from "react"
import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"
import CheckoutSideMenu from "../../Components/CheckoutSideMenu"

export default function Home() {
  const context = useContext(ShoppingCartContext)
  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems?.map((item => <Card key={item.id} data={item} />))
    } else return <>We don't have anything u.u</>
  }

  return (
    <Layout>
      <div className='flex items-center justify-center mb-1'>
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>

      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-[#200a3e43] w-80 p-4 mb-4 focus:outline-none"
        onChange={(e) => context.setSearchByTitle(e.target.value)}
      />

      <div className="max-w-screen-lg flex">
        <div
          className={`${context.isProductDetailOpen || context.isCheckoutSideMenuOpen ? 'grid-cols-3 2xl:grid-cols-4  mr-[242.0px] 2xl:mr-[0px]' : 'grid-cols-4 '} flex flex-col items-center justify-center md:grid gap-4 w-full max-w-screen-lg`}
        >
          {renderView()}
        </div>
        {
          context.isCheckoutSideMenuOpen ? <CheckoutSideMenu /> : <ProductDetail />
        }

      </div>
    </Layout>
  )
}
