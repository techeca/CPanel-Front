import React, { useEffect, useState } from 'react'
import { Button } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
import FormRegister from './FormRegister'
import configData from '../../config/register.json'
import { userService } from '../../services'
import Loading from '../../components/Loading'

export default function Register(){
  const [loading, setLoading] = useState(false)
  let navigate = useNavigate();

  useEffect(() =>{
    if(userService.userValue){
      navigate('/', {replace: true});
    }else {
      setLoading(true)
    }
  }, [navigate])

  return(
    <>

    {loading ?
      <section className="w-full">
    
        <div className="flex flex-col items-center justify-center mt-20 lg:py-0">
          <FormRegister fr={configData} />
        </div>
      </section>
      :
      <Loading h={10} w={10} />
    }
    </>
  )
}
