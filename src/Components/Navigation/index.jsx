import { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { linksNavBar, linksAccount } from "./links"
import { ShoppingCartContext } from "../../Context";
import { ICONS } from "../../assets/icons";

const NavLinkIcons = (props) => {
  const { data } = props
  const { route, condition, icon_border, icon_fill, label } = data
  const location = useLocation().pathname;
  const [icons, setIcons] = useState(icon_border)
  const context = useContext(ShoppingCartContext)

  return (
    <NavLink
      to={route}
      onClick={() => context.setSearchByCategory(label)}
      className={
        ((condition ? location.includes(condition) : location === route)
          ? ' text-gray-900 font-semibold'
          : ' hover:hover:font-medium')
        + ` flex items-center material-symbols-outlined my-2 py-1 px-2 rounded-md text-1xl `
        + ' justify-center'
      }
    >
      <span
        onMouseEnter={() => setIcons(icon_fill)}
        onMouseLeave={() => setIcons(icon_border)}
      > {label} {icons} </span>
    </NavLink>
  )
}

export default function Navigation() {
  const location = useLocation().pathname;
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

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true)
    localStorage.setItem('sign-out', stringifiedSignOut)
    context.setSignOut(true)
  }

  const renderView = () => {
    if (hasUserAnAccount && !isUserSignOut) {
      return (
        <>
          <p
            className={`flex items-center justify-center material-symbols-outlined my-2 py-1 px-2 rounded-md text-1xl`}
          >
            <span className="text-[#200a3e9e]"
            >{parsedAccount?.email}</span>
          </p>

          {linksAccount.map((data) => <NavLinkIcons data={data} key={data.label} />)}

          <NavLink
            to='/sign-in'
            className={` flex items-center justify-center material-symbols-outlined my-2 py-1 px-2 rounded-md text-1xl hover:hover:font-medium`}
            onClick={() => handleSignOut()}
          >
            <span
            >Sign out</span>
          </NavLink>
        </>
      )
    } else {
      return (
        <NavLink
          to='/sign-in'
          className={` flex items-center justify-center material-symbols-outlined my-2 py-1 px-2 rounded-md text-1xl hover:hover:font-medium`}
          onClick={() => handleSignOut()}
        >
          <span
          >Sign in</span>
        </NavLink>

      )
    }
  }

  return (
    <nav className="flex justify-between items-center w-full text-sm font-light px-4 fixed z-10 top-0 bg-white">
      <ul className="flex items-center gap-2">
        <NavLink
          to='/'
          className={`font-semibold text-lg flex items-center material-symbols-outlined my-2 py-1 px-2 rounded-md`}
        >
          <span>Shopi</span>
        </NavLink>

        <NavLink
          to='/'
          className={
            (('/' ? location.includes('/') : location === '/')
              ? ' text-gray-900 font-semibold'
              : ' hover:hover:font-medium')
            + ` flex items-center justify-center material-symbols-outlined my-2 py-1 px-2 rounded-md text-1xl `
          }
        >
          <span
          >All</span>
        </NavLink>

        {linksNavBar.map((data) => <NavLinkIcons data={data} key={data.label} />)}
      </ul>
      <ul className="flex items-center gap-2">
        {renderView()}
        <NavLink
          to='/'
          className={`font-semibold text-base flex items-center material-symbols-outlined my-2 py-1 px-2 rounded-md`}
        >
          <span
            className="flex flex-col justify-center items-center font-extrabold"
          >
            <div className="flex items-center">
              {context.cartProducts.length != 0 ? <i>{ICONS.shopping.fill}</i> : <i>{ICONS.shopping.border}</i>}
              <i className={context.cartProducts.length != 0 ? '' : 'border-text'}>{context.cartProducts.length}</i>
            </div>
          </span>
        </NavLink>
      </ul>
    </nav>
  )
}
