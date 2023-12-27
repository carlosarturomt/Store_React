import { useState, useEffect, useContext } from "react"
import { apiUrl } from "../../Api"
import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"
import CheckoutSideMenu from "../../Components/CheckoutSideMenu"

export default function Home() {
  const context = useContext(ShoppingCartContext)
  const [items, setItems] = useState()

  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])

  return (
    <Layout>
      Home
      <div className="max-w-screen-lg flex">
        <div
          className={`${context.isProductDetailOpen || context.isCheckoutSideMenuOpen ? 'grid-cols-3 ' : 'grid-cols-4 '} flex flex-col items-center justify-center md:grid gap-4 w-full max-w-screen-lg`}
        >
          {
            items?.map((item => <Card key={item.id} data={item} />))
          }
        </div>
        {
          context.isCheckoutSideMenuOpen ? <CheckoutSideMenu /> : <ProductDetail />
        }

      </div>
    </Layout>
  )
}
