import React from 'react'

export default function Banner({sectionEdit, newsletterValues, showModal}){

  return(
    <div className="flex flex-row bg-white dark:bg-gray-800 items-center pb-10 px-5 justify-center w-full">
    <div className='flex flex-col w-full justify-center items-center'>

    <div className='flex flex-row justify-end items-end place-self-end'>
      <button type="button" disabled className={`mt-[15px] cursor-not-allowed text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700   focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>
        Edit
      </button>
      {/*<button type="button" onClick={() => edit(teamValues.section)} className={`mt-[15px] text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>
        Save
      </button>*/}
    </div>

      <div role="status" className="lg:w-4/5 md:w-full items-center justify-center sm:w-full space-y-8 animate-pulse sm:space-y-0 sm:space-x-8 sm:flex sm:items-center mt-6">

        <div className="w-full  justify-center items-center">
          <div className="flex justify-center items-center">
              <div className={`h-4 bg-gray-200 justify-center items-center ${sectionEdit === newsletterValues.section ? `hover:bg-green-700` : ''} rounded-full dark:bg-gray-700 w-3/4 mb-4`}></div>
          </div>
          <div className="flex justify-center flex-col items-center">
              <div className={`h-2 ${sectionEdit === newsletterValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5`}></div>
              <div className={`h-2 ${sectionEdit === newsletterValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5`}></div>
          </div>
          <div className="flex justify-center items-center items-center space-x-1 w-full mt-6">
                <div className={`h-6 ${sectionEdit === newsletterValues.section ? `hover:bg-yellow-400` : ''} bg-gray-200 rounded-l-lg dark:bg-gray-700 w-2/4`}></div>
                <div className={`h-6 ${sectionEdit === newsletterValues.section ? `hover:bg-purple-700` : ''} bg-gray-200 rounded-r-lg dark:bg-gray-700 w-20`}></div>
          </div>
          <div className="flex justify-center flex-row items-center mt-1 space-x-1">
              <div className={`h-1.5 ${sectionEdit === newsletterValues.section ? `hover:bg-orange-400` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-1/4 mb-2.5`}></div>
              <div className={`h-1.5 ${sectionEdit === newsletterValues.section ? `hover:bg-cyan-400` : ''}  bg-gray-200 rounded-full dark:bg-gray-700 w-1/6 mb-2.5`}></div>
          </div>
         </div>


      </div>

      </div>

    </div>
  )
}
