import './App.css'
import { useState } from 'react';
import {Card} from './components/Card'
import { Form } from './components/Form'


function App() {

  const [usuario, setUsuario] = useState({});

  function handleUsuario (nombre, pelicula, color){
    setUsuario({nombre, pelicula, color});
  }

  return (
    <>
      <Form onUsuario = {handleUsuario}/>
      <Card nombre={usuario.nombre} pelicula={usuario.pelicula} color={usuario.color}/>
    </>
  )
}

export default App
