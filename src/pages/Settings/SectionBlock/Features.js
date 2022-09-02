import React from 'react'
import DrawerTitle from '../Drawers/DrawerTitle'
import DrawerDescription from '../Drawers/DrawerDescription'
import DrawerButton from '../Drawers/DrawerButton'
import DrawerImage from '../Drawers/DrawerImage'

export default function Features({sectionEdit, featuresValues, showModal, edit}){
  //console.log(featuresValues.items[0])

  return(
    <>
    <div className="flex bg-white dark:bg-gray-800 flex-row items-center pb-5 px-5 justify-center w-full">
      <div className='flex flex-col w-full justify-center items-center'>

        <div className='flex flex-row justify-end items-end place-self-end'>
          <button type="button" onClick={() => edit(featuresValues.section)} className={`mt-[15px] text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>
            Edit
          </button>
          <button type="button" onClick={() => edit(featuresValues.section)} className={`mt-[15px] text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>
            Save
          </button>
        </div>

        {/*Bloque*/}
        <div role="status" className="lg:w-4/5 w-full md:w-full sm:w-full space-y-8 animate-pulse sm:space-y-0 sm:space-x-8 sm:flex sm:items-center">

            <div className="w-full">
              <div className="mt-3">
                  <div onClick={() => showModal(featuresValues.mainTitle.typeElement, featuresValues.section)} className={`h-4 bg-gray-200 ${sectionEdit === featuresValues.section ? `hover:bg-green-700` : ''} rounded-full dark:bg-gray-700 w-3/4 mb-4`}></div>
              </div>
              <div className="mt-3">
                  <div onClick={() => showModal(featuresValues.secondTitle.typeElement, featuresValues.section)} className={`h-2 ${sectionEdit === featuresValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5`}></div>
                  <div onClick={() => showModal(featuresValues.secondTitle.typeElement, featuresValues.section)} className={`h-2 ${sectionEdit === featuresValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-1/4 mb-2.5`}></div>
              </div>

              {/*3 de arriba*/}
              <div className='flex flex-col md:flex-row sm:flex-col items-center'>

                <div className="flex flex-col items-center space-x-2 w-2/3 mt-6 m-3 ">
                      <div className={`h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-10 m-2 ${sectionEdit === featuresValues.section ? `hover:bg-blue-600` : ''} `}><svg className="w-6 h-6 flex justify-center ml-2 mt-1.5 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg></div>
                      <div onClick={() => showModal(featuresValues.items[0].name.typeElement, featuresValues.section, 0)} className={`h-3 ${sectionEdit === featuresValues.section ? `hover:bg-green-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full m-2`}></div>
                      <div onClick={() => showModal(featuresValues.items[0].description.typeElement, featuresValues.section, 0)} className={`h-2 ${sectionEdit === featuresValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1`}></div>
                      <div onClick={() => showModal(featuresValues.items[0].description.typeElement, featuresValues.section, 0)} className={`h-2 ${sectionEdit === featuresValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1`}></div>
                      <div onClick={() => showModal(featuresValues.items[0].description.typeElement, featuresValues.section, 0)} className={`h-2 ${sectionEdit === featuresValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1`}></div>
                </div>
                <div className="flex flex-col items-center space-x-2 w-2/3 mt-6 m-3 ">
                      <div className={`h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-10 m-2 ${sectionEdit === featuresValues.section ? `hover:bg-blue-600` : ''} `}><svg className="w-6 h-6 flex justify-center ml-2 mt-1.5 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg></div>
                      <div onClick={() => showModal(featuresValues.items[1].name.typeElement, featuresValues.section, 1)} className={`h-3 ${sectionEdit === featuresValues.section ? `hover:bg-green-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full m-2`}></div>
                      <div onClick={() => showModal(featuresValues.items[1].description.typeElement, featuresValues.section, 1)} className={`h-2 ${sectionEdit === featuresValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1`}></div>
                      <div onClick={() => showModal(featuresValues.items[1].description.typeElement, featuresValues.section, 1)} className={`h-2 ${sectionEdit === featuresValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1`}></div>
                      <div onClick={() => showModal(featuresValues.items[1].description.typeElement, featuresValues.section, 1)} className={`h-2 ${sectionEdit === featuresValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1`}></div>
                </div>
                <div className="flex flex-col items-center space-x-2 w-2/3 mt-6 m-3 ">
                      <div className={`h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-10 m-2 ${sectionEdit === featuresValues.section ? `hover:bg-blue-600` : ''} `}><svg className="w-6 h-6 flex justify-center ml-2 mt-1.5 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg></div>
                      <div onClick={() => showModal(featuresValues.items[2].name.typeElement, featuresValues.section, 2)} className={`h-3 ${sectionEdit === featuresValues.section ? `hover:bg-green-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full m-2`}></div>
                      <div onClick={() => showModal(featuresValues.items[2].description.typeElement, featuresValues.section, 2)} className={`h-2 ${sectionEdit === featuresValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1`}></div>
                      <div onClick={() => showModal(featuresValues.items[2].description.typeElement, featuresValues.section, 2)} className={`h-2 ${sectionEdit === featuresValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1`}></div>
                      <div onClick={() => showModal(featuresValues.items[2].description.typeElement, featuresValues.section, 2)} className={`h-2 ${sectionEdit === featuresValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1`}></div>
                </div>
              </div>
              {/*3 de abajo*/}
              <div className='flex flex-col md:flex-row sm:flex-col items-center'>
              <div className="flex flex-col items-center space-x-2 w-2/3 mt-6 m-3 ">
                    <div className={`h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-10 m-2 ${sectionEdit === featuresValues.section ? `hover:bg-blue-600` : ''} `}><svg className="w-6 h-6 flex justify-center ml-2 mt-1.5 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg></div>
                    <div onClick={() => showModal(featuresValues.items[3].name.typeElement, featuresValues.section, 3)} className={`h-3 ${sectionEdit === featuresValues.section ? `hover:bg-green-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full m-2`}></div>
                    <div onClick={() => showModal(featuresValues.items[3].description.typeElement, featuresValues.section, 3)} className={`h-2 ${sectionEdit === featuresValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1`}></div>
                    <div onClick={() => showModal(featuresValues.items[3].description.typeElement, featuresValues.section, 3)} className={`h-2 ${sectionEdit === featuresValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1`}></div>
                    <div onClick={() => showModal(featuresValues.items[3].description.typeElement, featuresValues.section, 3)} className={`h-2 ${sectionEdit === featuresValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1`}></div>
              </div>
              <div className="flex flex-col items-center space-x-2 w-2/3 mt-6 m-3 ">
                    <div className={`h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-10 m-2 ${sectionEdit === featuresValues.section ? `hover:bg-blue-600` : ''} `}><svg className="w-6 h-6 flex justify-center ml-2 mt-1.5 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg></div>
                    <div onClick={() => showModal(featuresValues.items[4].name.typeElement, featuresValues.section, 4)} className={`h-3 ${sectionEdit === featuresValues.section ? `hover:bg-green-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full m-2`}></div>
                    <div onClick={() => showModal(featuresValues.items[4].description.typeElement, featuresValues.section, 4)} className={`h-2 ${sectionEdit === featuresValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1`}></div>
                    <div onClick={() => showModal(featuresValues.items[4].description.typeElement, featuresValues.section, 4)} className={`h-2 ${sectionEdit === featuresValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1`}></div>
                    <div onClick={() => showModal(featuresValues.items[4].description.typeElement, featuresValues.section, 4)} className={`h-2 ${sectionEdit === featuresValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1`}></div>
              </div>
              <div className="flex flex-col items-center space-x-2 w-2/3 mt-6 m-3 ">
                    <div className={`h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-10 m-2 ${sectionEdit === featuresValues.section ? `hover:bg-blue-600` : ''} `}><svg className="w-6 h-6 flex justify-center ml-2 mt-1.5 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg></div>
                    <div onClick={() => showModal(featuresValues.items[5].name.typeElement, featuresValues.section, 5)} className={`h-3 ${sectionEdit === featuresValues.section ? `hover:bg-green-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full m-2`}></div>
                    <div onClick={() => showModal(featuresValues.items[5].description.typeElement, featuresValues.section, 5)} className={`h-2 ${sectionEdit === featuresValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1`}></div>
                    <div onClick={() => showModal(featuresValues.items[5].description.typeElement, featuresValues.section, 5)} className={`h-2 ${sectionEdit === featuresValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1`}></div>
                    <div onClick={() => showModal(featuresValues.items[5].description.typeElement, featuresValues.section, 5)} className={`h-2 ${sectionEdit === featuresValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full m-1`}></div>
              </div>
              </div>

            </div>

        </div>

      </div>

      {featuresValues.section === sectionEdit ?
        <>
          <DrawerTitle showModal={showModal} modalValues={featuresValues.mainTitle} section={sectionEdit} />
          <DrawerDescription showModal={showModal} modalValues={featuresValues.secondTitle} section={sectionEdit} />

          {featuresValues.items.map((feaT, i) =>

            <div key={`dwt-features-${i}`}>
              <DrawerTitle showModal={showModal} modalValues={feaT.name} section={sectionEdit} dwi={i} />
              <DrawerDescription showModal={showModal} modalValues={feaT.description} section={sectionEdit} dwd={i} />
            </div>
          )}

        </>
         :
        <></>
        }


    </div>
    </>
  )
}
