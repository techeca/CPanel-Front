import React from 'react'

export default function Banner({sectionEdit, bannerValues, showModal}){

  return(
    <div className="flex flex-row bg-white dark:bg-gray-800 items-center pb-10 px-5 justify-center w-full">
        <div role="status" className="lg:w-4/5  md:w-full sm:w-full space-y-8 animate-pulse sm:space-y-0 sm:space-x-8 sm:flex sm:items-center mt-6">
            <div className="w-full">
            <div className="mt-9">
                <div onClick={() => showModal(bannerValues.type, bannerValues.section)} className={`h-4 bg-gray-200 ${sectionEdit === bannerValues.section ? `hover:bg-green-700` : ''} rounded-full dark:bg-gray-700 w-3/4 mb-4`}></div>
            </div>
            <div className="mt-9">
                <div onClick={() => showModal(bannerValues.type, bannerValues.section)} className={`h-2 ${sectionEdit === bannerValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5`}></div>
                <div onClick={() => showModal(bannerValues.type, bannerValues.section)} className={`h-2 ${sectionEdit === bannerValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5`}></div>
                <div onClick={() => showModal(bannerValues.type, bannerValues.section)} className={`h-2 ${sectionEdit === bannerValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5`}></div>
                <div onClick={() => showModal(bannerValues.type, bannerValues.section)} className={`h-2 ${sectionEdit === bannerValues.section ? `hover:bg-red-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5`}></div>
            </div>
            <div className="flex items-center space-x-2 w-2/3 mt-6">
                  <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-20"></div>
                  <div onClick={() => showModal(bannerValues.type, bannerValues.section)} className={`h-6 ${sectionEdit === bannerValues.section ? `hover:bg-yellow-400` : ''}  bg-gray-200 rounded-full dark:bg-gray-700 w-20`}></div>
                  <div className={`h-6 ${sectionEdit === bannerValues.section ? `hover:bg-purple-700` : ''} bg-gray-200 rounded-full dark:bg-gray-700 w-20`}></div>
            </div>
            </div>
            <div role="status" className="w-full pt-3 space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:items-center">
              <div onClick={() => showModal(bannerValues.type, bannerValues.section)} className={`flex ${sectionEdit === bannerValues.section ? `hover:bg-blue-600` : ''} justify-center items-center h-48 bg-gray-300 rounded  dark:bg-gray-700`}>
                  <svg className="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
              </div>
            </div>
        </div>
    </div>
  )
}
