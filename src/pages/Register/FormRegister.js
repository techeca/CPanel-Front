import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputF from '../../components/InputF'
import BtnF from '../../components/BtnF'
import CheckBoxF from '../../components/CheckBoxF'
import { userService } from '../../services'
import useAlert from '../../hooks/useAlert'
import ModalTermsOfService from './ModalTermsOfService'

export default function FormRegister({fr}){
  let navigate = useNavigate();
  const { setMessage } = useAlert();
  const [emailUser, setEmailUser] = useState('')
  const [passwordUser, setPasswordUser] = useState('')
  const [repasswordUser, setRepasswordUser] = useState('')
  const [strp, setStrp] = useState(0)
  const [showTerm, setShowTerm] = useState(false)

  const formValidation = {email:{value:emailUser, onchange:emailValidation},
                          password:{value:passwordUser, onchange:passwordValidation},
                          [`confirm-password`]:{value:repasswordUser, onchange:confirmPasswordValidation}}

  const handleSubmit = async (e) => {
    e.preventDefault()
    //Validar que email y password sean correctos
    try {
      if(formValidation.email.value ==='succes' && formValidation.password.value ==='succes' && formValidation[`confirm-password`].value ==='succes'){
        return userService.register(e.target.email.value, e.target.password.value)
        .then((r) => {
              setMessage(`Succefully registered, Welcome ${e.target.email.value}!`)
              navigate('/', {replace: true});
            })
        .catch((err) => {
              setMessage(`${err}: ${e.target.email.value}`)
            })
      }else {
        setMessage(`Please fill all inputs :p`)
      }

    } catch (e) {
      console.log(e)
    }
  }

  function emailValidation(e){
    //Correct format email??
    //aqui manda error de \ innecesario, probar
    //anterior /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
        setEmailUser('succes')
      }else {
        setEmailUser('error')
      }
  }

  function passwordValidation(e){
    const popoverPass = document.getElementById('popover-password')
    const passwordValid = validatePassword(e.target.value)
    //length < 8 ???
    if(e.target.value.length < 8 && passwordValid.total < 4){
      popoverPass.classList.remove('z-10')
      popoverPass.classList.remove('invisible')
      popoverPass.style.opacity = 1
      setPasswordUser('error')
      setStrp(passwordValid)
    }else {
      popoverPass.classList.add('z-10')
      popoverPass.classList.add('invisible')
      popoverPass.style.opacity = 0
      setPasswordUser('succes')
      setStrp(passwordValid)
    }
  }

  function confirmPasswordValidation(e){
    //Equals??
    const passwordInput = document.getElementById('password')

    if(e.target.value !== passwordInput.value){
      setRepasswordUser('error')
    } else {
      setRepasswordUser('succes')
    }
  }

  function validatePassword(pass){
    let hn, hll, hlu = false;
    let strPoints = 0;
    let checkNumbers = pass.replace(/[a-zA-Z]/g, '')
    let checkLowers = pass.replace(/[0-9A-Z]/g, '')
    let checkUppers = pass.replace(/[a-z0-9]/g, '')
    //check numero
    if(/^[0-9]+$/.test(checkNumbers)){
      hn = true
      strPoints = strPoints + 1
    }
    if(/^[a-z]+$/.test(checkLowers)){
      hll = true;
      strPoints = strPoints + 1
    }
    if(/^[A-Z]+$/.test(checkUppers)){
      hlu = true;
      strPoints = strPoints + 1
    }

    if(pass.length > 7){
      strPoints = strPoints + 1
    }

    return {hn:hn, hll:hll, hlu:hlu, total:strPoints}
  }

  function showModal(){
    setShowTerm(!showTerm)
  }

  return(  <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">

              <ModalTermsOfService show={showTerm} />

              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      {fr.mainTitle}
                  </h1>
                  <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                      {fr.inputs.map((ii, i) =>
                        <InputF evento={formValidation[`${ii.name}`].onchange} key={i} di={ii} status={formValidation[`${ii.name}`].value} vpass={ii.name === 'password' ? strp : ''} />
                      )}
                      <CheckBoxF cb={fr} mustCh={true} tac={showModal} />
                      <BtnF bt={fr.butonText} type={'submit'} />
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                          {fr.accAlready}
                          <Link to='/Login'> {fr.loginText}</Link>
                      </p>
                  </form>
              </div>
           </div>
        )
}
