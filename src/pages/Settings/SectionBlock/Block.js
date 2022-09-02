import React from 'react'
import Banner from './Banner'
import Features from './Features'
import Team from './Team'
import Newsletter from './Newsletter'
import ModalTitle from '../ModalTitle'

export default function Block({sectionEdit, blockValues, editSection}){
  //console.log(blockValues)
  /**
  section: string //nombre de la sección
  **/

  function checkSection(section){
    switch (blockValues.section.toLowerCase()) {
      case 'banner':
        return <Banner sectionEdit={sectionEdit} bannerValues={blockValues} showModal={showModal} edit={editSection} />
        break;
      case 'features':
        return <Features sectionEdit={sectionEdit} featuresValues={blockValues} showModal={showModal} edit={editSection} />
        break;
      case 'team':
        return <Team sectionEdit={sectionEdit} teamValues={blockValues} showModal={showModal} edit={editSection} />
        break;
      case 'newsletter':
        return <Newsletter sectionEdit={sectionEdit} newsletterValues={blockValues} showModal={showModal} edit={editSection} />
        break;
    }
  }

  //const testfragmento = <Banner sectionEdit={sectionEdit} bannerValues={blockValues} showModal={showModal} />

  function showModal(type, section, i){
    console.log(`drawer-${type}-${section}${typeof i === 'number' ? `-${i}` : ''}`)
    //Cuando se realiza map a un componente se envia index o numero único para generar id
    const targetEl = document.getElementById(`drawer-${type}-${section}${typeof i === 'number' ? `-${i}` : ''}`);
    const blocker = document.getElementById('contentBlocker');
    //console.log(`drawer-${type}-${section}${typeof i === 'number' ? `-${i}` : ''}`)
    //Si tiene la clase la agrega, si no, la quita
    if(targetEl.classList.contains('slide-right')){
      //si está abierta
      targetEl.classList.remove('slide-right') //sacamos clase con animación para abrir
      blocker.classList.toggle('hidden')          //escondemos bloqueador de contenido
      document.getElementsByTagName('html')[0].style.overflow = "auto";
      targetEl.classList.add('slide-left')     //agregamos clase con animacion para esconder
    }else {
      //está cerrado
      targetEl.classList.add('slide-right')    //agregamos clase con animación para abrir
      blocker.classList.toggle('hidden')       //mostramos bloqueador de contenido
      document.getElementsByTagName('html')[0].style.overflow = "hidden";
      targetEl.classList.remove('slide-left')  //quitamos clase con animacion para esconder
    }
  }

  return(
    <>
      <div className="ribbon-1 bg-gray-700 border-blue-300 mt-6 mb-1">
        <h5 className="absolute text-2md tracking-tight text-white mt-1.5 ml-6 flex justify-between ">
          {`${blockValues.section[0].toUpperCase()}${blockValues.section.slice(1)}`}
        </h5>
      </div>
      <div className="flex justify-center items-center rounded-xl w-full p-3">
          <div className={`flex flex-col justify-center items-center w-full rounded-xl border-4 border-gray-700 ${sectionEdit === blockValues.section ? 'bg-gray-400' : ''}  border-dashed cursor-pointer`}>
            {checkSection(blockValues.section)}
          </div>
      </div>
    </>

  )
}
