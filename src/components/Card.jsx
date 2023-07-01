export function Card(props){

    const {nombre, pelicula, color} = props;
    if(nombre && pelicula && color){
        return(
            <>
                <div className="card">
                    <div style={{backgroundColor: color}}>
                        <h2>Hola {nombre},</h2>
                        <p>🎞 Tu pelicula favorita es: {pelicula} 🎬</p>
                        <p>Tu color favorito es:</p>
                        <input type="color" name="color" id="color" defaultValue={color} value={color}/>
                    </div>
                </div>            
            </>
        )
    }
}