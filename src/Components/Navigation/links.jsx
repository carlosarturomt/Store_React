import { ICONS } from "./icons";

const linksNavBar = [
  {
    label: 'All',
    route: '/',
    icon: ''
  },
  {
    label: 'Clothes',
    route: '/clothes',
    condition: '/clothes',
    icon: ''
  },
  {
    label: 'Electronics',
    route: '/electronics',
    icon: ''
  },
  {
    label: 'Furnitures',
    route: '/furnitures',
    icon: ''
  },
  {
    label: 'Toys',
    route: '/toys',
    icon: ''
  },
  {
    label: 'Others',
    route: '/others',
    icon: ''
  }
]

const linksAccount = [
  {
    label: 'artur@shopi.com',
    route: '/my-account',
    icon: ''
  },
  {
    label: 'My Orders',
    route: '/my-orders',
    icon: ''
  },
  {
    label: 'My Account',
    route: '/my-account',
    /*  icon_border: ICONS.account.border,
     icon_fill: ICONS.account.fill */
  },
  {
    label: 'Sign in',
    route: '/sign-in',
    icon: ''
  },
  {
    label: '',
    route: '/',
    icon_border: ICONS.home.border,
    icon_fill: ICONS.home.fill
  }
]

export { linksNavBar, linksAccount }