import React from 'react'
import DrawerTitle from '../Drawers/DrawerTitle'
import DrawerDescription from '../Drawers/DrawerDescription'
//import DrawerButton from '../Drawers/DrawerButton'
//import DrawerImage from '../Drawers/DrawerImage'

export default function Banner({sectionEdit, teamValues, showModal, edit}){

  return(
    <>
    <div className="flex flex-row bg-white dark:bg-gray-800 items-center pb-5 rounded-xl px-5 justify-center w-full">
        <div className='flex flex-col w-full justify-center items-center'>

        <div className='flex flex-row justify-end items-end place-self-end'>
          <button type="button" disabled className={`mt-[15px] cursor-not-allowed text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>
            Edit
          </button>
          {/*<button type="button" onClick={() => edit(teamValues.section)} className={`mt-[15px] text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>
            Save
          </button>*/}
        </div>

          <div role="status" className="md:w-full w-full justify-center items-center sm:w-full space-y-8 animate-pulse sm:space-y-0 sm:space-x-8 sm:flex sm:items-center mt-2">

                <div className="w-full items-center">
                  <div className=" flex justify-center">
                      <div className={`h-4 bg-gray-200 ${sectionEdit === teamValues.section ? `hover:bg-green-700` : ''} h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-2/4 mb-4`}></div>
                  </div>
                  <div className="mt-1 flex flex-col items-center">
                      <div className={`h-2 ${sectionEdit === teamValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-2.5`}></div>
                      <div className={`h-2 ${sectionEdit === teamValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-2.5`}></div>
                  </div>

                  <div className='flex w-full justify-center flex-col  md:flex-row sm:flex-col items-center mt-3'>

                      <div role="status" className="w-full justify-center m-2 p-4 flex rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700">
                        <div className="md:w-full w-full sm:w-full space-y-8 animate-pulse sm:space-y-0 sm:space-x-8 sm:flex sm:items-center">

                          <div role="status" className="w-full space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:items-center">
                            <div className={`flex justify-center ${sectionEdit === teamValues.section ? `hover:bg-blue-600` : ''} items-center h-48 bg-gray-300 rounded  dark:bg-gray-700`}>
                                <svg className="mr-2 w-14 h-14 text-gray-200" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                            </div>
                          </div>

                          <div className="w-full">
                            <div className="mt-1">
                                <div className={`h-4 bg-gray-200 ${sectionEdit === teamValues.section ? `hover:bg-red-700` : ''} rounded-full dark:bg-gray-700 w-3/4 mb-4`}></div>
                                <div className={`h-3 ${sectionEdit === teamValues.section ? `hover:bg-yellow-400` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-1/4 mb-2.5`}></div>
                            </div>
                            <div className="mt-6">
                                <div className={`h-2 ${sectionEdit === teamValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5`}></div>
                                <div className={`h-2 ${sectionEdit === teamValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5`}></div>
                                <div className={`h-2 ${sectionEdit === teamValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5`}></div>
                                <div className={`h-2 ${sectionEdit === teamValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5`}></div>
                            </div>
                            <div className="flex items-center space-x-2 w-2/3 mt-6">
                                  <div className={`h-6 w-10 ${sectionEdit === teamValues.section ? `hover:bg-blue-900` : ''} bg-gray-200 rounded-full dark:bg-gray-700`}></div>
                                  <div className={`h-6 ${sectionEdit === teamValues.section ? `hover:bg-blue-300` : ''}  bg-gray-200 rounded-full dark:bg-gray-700 w-10`}></div>
                                  <div className={`h-6 ${sectionEdit === teamValues.section ? `hover:bg-white` : ''}  bg-gray-200 rounded-full dark:bg-gray-700 w-10`}></div>
                                  <div className={`h-6 ${sectionEdit === teamValues.section ? `hover:bg-purple-700 ` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-10`}></div>
                            </div>
                          </div>

                        </div>
                      </div>

                      <div role="status" className="w-full justify-center m-2 p-4 flex rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700">
                        <div className="md:w-full w-full sm:w-full space-y-8 animate-pulse sm:space-y-0 sm:space-x-8 sm:flex sm:items-center">

                        <div role="status" className="w-full space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:items-center">
                          <div className={`flex justify-center ${sectionEdit === teamValues.section ? `hover:bg-blue-600` : ''} items-center h-48 bg-gray-300 rounded  dark:bg-gray-700`}>
                              <svg className="mr-2 w-14 h-14 text-gray-200" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                          </div>
                        </div>

                        <div className="w-full">
                          <div className="mt-1">
                              <div className={`h-4 bg-gray-200 ${sectionEdit === teamValues.section ? `hover:bg-red-700` : ''} rounded-full dark:bg-gray-700 w-3/4 mb-4`}></div>
                              <div className={`h-3 ${sectionEdit === teamValues.section ? `hover:bg-yellow-400` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-1/4 mb-2.5`}></div>
                          </div>
                          <div className="mt-6">
                              <div className={`h-2 ${sectionEdit === teamValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5`}></div>
                              <div className={`h-2 ${sectionEdit === teamValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5`}></div>
                              <div className={`h-2 ${sectionEdit === teamValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5`}></div>
                              <div className={`h-2 ${sectionEdit === teamValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5`}></div>
                          </div>
                          <div className="flex items-center space-x-2 w-2/3 mt-6">
                                <div className={`h-6 w-10 ${sectionEdit === teamValues.section ? `hover:bg-blue-900` : ''} bg-gray-200 rounded-full dark:bg-gray-700`}></div>
                                <div className={`h-6 ${sectionEdit === teamValues.section ? `hover:bg-blue-300` : ''}  bg-gray-200 rounded-full dark:bg-gray-700 w-10`}></div>
                                <div className={`h-6 ${sectionEdit === teamValues.section ? `hover:bg-white` : ''}  bg-gray-200 rounded-full dark:bg-gray-700 w-10`}></div>
                                <div className={`h-6 ${sectionEdit === teamValues.section ? `hover:bg-purple-700 ` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-10`}></div>
                          </div>
                        </div>

                        </div>
                      </div>

                  </div>

                  <div className='flex w-full justify-center flex-col  md:flex-row sm:flex-col items-center mt-3'>

                      <div role="status" className="w-full justify-center m-2 p-4 flex rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700">
                        <div className="md:w-full w-full sm:w-full space-y-8 animate-pulse sm:space-y-0 sm:space-x-8 sm:flex sm:items-center">

                        <div role="status" className="w-full space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:items-center">
                          <div className={`flex justify-center ${sectionEdit === teamValues.section ? `hover:bg-blue-600` : ''} items-center h-48 bg-gray-300 rounded  dark:bg-gray-700`}>
                              <svg className="mr-2 w-14 h-14 text-gray-200" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                          </div>
                        </div>

                          <div className="w-full">
                            <div className="mt-1">
                                <div className={`h-4 bg-gray-200 ${sectionEdit === teamValues.section ? `hover:bg-red-700` : ''} rounded-full dark:bg-gray-700 w-3/4 mb-4`}></div>
                                <div className={`h-3 ${sectionEdit === teamValues.section ? `hover:bg-yellow-400` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-1/4 mb-2.5`}></div>
                            </div>
                            <div className="mt-6">
                                <div className={`h-2 ${sectionEdit === teamValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5`}></div>
                                <div className={`h-2 ${sectionEdit === teamValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5`}></div>
                                <div className={`h-2 ${sectionEdit === teamValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5`}></div>
                                <div className={`h-2 ${sectionEdit === teamValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5`}></div>
                            </div>
                            <div className="flex items-center space-x-2 w-2/3 mt-6">
                                  <div className={`h-6 w-10 ${sectionEdit === teamValues.section ? `hover:bg-blue-900` : ''} bg-gray-200 rounded-full dark:bg-gray-700`}></div>
                                  <div className={`h-6 ${sectionEdit === teamValues.section ? `hover:bg-blue-300` : ''}  bg-gray-200 rounded-full dark:bg-gray-700 w-10`}></div>
                                  <div className={`h-6 ${sectionEdit === teamValues.section ? `hover:bg-white` : ''}  bg-gray-200 rounded-full dark:bg-gray-700 w-10`}></div>
                                  <div className={`h-6 ${sectionEdit === teamValues.section ? `hover:bg-purple-700 ` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-10`}></div>
                            </div>
                          </div>

                        </div>
                      </div>

                      <div role="status" className="w-full justify-center m-2 p-4 flex rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700">
                        <div className="md:w-full w-full sm:w-full space-y-8 animate-pulse sm:space-y-0 sm:space-x-8 sm:flex sm:items-center">

                        <div role="status" className="w-full space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:items-center">
                          <div className={`flex justify-center ${sectionEdit === teamValues.section ? `hover:bg-blue-600` : ''} items-center h-48 bg-gray-300 rounded  dark:bg-gray-700`}>
                              <svg className="mr-2 w-14 h-14 text-gray-200" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                          </div>
                        </div>

                          <div className="w-full">
                            <div className="mt-1">
                                <div className={`h-4 bg-gray-200 ${sectionEdit === teamValues.section ? `hover:bg-red-700` : ''} rounded-full dark:bg-gray-700 w-3/4 mb-4`}></div>
                                <div className={`h-3 ${sectionEdit === teamValues.section ? `hover:bg-yellow-400` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-1/4 mb-2.5`}></div>
                            </div>
                            <div className="mt-6">
                                <div className={`h-2 ${sectionEdit === teamValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5`}></div>
                                <div className={`h-2 ${sectionEdit === teamValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5`}></div>
                                <div className={`h-2 ${sectionEdit === teamValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5`}></div>
                                <div className={`h-2 ${sectionEdit === teamValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5`}></div>
                            </div>
                            <div className="flex items-center space-x-2 w-2/3 mt-6">
                                  <div className={`h-6 w-10 ${sectionEdit === teamValues.section ? `hover:bg-blue-900` : ''} bg-gray-200 rounded-full dark:bg-gray-700`}></div>
                                  <div className={`h-6 ${sectionEdit === teamValues.section ? `hover:bg-blue-300` : ''}  bg-gray-200 rounded-full dark:bg-gray-700 w-10`}></div>
                                  <div className={`h-6 ${sectionEdit === teamValues.section ? `hover:bg-white` : ''}  bg-gray-200 rounded-full dark:bg-gray-700 w-10`}></div>
                                  <div className={`h-6 ${sectionEdit === teamValues.section ? `hover:bg-purple-700 ` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-10`}></div>
                            </div>
                          </div>

                        </div>
                      </div>

                  </div>

                 </div>

          </div>

         </div>
         {teamValues.section === sectionEdit ?
           <>
           <DrawerTitle showModal={showModal} modalValues={teamValues.mainTitle} section={sectionEdit} />
           <DrawerDescription showModal={showModal} modalValues={teamValues.secondTitle} section={sectionEdit} />
           {/*{teamValues.buttons.map((b, i) =>
             <DrawerButton key={i} showModal={showModal} modalValues={b} section={sectionEdit} i={i} />
           )}
           <DrawerImage showModal={showModal} modalValues={teamValues.urlImg} section={sectionEdit} />*/}
           </>
            :
            <></>
           }

    </div>
    </>
  )
}
