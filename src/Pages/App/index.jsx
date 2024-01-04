import { HashRouter, Navigate, useRoutes } from "react-router-dom"
import { ShoppingCartContext, ShoppingCartProvider } from "../../Context"
import Home from "../Home"
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder"
import MyOrders from "../MyOrders"
import Error404 from "../Error"
import Navigation from "../../Components/Navigation"
import SignIn from "../SignIn"
import { useContext } from "react"

const AppRoutes = () => {
  const context = useContext(ShoppingCartContext)

  //Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
  // Sign Out
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)
  const isUserSignOut = context.signOut || parsedSignOut

  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/electronics', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/furnitures', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/toys', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: '/others', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
    { path: 'my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
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

