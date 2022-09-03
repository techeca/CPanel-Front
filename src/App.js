import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'
//import RecoverPassword from './pages/RecoverPassword'
import UserPanel from './pages/UserPanel'
import CPanel from './pages/CPanel'
import Settings from './pages/Settings'
import Page404 from './pages/404'
import Navegacion from './components/Navegacion'
import MenuIzquierdo from './components/MenuIzquierdo'
import PiePagina from './components/PiePagina'
import AlertF from './components/AlertF'
import Loading from './components/Loading'
import { AlertContextProvider } from './context/AlertContext'
//import useAlert from './hooks/useAlert'
import configData from './config/footer.json'

function App() {
  const location = useLocation();
  const categorias = ['Home','About','Contact']
  const sideCategorias = ['Dashboard','Blog','Inbox','Users','Products']

  return (
    <div className="App bg-slate-200 dark:bg-gray-900 p-2" >
      <AlertContextProvider>
      <div className='navegacion'>
        <Navegacion categorias={categorias} />
      </div>
      <div className='App-body'>
        {location.pathname.includes('/cpanel') ? <MenuIzquierdo sideCategorias={sideCategorias} /> : ''}
        <div className='main'>
          <div style={{zIndex:1, position:'fixed', visibility:'hidden'}}>
            <AlertF />
          </div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/loading' element={<Loading />} />
            <Route path='/cpanel' element={<CPanel />} />
            <Route path='/cpanel/settings' element={<Settings />} />
            <Route path='/upanel' element={<UserPanel />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
        </div>
      </div>
      <div className='piePagina'>
        <PiePagina sideCategorias={sideCategorias} f={configData.FOOTER} />
      </div >
      </AlertContextProvider>
    </div>
  );
}

export default App;
