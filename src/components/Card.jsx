export function Card(props){

    const {nombre, pelicula} = props;
    if(nombre && pelicula){
        return(
            <>
                <div className="card">
                    <h2>Hola {nombre},</h2>
                    <p>🎞 Tu pelicula favorita es: {pelicula} 🎬</p>
                </div>            
            </>
        )
    }
}