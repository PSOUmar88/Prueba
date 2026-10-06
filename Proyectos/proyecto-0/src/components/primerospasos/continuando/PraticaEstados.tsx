import { useState } from "react";

function PraticaEstados() {

    const arrayEstados: number[] = [1,2,3,4,5,6,7];

    const [indice, setIndice] = useState(0)

    const PasarSiguiente = () => {

        if (indice === (arrayEstados.length - 1)){

            setIndice(0);

        } else 

            setIndice(indice + 1);

    }

  return (

    <div>

    <p>Estado: {arrayEstados[indice]}</p>
    <br />
    <button onClick={PasarSiguiente}>Pasar al siguiente</button>
    <br />
    </div>

  )
}

export default PraticaEstados