import { useState } from "react";

function IncrementarClicks() {

    const [indice, setIndice] = useState(0)

    const AumentarClicks = () => {

       setIndice(indice + 1); 

    }

  return (

    <div>
    <p>Clicks: {indice}</p>
    <br />
    <button onClick={AumentarClicks}>Suma 1 por click</button>
    <br />
    </div>

  )
}
export default IncrementarClicks