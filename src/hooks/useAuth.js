import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate  } from 'react-router-dom'
import Context from '../context/UserContext'

export default function useAuth(){
    const {isLogged, setIsLogged} = useContext(Context)
    const [isLoading, setIsLoading] = useState(false)

  return {isLogged: Boolean(isLogged), isLoading:isLoading, setIsLogged:setIsLogged}
}
