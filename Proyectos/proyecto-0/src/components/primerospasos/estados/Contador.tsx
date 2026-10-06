import { useState } from "react"

type ContadorProps = {

titulo: string

valorInicial?: number

step?: number

maximo: number

}

function Contador({titulo, valorInicial = 0, step = 3}: ContadorProps) {

  const [valor, setValor] = useState(valorInicial)

  return (

    <>
    <div className="contador">

      <h3>{titulo}</h3>

      <p>Has pulsado {valor} veces</p>

      <p>Has pulsado {valor * 2} veces(doble)</p>

      <button onClick={() => setValor( valor + step)}>Sumar</button>
      <button onClick={() => setValor( valor - valor)}>Reiniciar</button>
      <button onClick={() => setValor( valor - step)}>Restar</button>
      
    </div>

    </>
  )
}

export default Contador