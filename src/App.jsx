import './App.css'
import { useState } from 'react';
import {Card} from './components/Card'
import { Form } from './components/Form'


function App() {

  const [usuario, setUsuario] = useState({});

  function handleUsuario (nombre, pelicula){
    setUsuario({nombre, pelicula});
  }

  return (
    <>
      <Form onUsuario = {handleUsuario}/>
      {
        usuario ? <Card nombre={usuario.nombre} pelicula={usuario.pelicula}/> : null
      }
    </>
  )
}

export default App
