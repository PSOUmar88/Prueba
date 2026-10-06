import { useState } from "react"


function AlternarContenido() {

    const [claro, setClaro] = useState<boolean>(true)
  return (
    <div>

        <h3>Alternar contenidos</h3>
        <p>El día esta: </p>
        {
            claro ? (<p>claro</p>):(<p>oscuro</p>)
        }
        <button onClick={() => {setClaro(!claro)}}>Cambiar claridad</button>
        <br />
        <small>Fin de componentes MostrarOcultar</small>

    </div>
  )
}

export default AlternarContenido