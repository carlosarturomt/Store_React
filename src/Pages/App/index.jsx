import { HashRouter, useRoutes } from "react-router-dom"
import { ShoppingCartProvider } from "../../Context"
import Home from "../Home"
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder"
import MyOrders from "../MyOrders"
import Error404 from "../Error"
import Navigation from "../../Components/Navigation"

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/*', element: <Error404 /> }
  ])

  return routes
}

export default function App() {
  return (
    <ShoppingCartProvider>
      <HashRouter>
        <Navigation />
        <AppRoutes />
      </HashRouter>
    </ShoppingCartProvider>
  )
}

