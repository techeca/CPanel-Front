import React, { useState } from 'react'
import { Navbar, Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import BotonNav from './BotonNav'
import useAuth from '../../hooks/useAuth'
import { userService } from '../../services'
import { useNavigate } from 'react-router-dom'
import useAlert from '../../hooks/useAlert'

export default function Navegacion({categorias}){
    const {isLogged, isLoading} = useAuth()
    const navigation = useNavigate()
    const { setMessage } = useAlert();
  //let localtion = useLocation(); //Si quiero dejar una categoría activa necesito saber en cual estoy
  //const [paginaActiva, setPaginaActiva] = useState(`${localtion.pathname}`)
  function logout(){
    userService.logout()
    setMessage('Bye, see you later :)')
    navigation('/Home', {replace: true});
  }

  return (
    <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href='/'>
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Cpanel
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">

              {isLogged ?
                <button onClick={logout} type="button" className="flex text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                  Log Out
                </button>
                :
                <button type="button" className="flex text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                <svg className="w-6 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>
                  <Link to='/register'>
                    Register
                  </Link>
                </button>
              }

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {categorias.map((cat, i) =>
            <BotonNav key={i} name={cat} href={`/${cat}`} />
          )}
        </Navbar.Collapse>

      </Navbar>
  )
}
