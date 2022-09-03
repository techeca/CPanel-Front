import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  //textContent: yup.string(),
  //link: yup.string(),
  iconName: yup.string(),
}).required()

export default function FormTitle({modalValues, section}){
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data)

  return(
    <form onSubmit={handleSubmit(onSubmit)} className="mb-6">
       <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">URL</label>
          <input type="text" {...register('iconName')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={modalValues.iconName} />
       </div>
       <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">New URL</label>
          <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New URL" />
       </div>


       <div className="mb-6">
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Preview <span className='text-red-700'>actual</span></label>
          <div className="flex justify-center items-center w-full">
               <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full h-12 bg-gray-50 rounded-sm border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                 {/*Aquí debería ir la preview del icono*/}
               </label>
           </div>
       </div>

       <div className="flex mb-4 -space-x-4">
       </div>
       <input type="submit" value='Save' className="text-white justify-center flex items-center bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"/>
    </form>
  )
}
