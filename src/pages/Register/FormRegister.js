import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputF from '../../components/InputF'
import BtnF from '../../components/BtnF'
import Loading from '../../components/Loading'
import CheckBoxF from '../../components/CheckBoxF'
import { userService } from '../../services'
import AlertF from '../../components/AlertF'
import useAlert from '../../hooks/useAlert'

export default function FormRegister({fr}){
  let navigate = useNavigate();
  const { showAlert, setMessage } = useAlert();
  const [loading, setLoading] = useState(true)

  const handleSubmit = async (e) => {
    e.preventDefault()

      return userService.register(e.target.email.value, e.target.password.value)
             .then((r) => {
               //console.log(r)
               //const returnUrl = //navigation('/')
               setMessage(`Succefully registered, Welcome ${e.target.email.value}!`)
               navigate('/', {replace: true});
             })
             .catch((err) => {
               //console.log(err)
               setMessage(`${err}: ${e.target.email.value}`)
             })
  }

  useEffect(() =>{
    if(userService.userValue){
      navigate('/', {replace: true});
    }else {
      setLoading(false)
    }
  }, [navigate])

  if(loading){return(<Loading h={10} w={10} />)}

  return(
    <>
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {fr.mainTitle}
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                {fr.inputs.map((ii, i) =>
                  <InputF key={i} di={ii} />
                )}
                <CheckBoxF cb={fr} mustCh={true} />
                <BtnF bt={fr.butonText} type={'submit'} />
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    {fr.accAlready}
                    <Link to='/Login'> {fr.loginText}</Link>
                </p>
            </form>
        </div>
    </div>
    </>
  )
}
