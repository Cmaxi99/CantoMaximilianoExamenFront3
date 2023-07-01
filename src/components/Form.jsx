import { useState } from "react";
import { Card } from "./Card";


export function Form(props){

    const [nombre, setNombre] = useState('');
    const [pelicula, setPelicula] = useState('');
    const [color, setColor] = useState('');
    const [error, setError] = useState();

    function handleSubmit(e){
        e.preventDefault()
        if(nombre.length < 3 || pelicula.length < 6){
            setError('Por favor chequea que la información sea correcta');
        }
        else{
            props.onUsuario(nombre, pelicula, color);
            setError();
        }
    }

    function handleChangeNombre(e){
        setNombre(e.target.value.trim())
    }

    function handleChangePelicula(e){
        setPelicula(e.target.value)
    }

    function handleChangeColor(e){
        setColor(e.target.value)
    }

    function handleReset(){
        setNombre('');
        setPelicula('');
        setColor('');
        setError('');
    }

    return(
        <>
            <h1>Elige tu pelicula favorita</h1>
            <form onSubmit={handleSubmit} className="formulario">
                <input type="text" value={nombre} onChange={handleChangeNombre} placeholder="Ingrese su nombre" required/>
                <input type="text" value={pelicula} onChange={handleChangePelicula} placeholder="Ingrese su pelicula favorita"/>
                <input type="text" value={color} onChange={handleChangeColor} placeholder="Ingrese su color favorito"/>
                <button type="reset" onClick={handleReset}>Reiniciar</button>
                <button type="submit">Enviar</button>
                {error ? <p className="error">{error}</p> : null}        
            </form>
        </>
    )
}