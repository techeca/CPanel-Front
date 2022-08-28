import React, { useState, useEffect } from 'react'
import { Sidebar, Button } from 'flowbite-react'
import { ChartPieIcon, ViewBoardsIcon, InboxIcon, UserIcon, ShoppingBagIcon, ArrowSmRightIcon, TableIcon, ArrowLeftIcon, ArrowRightIcon, AdjustmentsIcon } from '@heroicons/react/outline'
import BotonSidebar from './BotonSidebar'
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom'

export default function MenuIzquierdo({sideCategorias}){
  const [sidebarAbierto, setSidebarAbierto] = useState(true)
  let viewportWidth;
  const {isLogged, isLoading} = useAuth()
  //const testele = document.querySelector('[aria-label="cpanel-sidebar"]')
  //console.log()

  window.addEventListener('resize', function(event){
      let newWidth = window.innerWidth;
      //var newHeight = window.innerHeight;
      if(newWidth < 1160 && sidebarAbierto){
        esconderSidebar()
      }
      if(newWidth > 1161 && !sidebarAbierto){
        esconderSidebar()
      }
  });

  function esconderSidebar(){
    const sidebarContainer = document.querySelector('[aria-label="cpanel-sidebar"]') ? document.querySelector('[aria-label="cpanel-sidebar"]') : false
    if(sidebarAbierto && sidebarContainer){
      sidebarContainer.style.width = '50px';
      setSidebarAbierto(false)
    }
    if(!sidebarAbierto && sidebarContainer) {
      sidebarContainer.style.width = '256px';
      setSidebarAbierto(true)
    }
  }

  function noSidebar(){
    const sidebarContainer = document.querySelector('[aria-label="cpanel-sidebar"]')
    sidebarContainer.style.display = 'none';
    setSidebarAbierto(false)
  }

  function getIcon(categoria){
    let resp;

    switch (categoria) {
      case 'Dashboard':
        resp = {nombre:categoria, icono:ChartPieIcon, path:'/cpanel'}
        break;
      case 'Blog':
        resp = {nombre:categoria, icono:ViewBoardsIcon, path:'/'}
        break;
      case 'Inbox':
        resp = {nombre:categoria, icono:InboxIcon, path:'/'}
        break;
      case 'Users':
        resp = {nombre:categoria, icono:UserIcon, path:'/'}
        break;
      case 'Products':
        resp = {nombre:categoria, icono:ShoppingBagIcon, path:'/'}
        break;
      case 'Settings':
        resp = {nombre:categoria, icono:AdjustmentsIcon, path:'/cpanel/settings'}
        break;
      default:
        resp = {nombre:categoria, icono:ChartPieIcon, path:'/'}
    }

    return resp
  }

  useEffect(() => {
    if(!isLogged) {
      noSidebar()
    }
  }, [isLogged])


  return(
    <div className="w-fit h-auto">
    <aside className="w-64" aria-label="cpanel-sidebar">
       <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800" style={{overflow:'hidden'}}>
          <ul className="space-y-2">
             {sideCategorias.map((sideC) =>
               <BotonSidebar key={sideC} dataBoton={getIcon(sideC)} mostrar={sidebarAbierto} />
             )}
             {/*
               <li>
                  <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                     <span class="flex-1 ml-3 whitespace-nowrap">Kanban</span>
                     <span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                  </a>
               </li>
               <li>
                  <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                     <span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                     <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
                  </a>
               </li>
*/}
          </ul>
          <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
             <li>

                <Link to="/cpanel/settings" className={`flex items-center ${sidebarAbierto ? 'p-2' : ''} text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group`}>
                   <AdjustmentsIcon className='w-6 h-6 transition duration-75' />
                   <span className={`ml-3 ${sidebarAbierto ? '' : 'hidden'}`}>Settings</span>
                </Link>
             </li>
          {/*   <li>
                <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                   <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                   <span class="ml-3">Documentation</span>
                </a>
             </li>
             <li>
                <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                   <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                   <span class="ml-3">Components</span>
                </a>
             </li>
             <li>
                <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                   <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg>
                   <span class="ml-3">Help</span>
                </a>
             </li>*/}
          </ul>
          <div className='minSidebar mt-3'>
            <Button onClick={esconderSidebar} outline={false} className='h-1 w-1' style={{width:`${sidebarAbierto ? '' : '25px'}`}}>
              {sidebarAbierto ? <ArrowLeftIcon className='h-3 w-3'/> : <ArrowRightIcon className='h-3 w-3'/>}
            </Button>
          </div>
       </div>
    </aside>

    {/*<Sidebar aria-label="cpanel-sidebar">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {sideCategorias.map((sideC) =>
            <BotonSidebar key={sideC} dataBoton={getIcon(sideC)} mostrar={sidebarAbierto} />
          )}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      <div className='minSidebar'>
        <Button onClick={esconderSidebar} outline={false} className='h-1 w-1' style={{width:`${sidebarAbierto ? '' : '25px'}`}}>
          {sidebarAbierto ? <ArrowLeftIcon className='h-3 w-3'/> : <ArrowRightIcon className='h-3 w-3'/>}
        </Button>
      </div>
    </Sidebar>*/}

    </div>
  )
}
