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
  return (
    <NavLink
      to={route}
      className={
        ((condition ? location.includes(condition) : location === route)
          ? ' text-gray-900 font-semibold'
          : ' hover:hover:font-medium')
        + ` flex items-center material-symbols-outlined my-2 py-1 px-2 rounded-md text-1xl `
        + ' justify-center'
      }
    >
      {/* {icon ? icon : location === '/home' ? ICONS.home.fill : ICONS.home.border} */}
      <span
        onMouseEnter={() => setIcons(icon_fill)}
        onMouseLeave={() => setIcons(icon_border)}
      > {label} {icons} </span>
    </NavLink>
  )
}

export default function Navigation() {
  const context = useContext(ShoppingCartContext)

  return (
    <nav className="flex justify-between items-center w-full text-sm font-light px-4 fixed z-10 top-0 bg-white">
      <ul className="flex items-center gap-2">
        <NavLink
          to='/'
          className={`font-semibold text-lg flex items-center material-symbols-outlined my-2 py-1 px-2 rounded-md`}
        >
          <span>Shopi</span>
        </NavLink>

        {linksNavBar.map((data) => <NavLinkIcons data={data} key={data.label} />)}
      </ul>
      <ul className="flex items-center gap-2">
        {linksAccount.map((data) => <NavLinkIcons data={data} key={data.label} />)}

        <NavLink
          to='/'
          className={`font-semibold text-base flex items-center material-symbols-outlined my-2 py-1 px-2 rounded-md`}
        >
          <span
            className="flex flex-col justify-center items-center font-extrabold"
          >
            <div className="flex items-center">
              {context.count != 0 ? <i>{ICONS.shopping.fill}</i> : <i>{ICONS.shopping.border}</i>}
              <i className={context.count != 0 ? '' : 'border-text'}>{context.count}</i>
            </div>
          </span>
        </NavLink>
      </ul>
    </nav>
  )
}
