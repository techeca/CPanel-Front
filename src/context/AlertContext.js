import React, {useState, useEffect, createContext} from 'react'
import { userService } from '../services'
import { useLocation, useNavigate  } from 'react-router-dom'

const Context = createContext({})

export function AlertContextProvider({children}){
  const [message, setMessage] = useState('')

  //Un poco a lo bruto pero funciona
  function showAlert(){
    let alertID = document.getElementById('alertF')
    alertID.classList.add('show')
    setTimeout(() => {
      alertID.className = alertID.className.replace('show', '')
    }, 4000)
    //Mucho mas bruto jaja GG wp
    setTimeout(() => {
      setMessage('')
    }, 5000)
  }

  useEffect(() => {
    if(message){
      showAlert()
    }
  }, [message])

  return <Context.Provider value={{
    message,
    setMessage,
    showAlert
  }}>
    {children}
  </Context.Provider>
}

export default Context;
