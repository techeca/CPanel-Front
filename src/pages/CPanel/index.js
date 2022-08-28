import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MenuIzquierdo from '../../components/MenuIzquierdo'
import Loading from '../../components/Loading'
import { Card, Button } from 'flowbite-react'
import { ChartPieIcon, ViewBoardsIcon, InboxIcon, UserIcon, ShoppingBagIcon, ArrowSmRightIcon, TableIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline'
import useAuth from '../../hooks/useAuth'
import useAlert from '../../hooks/useAlert'

export default function CPanel(){
  let navigation = useNavigate()
  const {isLogged, isLoading} = useAuth()
  const [loading, setLoading] = useState(true)
  const { setMessage } = useAlert();

//se debe sacer si se quiere entrar desde ex: locahost:3000/cpanel
  useEffect(() => {
    if(!isLogged) {
      navigation('/login', {replace: true});
      setMessage('You must login before enter CPanel')
    }
  }, [isLogged, navigation])

  return (
    <>
    {!isLogged && loading ?
      <Loading w={10} h={10} />
      :
      <div style={{marginTop:'12px', marginLeft:'8px', justifyContent:''}}>
        <div id='dashboard' className='flex flex-col md:flex-row justify-center'>
          <div className='carTest1'>
            <Card href='#' className='' style={{minHeight:'200px', minWidth:'240px'}}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Total de Usuarios
              </h5>
              <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginTop:'9px'}}>
                <UserIcon className="flex justify-end h-16 w-16 tracking-tight text-gray-900 dark:text-white"/>
                <h5 className="flex justify-end text-6xl tracking-tight text-gray-900 dark:text-white">
                  100
                </h5>
              </div>
            </Card>
          </div>
          <div className='carTest1'>
            <Card href='#' className='' style={{minHeight:'200px', minWidth:'240px'}}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Total de Entradas
              </h5>
              <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginTop:'9px'}}>
                <ViewBoardsIcon className="flex justify-end h-16 w-16 tracking-tight text-gray-900 dark:text-white"/>
                <h5 className="flex justify-end text-6xl tracking-tight text-gray-900 dark:text-white">
                  100
                </h5>
              </div>
            </Card>
          </div>
          <div className='carTest1'>
            <Card  className='' style={{minHeight:'200px', display:'flex', minHeight:'100%'}}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Wow much data!
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
              <div style={{display:'flex', justifyContent:'flex-end', flexDirection:'column', alignItems:'flex-end'}}>
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
              </div>
            </Card>
          </div>
        </div>
        <div id='dashboard' className='flex flex-col md:flex-row'>
          <div className='carTest1 md:w-full sm:w-fit'>
            <Card className='' style={{minHeight:'250px'}}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>

            </Card>
          </div>
        </div>
        <div id='dashboard' className='flex flex-col md:flex-row justify-center'>
          <div className='carTest1 md:w-full sm:w-fit h-full'>
            <Card className='' style={{minHeight:'250px'}}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
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
