import { useState } from "react"

function Colores() {

    const [color, setColor] = useState<string>("blanco")

  return (
    <div>

        <p>Color: {color}</p>

    <button onClick={()=> setColor("rojo")}>Cambiar color 1</button>
    <br />
    <button onClick={()=> setColor("azul")}>Cambiar color 2</button>
    <br />
    <button onClick={()=> setColor("negro")}>Cambiar color 3</button>
    <br />
    <small>Cambio de colores</small>
    </div>
  )
}

export default Colores