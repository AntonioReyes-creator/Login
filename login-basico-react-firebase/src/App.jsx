/* eslint-disable no-unused-vars */
import { useState } from 'react'
import appFirebase from "../src/credenciales"
import './App.css'

import { getAuth, onAuthStateChanged } from 'firebase/auth'
//sirve para saver si esta loguedo o no

const auth = getAuth(appFirebase)

//importamos nuestros componentes
import Home from './components/Home'
import Login from './components/Login'

function App() {
  const [usuario, setUsuario] = useState(null)
  onAuthStateChanged(auth,(usuarioFirebase)=>{
    if(usuarioFirebase){
      setUsuario(usuarioFirebase)
    }
    else{
      setUsuario(null)
    }
  })

  return (
 <div>
  {
    usuario ? <Home correoUsuario={usuario.email} />:<Login/>
  }

 </div>
  )
}

export default App
