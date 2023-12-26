import { useState, useEffect } from "react"
import { apiUrl } from "../../Api"
import Card from "../../Components/Card/inex"
import Layout from "../../Components/Layout"

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
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          items?.map((item => <Card key={item.id} data={item} />))
        }
      </div>
    </Layout>
  )
}
