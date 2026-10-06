import { useState } from "react"

function EstadoUsuario() {

    useState

    const [estado, setEstado] = useState<string>('rojo')

    const cambiarEstado = () => {

        if(estado === 'amarillo') {
            setEstado('verde')
        }else if(estado === 'verde') {
            setEstado('rojo')
        }else{
            setEstado('amarillo')
        }
    }
  return (
    <div>

        <h3>Estado usuario</h3>
        <p>Estado: {estado}</p>
        <br />
        <button onClick={() => {cambiarEstado()}}>Cambiar estado</button>
        <br />
        <small>Fin de componentes EstadoUsuario</small>

    </div>
  )
}

export default EstadoUsuario