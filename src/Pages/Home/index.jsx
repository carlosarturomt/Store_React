import { useState, useEffect } from "react"
import { apiUrl } from "../../Api"
import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
import ProductDetail from "../../Components/ProductDetail"

export default function Home() {
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
        <div className="flex flex-col items-center justify-center md:grid gap-4 grid-cols-3 w-full max-w-screen-md">
          {
            items?.map((item => <Card key={item.id} data={item} />))
          }
        </div>
        <ProductDetail />
      </div>
    </Layout>
  )
}
