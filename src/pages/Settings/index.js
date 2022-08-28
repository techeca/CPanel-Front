import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loading from '../../components/Loading'
import { Card, Button } from 'flowbite-react'
import flowbite from 'flowbite'
import { ChartPieIcon, ViewBoardsIcon, InboxIcon, UserIcon, ShoppingBagIcon, ArrowSmRightIcon, TableIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline'
import useAuth from '../../hooks/useAuth'
import useAlert from '../../hooks/useAlert'

export default function Settings(){
  let navigation = useNavigate()
  const {isLogged, isLoading} = useAuth()
  const [loading, setLoading] = useState(true)
  const { setMessage } = useAlert()

  function showDropdowUserCard(){
    const targetEl = document.getElementById('dropdown');
    //Si tiene la clase la agrega, si no, la quita
    targetEl.classList.toggle('hidden')
  }

//ya no es necesario por que los está tomando Auth0, ahí están las rutas públicas, el resto quedan bloqueada a menos que exista el objeto userService.userValue
  useEffect(() => {
    if(!isLogged) {
      //navigation('/login', {replace: true});
      //setMessage('You must login before enter to User Panel')
    }
  }, [isLogged, navigation])


  return (
    <>
    {!isLogged && loading ?
      <Loading w={10} h={10} />
      :
      <div style={{marginTop:'12px', marginLeft:'8px', paddingRight:'20px', minWidth:'100%'}}>
        <div id='contentone' className='flex w-full flex-col md:flex-row justify-center sm:flex-col justify-items-center'>

            <div  className='carTest1 w-full'>
                <div  className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-4 ml-6 flex justify-between ">
                    Frontend editor
                  </h5>
                  <h5 className="text-2md tracking-tight text-gray-900 dark:text-gray-400 mt-9 ml-6 flex justify-between ">
                    Selecciona un elemento interactivo para editar su contenido (La imagen de 'First Content' no es desplegada en dispositivos menores a 1015px).
                  </h5>


                    <div className="ribbon-1 bg-gray-700 border-blue-300 mt-6 mb-1">
                      <h5 className="absolute text-2md tracking-tight text-white mt-1.5 ml-6 flex justify-between ">
                        Banner
                      </h5>
                    </div>

                    <div className="flex justify-center items-center w-full p-3">
                        <div  className="flex flex-col justify-center items-center w-full rounded-xl border-4 border-gray-700 border-dashed cursor-pointer">
                          <div className="flex flex-row items-center pb-10 px-5 justify-center w-full">

                              <div role="status" className="lg:w-4/5  md:w-full sm:w-full space-y-8 animate-pulse sm:space-y-0 sm:space-x-8 sm:flex sm:items-center mt-6">

                                <div className="w-full">
                                  <div className="mt-9">
                                      <div className="h-4 bg-gray-200 hover:bg-green-700 rounded-full dark:bg-gray-700 w-3/4 mb-4"></div>
                                  </div>
                                  <div className="mt-9">
                                      <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                      <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                      <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                      <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                  </div>
                                  <div className="flex items-center space-x-2 w-2/3 mt-6">
                                        <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-20"></div>
                                        <div className="h-6 hover:bg-yellow-400 bg-gray-200 rounded-full dark:bg-gray-700 w-20"></div>
                                        <div className="h-6 hover:bg-purple-700 bg-gray-200 rounded-full dark:bg-gray-700 w-20"></div>
                                  </div>
                                 </div>

                                  <div role="status" className="w-full pt-3 space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:items-center">
                                    <div className="flex justify-center hover:bg-blue-600 items-center h-48 bg-gray-300 rounded  dark:bg-gray-700">
                                        <svg className="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                                    </div>
                                  </div>

                              </div>

                          </div>
                        </div>
                    </div>

                    <div className="ribbon-1 bg-gray-700 border-blue-300 mt-6 mb-1">
                      <h5 className="absolute text-2md tracking-tight text-white mt-1.5 ml-6 flex justify-between ">
                        Features
                      </h5>
                    </div>

                    <div className="flex justify-center items-center w-full p-3">
                        <div  className="flex flex-col justify-center items-center w-full rounded-xl border-4 border-gray-700 border-dashed cursor-pointer">
                          <div className="flex flex-row items-center pb-10 px-5 justify-center w-full">

                              <div role="status" className="lg:w-4/5 w-full md:w-full sm:w-full space-y-8 animate-pulse sm:space-y-0 sm:space-x-8 sm:flex sm:items-center mt-6">

                                <div className="w-full">
                                  <div className="mt-9">
                                      <div className="h-4 bg-gray-200 hover:bg-green-700 rounded-full dark:bg-gray-700 w-3/4 mb-4"></div>
                                  </div>
                                  <div className="mt-3">
                                      <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                      <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-1/4 mb-2.5"></div>
                                  </div>


                                  <div className='flex flex-col md:flex-row sm:flex-col items-center'>
                                    <div className="flex flex-col items-center space-x-2 w-2/3 mt-6 m-3 ">
                                          <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-10 m-2 hover:bg-blue-600">
                                          <svg className="w-6 h-6 flex justify-center ml-2 mt-1.5 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                                          </div>
                                          <div className="h-3 hover:bg-green-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full m-2"></div>
                                          <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1"></div>
                                          <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1"></div>
                                          <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1"></div>
                                    </div>
                                    <div className="flex flex-col items-center space-x-2 w-2/3 mt-6 m-3">
                                          <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-10 m-2 hover:bg-blue-600">
                                          <svg className="w-6 h-6 flex justify-center ml-2 mt-1.5 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                                          </div>
                                          <div className="h-3 hover:bg-green-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full m-2"></div>
                                          <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1"></div>
                                          <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1"></div>
                                          <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1"></div>
                                    </div>
                                    <div className="flex flex-col items-center space-x-2 w-2/3 mt-6 m-3">
                                          <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-10 m-2 hover:bg-blue-600">
                                          <svg className="w-6 h-6 flex justify-center ml-2 mt-1.5 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                                          </div>
                                          <div className="h-3 hover:bg-green-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full m-2"></div>
                                          <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1"></div>
                                          <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1"></div>
                                          <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1"></div>
                                    </div>
                                  </div>

                                  <div className='flex flex-col md:flex-row sm:flex-col items-center'>
                                    <div className="flex flex-col items-center space-x-2 w-2/3 mt-6 m-3 ">
                                          <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-10 m-2 hover:bg-blue-600">
                                          <svg className="w-6 h-6 flex justify-center ml-2 mt-1.5 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                                          </div>
                                          <div className="h-3 hover:bg-green-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full m-2"></div>
                                          <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1"></div>
                                          <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1"></div>
                                          <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1"></div>
                                    </div>
                                    <div className="flex flex-col items-center space-x-2 w-2/3 mt-6 m-3">
                                          <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-10 m-2 hover:bg-blue-600">
                                          <svg className="w-6 h-6 flex justify-center ml-2 mt-1.5 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                                          </div>
                                          <div className="h-3 hover:bg-green-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full m-2"></div>
                                          <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1"></div>
                                          <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1"></div>
                                          <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1"></div>
                                    </div>
                                    <div className="flex flex-col items-center space-x-2 w-2/3 mt-6 m-3">
                                          <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-10 m-2 hover:bg-blue-600">
                                          <svg className="w-6 h-6 flex justify-center ml-2 mt-1.5 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                                          </div>
                                          <div className="h-3 hover:bg-green-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full m-2"></div>
                                          <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1"></div>
                                          <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1"></div>
                                          <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1"></div>
                                    </div>
                                  </div>

                                 </div>


                              </div>

                          </div>
                        </div>
                    </div>

                    <div className="ribbon-1 bg-gray-700 border-blue-300 mt-6 mb-1">
                      <h5 className="absolute text-2md tracking-tight text-white mt-1.5 ml-6 flex justify-between ">
                        Team
                      </h5>
                    </div>

                    <div className="flex justify-center items-center w-full p-3">
                        <div className="flex flex-col justify-center items-center w-full rounded-xl border-4 border-gray-700 border-dashed cursor-pointer">
                          <div className="flex flex-row items-center pb-3 px-5 justify-center w-full">
                          <div role="status" className="md:w-full w-full justify-center items-center sm:w-full space-y-8 animate-pulse sm:space-y-0 sm:space-x-8 sm:flex sm:items-center mt-6">

                                <div className="w-full items-center">
                                  <div className="mt-9 flex justify-center">
                                      <div className="h-4 bg-gray-200 hover:bg-green-700 rounded-full dark:bg-gray-700 w-2/4 mb-4"></div>
                                  </div>
                                  <div className="mt-1 flex flex-col items-center">
                                      <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-2.5"></div>
                                      <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-2.5"></div>
                                  </div>

                                  <div className='flex w-full justify-center flex-col  md:flex-row sm:flex-col items-center mt-3'>

                                      <div role="status" className="w-full justify-center m-2 p-4 flex rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700">
                                        <div className="md:w-full w-full sm:w-full space-y-8 animate-pulse sm:space-y-0 sm:space-x-8 sm:flex sm:items-center">

                                          <div role="status" className="w-full space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:items-center">
                                            <div className="flex justify-center hover:bg-blue-600 items-center h-48 bg-gray-300 rounded  dark:bg-gray-700">
                                                <svg className="mr-2 w-14 h-14 text-gray-200" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                                            </div>
                                          </div>

                                          <div className="w-full">
                                            <div className="mt-1">
                                                <div className="h-4 bg-gray-200 hover:bg-green-700 rounded-full dark:bg-gray-700 w-3/4 mb-4"></div>
                                                <div className="h-3 hover:bg-yellow-400 bg-gray-200 rounded-full dark:bg-gray-700 w-1/4 mb-2.5"></div>
                                            </div>
                                            <div className="mt-6">
                                                <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                                <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                                <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                                <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                            </div>
                                            <div className="flex items-center space-x-2 w-2/3 mt-6">
                                                  <div className="h-9 hover:bg-blue-900 bg-gray-200 rounded-full dark:bg-gray-700 w-10"></div>
                                                  <div className="h-9 hover:bg-blue-300 bg-gray-200 rounded-full dark:bg-gray-700 w-10"></div>
                                                  <div className="h-9 hover:bg-white bg-gray-200 rounded-full dark:bg-gray-700 w-10"></div>
                                                  <div className="h-9 hover:bg-purple-700 bg-gray-200 rounded-full dark:bg-gray-700 w-10"></div>
                                            </div>
                                           </div>

                                        </div>
                                      </div>

                                      <div role="status" className="w-full justify-center m-2 p-4 flex rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700">
                                        <div className="md:w-full w-full sm:w-full space-y-8 animate-pulse sm:space-y-0 sm:space-x-8 sm:flex sm:items-center">

                                          <div role="status" className="w-full space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:items-center">
                                            <div className="flex justify-center hover:bg-blue-600 items-center h-48 bg-gray-300 rounded  dark:bg-gray-700">
                                                <svg className="mr-2 w-14 h-14 text-gray-200" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                                            </div>
                                          </div>

                                          <div className="w-full">
                                            <div className="mt-1">
                                                <div className="h-4 bg-gray-200 hover:bg-green-700 rounded-full dark:bg-gray-700 w-3/4 mb-4"></div>
                                                <div className="h-3 hover:bg-yellow-400 bg-gray-200 rounded-full dark:bg-gray-700 w-1/4 mb-2.5"></div>
                                            </div>
                                            <div className="mt-6">
                                                <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                                <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                                <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                                <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                            </div>
                                            <div className="flex items-center space-x-2 w-2/3 mt-6">
                                                  <div className="h-9 hover:bg-blue-900 bg-gray-200 rounded-full dark:bg-gray-700 w-10"></div>
                                                  <div className="h-9 hover:bg-blue-300 bg-gray-200 rounded-full dark:bg-gray-700 w-10"></div>
                                                  <div className="h-9 hover:bg-white bg-gray-200 rounded-full dark:bg-gray-700 w-10"></div>
                                                  <div className="h-9 hover:bg-purple-700 bg-gray-200 rounded-full dark:bg-gray-700 w-10"></div>
                                            </div>
                                           </div>

                                        </div>
                                      </div>

                                  </div>

                                  <div className='flex w-full justify-center flex-col  md:flex-row sm:flex-col items-center mt-3'>

                                      <div role="status" className="w-full justify-center m-2 p-4 flex rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700">
                                        <div className="md:w-full w-full sm:w-full space-y-8 animate-pulse sm:space-y-0 sm:space-x-8 sm:flex sm:items-center">

                                          <div role="status" className="w-full space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:items-center">
                                            <div className="flex justify-center hover:bg-blue-600 items-center h-48 bg-gray-300 rounded  dark:bg-gray-700">
                                                <svg className="mr-2 w-14 h-14 text-gray-200" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                                            </div>
                                          </div>

                                          <div className="w-full">
                                            <div className="mt-1">
                                                <div className="h-4 bg-gray-200 hover:bg-green-700 rounded-full dark:bg-gray-700 w-3/4 mb-4"></div>
                                                <div className="h-3 hover:bg-yellow-400 bg-gray-200 rounded-full dark:bg-gray-700 w-1/4 mb-2.5"></div>
                                            </div>
                                            <div className="mt-6">
                                                <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                                <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                                <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                                <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                            </div>
                                            <div className="flex items-center space-x-2 w-2/3 mt-6">
                                                  <div className="h-9 hover:bg-blue-900 bg-gray-200 rounded-full dark:bg-gray-700 w-10"></div>
                                                  <div className="h-9 hover:bg-blue-300 bg-gray-200 rounded-full dark:bg-gray-700 w-10"></div>
                                                  <div className="h-9 hover:bg-white bg-gray-200 rounded-full dark:bg-gray-700 w-10"></div>
                                                  <div className="h-9 hover:bg-purple-700 bg-gray-200 rounded-full dark:bg-gray-700 w-10"></div>
                                            </div>
                                           </div>

                                        </div>
                                      </div>

                                      <div role="status" className="w-full justify-center m-2 p-4 flex rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700">
                                        <div className="md:w-full w-full sm:w-full space-y-8 animate-pulse sm:space-y-0 sm:space-x-8 sm:flex sm:items-center">

                                          <div role="status" className="w-full space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:items-center">
                                            <div className="flex justify-center hover:bg-blue-600 items-center h-48 bg-gray-300 rounded  dark:bg-gray-700">
                                                <svg className="mr-2 w-14 h-14 text-gray-200" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
                                            </div>
                                          </div>

                                          <div className="w-full">
                                            <div className="mt-1">
                                                <div className="h-4 bg-gray-200 hover:bg-green-700 rounded-full dark:bg-gray-700 w-3/4 mb-4"></div>
                                                <div className="h-3 hover:bg-yellow-400 bg-gray-200 rounded-full dark:bg-gray-700 w-1/4 mb-2.5"></div>
                                            </div>
                                            <div className="mt-6">
                                                <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                                <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                                <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                                <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                            </div>
                                            <div className="flex items-center space-x-2 w-2/3 mt-6">
                                                  <div className="h-9 hover:bg-blue-900 bg-gray-200 rounded-full dark:bg-gray-700 w-10"></div>
                                                  <div className="h-9 hover:bg-blue-300 bg-gray-200 rounded-full dark:bg-gray-700 w-10"></div>
                                                  <div className="h-9 hover:bg-white bg-gray-200 rounded-full dark:bg-gray-700 w-10"></div>
                                                  <div className="h-9 hover:bg-purple-700 bg-gray-200 rounded-full dark:bg-gray-700 w-10"></div>
                                            </div>
                                           </div>

                                        </div>
                                      </div>

                                  </div>

                                 </div>

                              </div>
                          </div>
                        </div>
                    </div>

                    <div className="ribbon-1 bg-gray-700 border-blue-300 mt-6 mb-1">
                      <h5 className="absolute text-2md tracking-tight text-white mt-1.5 ml-6 flex justify-between ">
                        Newsletter
                      </h5>
                    </div>

                    <div className="flex justify-center items-center w-full p-3">
                        <div  className="flex flex-col justify-center items-center w-full rounded-xl border-4 border-gray-700 border-dashed cursor-pointer">
                          <div className="flex flex-row items-center pb-10 px-5 justify-center w-full">

                              <div role="status" className="lg:w-4/5 md:w-full items-center justify-center sm:w-full space-y-8 animate-pulse sm:space-y-0 sm:space-x-8 sm:flex sm:items-center mt-6">

                                <div className="w-full  justify-center items-center">
                                  <div className="mt-9 flex justify-center items-center">
                                      <div className="h-4 bg-gray-200 justify-center items-center hover:bg-green-700 rounded-full dark:bg-gray-700 w-3/4 mb-4"></div>
                                  </div>
                                  <div className="flex justify-center flex-col items-center">
                                      <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                      <div className="h-2 hover:bg-red-700 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-2.5"></div>
                                  </div>
                                  <div className="flex justify-center items-center items-center space-x-1 w-full mt-6">
                                        <div className="h-6 hover:bg-yellow-400 bg-gray-200 rounded-l-lg dark:bg-gray-700 w-2/4"></div>
                                        <div className="h-6 hover:bg-purple-700 bg-gray-200 rounded-r-lg dark:bg-gray-700 w-20"></div>
                                  </div>
                                  <div className="flex justify-center flex-row items-center mt-1 space-x-1">
                                      <div className="h-1.5 hover:bg-orange-500 bg-gray-200 rounded-full dark:bg-gray-700 w-1/4 mb-2.5"></div>
                                      <div className="h-1.5 hover:bg-cyan-400 bg-gray-200 rounded-full dark:bg-gray-700 w-1/6 mb-2.5"></div>
                                  </div>
                                 </div>


                              </div>

                          </div>
                        </div>
                    </div>

                </div>
            </div>

            {/*<div className='carTest1 w-full md:w-3/6' >
                <div  className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" style={{minHeight:'100%'}}>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-4 ml-6 flex justify-between ">
                    Colors (puede ser)
                  </h5>

                      <div className="flex flex-col items-center pb-10 pt-2">
                          <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white mt-3">Bonnie Green</h5>
                          <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                      </div>
                  </div>
            </div>*/}


        </div>
        {/*<div id='latestSomething' className='flex flex-col md:flex-row'>
          <div className='carTest1 md:w-full '>

          <div className="p-4 w-full bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-between items-center mb-4">
                  <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
                  <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                      View all
                  </a>
             </div>
             <div className="flow-root">
                  <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                      <li className="py-3 sm:py-4">
                          <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                  <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Neil image" />
                              </div>
                              <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                      Neil Sims
                                  </p>
                                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                      email@windster.com
                                  </p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                  $320
                              </div>
                          </div>
                      </li>
                      <li className="py-3 sm:py-4">
                          <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                  <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                              </div>
                              <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                      Bonnie Green
                                  </p>
                                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                      email@windster.com
                                  </p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                  $3467
                              </div>
                          </div>
                      </li>
                      <li className="py-3 sm:py-4">
                          <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                  <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Michael image"/>
                              </div>
                              <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                      Michael Gough
                                  </p>
                                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                      email@windster.com
                                  </p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                  $67
                              </div>
                          </div>
                      </li>
                      <li className="py-3 sm:py-4">
                          <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                  <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="Lana image"/>
                              </div>
                              <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                      Lana Byrd
                                  </p>
                                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                      email@windster.com
                                  </p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                  $367
                              </div>
                          </div>
                      </li>
                      <li className="pt-3 pb-0 sm:pt-4">
                          <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                  <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Thomas image"/>
                              </div>
                              <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                      Thomes Lean
                                  </p>
                                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                      email@windster.com
                                  </p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                  $2367
                              </div>
                          </div>
                      </li>
                  </ul>
             </div>
          </div>


          </div>
        </div>*/}
        <div id='contenttwo' className='flex flex-col md:flex-row'>
          <div className='carTest1 md:w-full w-full'>



          </div>

        </div>
        <div id='contentthree' className='flex flex-col md:flex-row justify-center'>
          <div className='carTest1 md:w-full'>
            <Card className='' style={{minHeight:'190px'}}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 mb-3">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
              <Button>
                Read more
                <svg
                  className="ml-2 -mr-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    }
    </>
  )
}
