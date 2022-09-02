import React from 'react'

export default function DrawerDescription({showModalDescriptionBanner}){

  return(
    <div id="drawerDescriptionBanner" className="left-[-320px] top-0 z-40 fixed h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800" tabIndex="-1" aria-labelledby="drawer-form-label">
       <h5 id="drawer-label" className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"><svg className="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
        Edit Description - Banner
       </h5>
       <button type="button" onClick={showModalDescriptionBanner} data-drawer-dismiss="drawer-form" aria-controls="drawer-form" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          <span className="sr-only">Close menu</span>
       </button>
       <form className="mb-6">

          <div className="mb-6">
             <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Description</label>
             <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write event description..."></textarea>
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
              <label className="block mb-2 ml-[12px] text-sm font-medium text-gray-900 dark:text-gray-400"> Comic-Sans</label>
            </div>

             <div className='flex flex-row'>
                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option>Comic Sans</option>
                  <option>Arial</option>
                  <option>France</option>
                  <option>Germany</option>
                </select>
             </div>
          </div>

          <div className="mb-6">
             <label htmlFor="font" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Preview</label>
             <div className='flex flex-row'>
                <input type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="This is a preview in Dark mode" required/>
             </div>
             <div className='flex flex-row'>
                <input type="text" id="title" className="bg-gray-50 mt-[6px] border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="This is a preview in Light mode" required/>
             </div>
          </div>
          <button type="submit" className="text-white justify-center flex items-center bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Save
           </button>
       </form>
    </div>
  )
}
