import React from 'react'
import { Footer } from 'flowbite-react'
import {Link} from 'react-router-dom'
import configData from '../../config/footer.json'

export default function PiePagina(){
  const f = configData.FOOTER
  //console.log('Pie de página manda error, Link es un a')
  return(
    <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {f.year} <a href="https://flowbite.com/" className="hover:underline">{f.nameWeb}™</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <Link to='/about' className="mr-4 hover:underline md:mr-6">About</Link>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
            </li>
            <li>
                <Link to='/contact' className="mr-4 hover:underline md:mr-6">Contact</Link>
            </li>
        </ul>
    </footer>
  )
}
