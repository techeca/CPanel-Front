import React, { useEffect, useState } from 'react'
import BtnF from '../../components/BtnF'
import { Link, useNavigate } from 'react-router-dom'
import { userService } from '../../services'
import useAlert from '../../hooks/useAlert'
import useAuth from '../../hooks/useAuth'

export default function FormLogin(){
    let navigate = useNavigate()
    const { setMessage } = useAlert()
    const { setIsLogged } = useAuth()
    const [loading, setLoading] = useState(true)

    const handleSubmit = async (e) => {
      e.preventDefault()
        return userService.login(e.target.email.value, e.target.password.value)
               .then((r) => {
                 //console.log(r)
                 //const returnUrl = //navigation('/')
                 setIsLogged(true)
                 setMessage(`Welcome again ${e.target.email.value}!`)
                 navigate('/', {replace: true});
               })
               .catch((err) => {
                 //Check si hay conexión con la API   //posiblemente será reemplazado con service worker o web worker o algo asi
                 if(err.toString() === 'TypeError: NetworkError when attempting to fetch resource.'){
                   //No hay conexión con la API
                   setMessage(`You can't login right now`)
                 }else {
                   setMessage(`${err}`)
                 }
               })
    }

    /*useEffect(() =>{
      if(userService.userValue){
        //navigate('/', {replace: true});
      }else {
        setLoading(false)
      }
    }, [navigate])*/

  return(
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                        </div>
                    </div>
                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                </div>
                <div style={{display:'flex', justifyContent:'center'}}>
                  <BtnF bt={'Sign up'} type={'submit'} />
                </div>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet? <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register</Link>
                </p>
            </form>
        </div>
    </div>
  )
}
