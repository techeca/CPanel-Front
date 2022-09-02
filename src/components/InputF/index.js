import React from 'react'
import PopoverPassword from '../../pages/Register/PopoverPassword'

export default function InputF({di, status, evento, vpass}){
  const succesClass = {label:'block mb-2 text-sm font-medium text-green-700 dark:text-green-500',
                       input:'bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400',
                       p:'mt-2 text-sm text-green-600 dark:text-green-500'}
  const errorClass = {label:'block mb-2 text-sm font-medium text-red-700 dark:text-red-500',
                       input:'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400',
                       p:'mt-2 text-sm text-red-600 dark:text-red-500'}
  const normalClass = {label:'block mb-2 text-sm font-medium text-gray-900 dark:text-white',
                       input:'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
                       p:''}

  function getClassInput(s){
    switch (s) {
      case 'succes':
        return succesClass
        break;
      case 'error':
        return errorClass
        break;
      default:
        return normalClass
    }
  }


  return(
    <div>
        {di.title ? <label htmlFor={di.name} className={getClassInput(status).label}>{di.title}</label> : <></>}
        <input autoComplete="off" onChange={evento ? evento : null} type={di.type} name={di.name} id={di.name} className={getClassInput(status).input} placeholder={di.placeholder ? di.placeholder : '' } required={Boolean(di.required)} data-popover-target={di.name === 'password' ? `popover-password` : ''} data-popper-placement="bottom"/>

        {di.name === 'password' ?
          <PopoverPassword vpass={vpass} />
          :
          <></>
        }
    </div>
  )
}
