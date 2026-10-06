import { useState } from "react"

function EscribirTexto() {

    const [texto, setTexto] = useState('')
    const [texto1, setTexto1] = useState('')

  return (
    <div>

    <input onChange ={(e) => setTexto(e.target.value)} type="text" placeholder="Introduce un texto ..."></input>
    <p>Escribiste: {texto}</p>
    <input onChange ={(e) => setTexto1(e.target.value)} type="text" placeholder="Introduce un texto ..."></input>
    <p>Escribiste: {texto1}</p>
    <small>Fin del componente EjemploImput</small>

    </div>
  )
}

export default EscribirTexto