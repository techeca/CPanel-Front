import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import FormLogin from './FormLogin'
import { userService } from '../../services'

export default function Login(){
  let navigate = useNavigate()

  useEffect(() =>{
    if(userService.userValue){
      navigate('/', {replace: true});
    }else {
      //setLoading(false)
    }
  }, [navigate])

  return(
    <section className="w-full">
      <div className="flex flex-col items-center justify-center mt-20 lg:py-0">
        <FormLogin />
      </div>
    </section>
  )
}
