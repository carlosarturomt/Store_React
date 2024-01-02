import { HashRouter, useRoutes } from "react-router-dom"
import { ShoppingCartProvider } from "../../Context"
import Home from "../Home"
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder"
import MyOrders from "../MyOrders"
import Error404 from "../Error"
import Navigation from "../../Components/Navigation"
import CheckoutSideMenu from "../../Components/CheckoutSideMenu"

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/*', element: <Error404 /> }
  ])

  return routes
}

export default function App() {
  return (
    <ShoppingCartProvider>
      <HashRouter>
        <AppRoutes />
        <Navigation />
      </HashRouter>
    </ShoppingCartProvider>
  )
}

