import React, { useEffect, useState } from 'react'
import Loading from '../../components/Loading'
import { Card, Button } from 'flowbite-react'
//import useAuth from '../../hooks/useAuth'
//import useAlert from '../../hooks/useAlert'
import { contentService } from '../../services'
//import Banner from './SectionBlock/Banner'
import Block from './SectionBlock/Block'

export default function Settings(){
  //const { isLogged } = useAuth()
  const [ loading, setLoading ] = useState(true)
  //const { setMessage } = useAlert()   //alertas pero en este punto deberia agregar los otros mensajes :p
  const [ sectionEdit, setSectionEdit ] = useState('')  //guarda la seccion que vamos a editar
  const [ webContent, setWebContent ] = useState('')  //secciones (banner, features, team, etc)

  //Cambia la seccion a editar
  function editSection(section){
    if(sectionEdit === section){
      setSectionEdit('')
    }else {
      setSectionEdit(section)
    }
  }

useEffect(() => {
    contentService.getContentHome()
    .then(res => setWebContent(res))
}, [])

if(webContent && loading){setLoading(false)}

//el className del primer div controla que tan ajustado esta el contenido al borde
  return (
    <div className='w-full'>
    <div id='contentBlocker' className='hidden fixed z-10 top-0 left-0 right-0 bottom-0 bg-black opacity-50'></div>
    {loading ?
      <Loading w={10} h={10} />
      :
      <>
      <div style={{marginTop:'12px', marginLeft:'8px', paddingRight:'20px', minWidth:'100%'}}>
        <div id='contentone' className='flex w-full flex-col md:flex-row justify-center sm:flex-col justify-items-center'>

        {/*Frontend editor block*/}
            <div  className='carTest1 w-full lg:w-[80%] md:w-[90%] sm:w-full'>
                <div  className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-4 ml-6 flex justify-between ">
                    Frontend editor
                  </h5>

                  <h5 className="text-2md tracking-tight text-gray-900 dark:text-gray-400 mt-9 ml-6 flex justify-between ">
                    Selecciona un elemento interactivo para editar su contenido (La imagen de 'Banner' no es desplegada en dispositivos menores a 1015px).
                  </h5>

                  {/**Esto se puede mapear webContent.ma((c) => blabla) }
                  {/**Bloque de Banner**/}
                    <Block sectionEdit={sectionEdit} blockValues={webContent.primary} editSection={editSection} />

                  {/**Bloque de Features**/}
                    <Block sectionEdit={sectionEdit} blockValues={webContent.secondary} editSection={editSection} />

                  {/*Bloque Team*/}
                    <Block sectionEdit={sectionEdit} blockValues={webContent.third} editSection={editSection} />

                  {/*Bloque Newsletter*/}
                    <Block sectionEdit={sectionEdit} blockValues={webContent.newsletter} editSection={editSection} />

                </div>
            </div>

            {/*Esta seccion puede servir como panel derecho (solo maquetado)*/}
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
        {/*<div id='contentthree' className='flex flex-col md:flex-row justify-center'>
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
        </div>*/}
      </div>
      </>
    }
    </div>
  )
}
