import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";

export default function SignIn() {
  const context = useContext(ShoppingCartContext)
  const [view, setView] = useState('user-info')

  //Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  const renderLogIn = () => {
    return (
      <div className="flex flex-col w-80">
        <p>
          <span className="font-light text-sm">Email: </span>
          <span className="">{parsedAccount?.email}</span>
        </p>
        <p>
          <span className="font-light text-sm">Password: </span>
          <span className="">{parsedAccount?.password}</span>
        </p>
        <Link to='/'>
          <button className="bg-[#200a3e] disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2" disabled={!hasUserAnAccount}>Log in</button>
        </Link>

        <div className="text-center">
          <a className="font-light text-xs underline underline-offset-4" href="/">Forget my password</a>
        </div>
        <button className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg py-3 mt-4 mb-2 hover:bg-[#200a3e42]" disabled={hasUserAnAccount}
          onClick={() => setView('create-user-info')}>Sign up</button>
      </div>
    )
  }

  const renderCreateUserInfo = () => {
    //TODO: Create render view
  }

  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogIn()

  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome</h1>
      {renderView()}
    </Layout>
  )
}
