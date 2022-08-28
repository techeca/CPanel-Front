import React, {useState, useEffect, createContext} from 'react'
import { userService } from '../services'
import { useLocation, useNavigate  } from 'react-router-dom'

const Context = createContext({})

export function UserContextProvider({children}){
  const [isLogged, setIsLogged] = useState(false)
  const userData = userService.userValue

  useEffect(() => {

    //console.log(userService.userValue)
    if(userService.userValue){
      setIsLogged(true)
    }else {
      setIsLogged(false)
    }
    //console.log(!userService.userValue)
    //if(userService.userValue){
      //setIsLogged(true)
    //}
  }, [userData])

  //console.log(isLogged)

  return <Context.Provider value={{
    isLogged,
    setIsLogged
  }}>
    {children}
  </Context.Provider>
}

export default Context;
