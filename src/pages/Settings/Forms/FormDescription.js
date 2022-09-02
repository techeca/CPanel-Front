import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  textContent: yup.string(),
  //dark: yup.string(),
  //light: yup.string(),
  fontStyle: yup.string(),
}).required()

export default function FormTitle({modalValues, section}){
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data)

  return(
    <form onSubmit={handleSubmit(onSubmit)} className="mb-6">

       <div className="mb-6">
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Description</label>
          <textarea {...register('textContent')} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={modalValues.textContent}></textarea>
       </div>
       <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Colors</label>
          <div className='flex flex-row'>
             <div className='border rounded-sm cursor-pointer dark:border-gray-500 border-gray-300 dark:hover:border-white' style={{backgroundColor:'black', width:'20px', height:'20px'}}>

             </div>
             <label className="ml-[10px] block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Dark mode</label>
          </div>

          <div className='flex flex-row'>
             <div className='border rounded-sm cursor-pointer dark:border-gray-500 border-gray-300 dark:hover:border-white' style={{backgroundColor:'white', width:'20px', height:'20px'}}>

             </div>
             <label className="ml-[10px] block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Light mode</label>
          </div>

       </div>

       <div className="mb-6">
         <div className='flex'>
           <label htmlFor="font" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Font style </label>
           <label className="block mb-2 ml-[12px] text-sm font-medium text-gray-900 dark:text-gray-400"> {modalValues.fontStyle} (actual)</label>
         </div>

          <div className='flex flex-row'>
             <select {...register('fontStyle')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
               <option>Arial</option>
               <option>Arial</option>
               <option>Arial</option>
               <option>Arial</option>
             </select>
          </div>
       </div>

       <div className="mb-6">
          <label htmlFor="font" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Preview</label>
          <div className='flex flex-row'>
             <input type="text" readOnly id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="This is a preview in Dark mode" />
          </div>
          <div className='flex flex-row'>
             <input type="text" readOnly id="title" className="bg-gray-50 mt-[6px] border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="This is a preview in Light mode" />
          </div>
       </div>
       <button type="submit" className="text-white justify-center flex items-center bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
         Save
        </button>
    </form>
  )
}
