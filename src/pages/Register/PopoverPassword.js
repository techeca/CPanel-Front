import React from 'react'

export default function PopoverPassword({vpass}){

  return(
    <div id="popover-password" role="tooltip" className="mt-3 absolute invisible z-10 w-72 text-sm font-light text-gray-500 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 transition-opacity duration-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">

          <div className='spArrow absolute left-1/2' data-popper-arrow style={{marginTop:'-5px', border:'1px 0px 0px 1px solid #4B5563', borderWidth:'1px'}}></div>
           <div className="p-3 space-y-2">
               <h3 className="font-semibold text-gray-900 dark:text-white">Must have at least 8 characters {vpass.hn}</h3>

               <div className="grid grid-cols-4 gap-2">
                   <div className={`h-1 bg-orange-30 dark:bg-${vpass.total > 0 ? 'orange-400' : 'gray-600'}`}></div>
                   <div className={`h-1 bg-orange-300 dark:bg-${vpass.total > 1 ? 'orange-400' : 'gray-600'}`}></div>
                   <div className={`h-1 bg-gray-200 dark:bg-${vpass.total > 2 ? 'orange-400' : 'gray-600'}`}></div>
                   <div className={`h-1 bg-gray-200 dark:bg-${vpass.total > 3 ? 'orange-400' : 'gray-600'}`}></div>
               </div>
               <p>It’s better to have:</p>
               <ul>
                   <li className="flex items-center mb-1">
                       {vpass.hlu && vpass.hll ?
                         <svg className="mr-2 w-4 h-4 text-green-400 dark:text-green-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                         :
                         <svg className="mr-2 w-4 h-4 text-gray-300 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                       }
                       Upper & lower case letters
                   </li>
                   <li className="flex items-center mb-1">
                      {vpass.hn ?
                        <svg className="mr-2 w-4 h-4 text-green-400 dark:text-green-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        :
                        <svg className="mr-2 w-4 h-4 text-gray-300 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      }
                      A number
                   </li>
                   <li className="flex items-center">
                     {vpass.hn ?
                       <svg className="mr-2 w-4 h-4 text-green-400 dark:text-green-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                       :
                       <svg className="mr-2 w-4 h-4 text-gray-300 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                     }
                       A longer password (min. 12 chars.)(not working yet)
                   </li>
               </ul>
           </div>
    </div>
  )
}
