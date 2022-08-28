import React from 'react'
import { Sidebar } from 'flowbite-react'
import { Link } from 'react-router-dom'

export default function BotonSidebar({dataBoton, mostrar}){
  const IconoCat = dataBoton.icono
  return (
    <li>
       <Link to={dataBoton.path} className={`flex items-center ${mostrar ? 'p-2' : ''} text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}>
          <IconoCat className='w-6 h-6 transition duration-75'/>
          <p className={`ml-3 ${mostrar ? '' : 'hidden'}`}>{dataBoton.nombre}</p>
       </Link>
    </li>
  )
}
