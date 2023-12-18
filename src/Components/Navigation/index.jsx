import { NavLink, useLocation } from "react-router-dom";
import { linksNavBar, linksAccount } from "./links"
import { ICONS } from "./icons";
import { useState } from "react";

const NavLinkIcons = (props) => {
  const { data } = props
  const { route, condition, symbol, label } = data
  const location = useLocation().pathname;

  const [icon, setIcon] = useState()

  return (
    <NavLink
      to={route}
      className={
        ((condition ? location.includes(condition) : location === route)
          ? 'bg-[#231397] text-gray-50 '
          : 'bg-[#f1f3f6] hover:bg-[#231397] hover:text-gray-50 animate-fadeIn--bg-blue ')
        + ` flex items-center material-symbols-outlined my-2 py-1 px-2 rounded-md text-1xl `
        + ' justify-center'
      }
    >
      {/* {icon ? icon : location === '/home' ? ICONS.home.fill : ICONS.home.border} */}
      <span className="text-base pl-2 uppercase"
        onMouseEnter={() => setIcon(ICONS.home.fill)}
        onMouseLeave={() => setIcon()}>
        {label}
        {symbol}
      </span>
    </NavLink>
  )
}

export default function Navigation() {
  return (
    <nav>
      <ul>
        {linksNavBar.map((data) => <NavLinkIcons data={data} key={data.label} />)}
      </ul>
      <ul>
        {linksAccount.map((data) => <NavLinkIcons data={data} key={data.label} />)}
      </ul>
    </nav>
  )
}
