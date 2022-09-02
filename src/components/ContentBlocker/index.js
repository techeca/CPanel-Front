import React from 'react'

//Recibe boolean
//z-indez 10 modal
export default function ContentBlocker({show, zindex}){

  function showModal(show){
    const blocker = document.getElementById('contentBlocker');
    blocker.classList.toggle('hidden')
  }

  return(
    <div id='contentBlocker' className={`${show ? '' : 'hidden' } z-${zindex ? zindex : 10} left-0 right-0 bottom-0 bg-black opacity-50`}></div>
  )
}
