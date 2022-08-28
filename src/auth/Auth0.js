import React, { useState, useCallback, useEffect, useContext } from 'react'
import { useLocation, useNavigate  } from 'react-router-dom'
import { UserContextProvider } from '../context/UserContext'
import useAuth from '../hooks/useAuth'
import { userService } from '../services'

export default function Auth0({children}){
  let navigate = useNavigate()
  const [authorized, setAuthorized] = useState(false)
  let actualPath = useLocation().pathname

  const authCheck = useCallback((url) => {
  const publicPaths = ['/' ,'/login', '/register', '/home', '/about', '/contact']

   if(!Boolean(userService.userValue) && !Boolean(publicPaths.includes(url.toLowerCase()))) {
      //No logged & no está en ruta publica
      navigate('/login', {replace: true});
      setAuthorized(false)
      //setIsLogged(false)
    } else {
      setAuthorized(true)
      //setIsLogged(true)
   }

  }, [navigate])

  useEffect(() => {
      authCheck(actualPath);
  }, [authCheck, actualPath]);

  return(
      <>
        <UserContextProvider>
          {children}
        </UserContextProvider>
      </>

  )
}
