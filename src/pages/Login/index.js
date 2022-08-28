import React from 'react'
import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import FormLogin from './FormLogin'

export default function Login(){

  return(
    <section className="w-full">
      <div className="flex flex-col items-center justify-center mt-20 lg:py-0">
        <FormLogin />
      </div>
    </section>
  )
}
