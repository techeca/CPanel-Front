import React from 'react'
import { Sidebar } from 'flowbite-react'

export default function BotonSidebar({dataBoton, mostrar}){

  return (
    <Sidebar.Item href="#" icon={dataBoton.icono} style={{marginLeft:`${!mostrar ? '15px' : ''}`}}>
      <div style={{display:`${!mostrar ? 'none' : ''}`}}>
        {dataBoton.nombre}
      </div>
    </Sidebar.Item>
  )
}
