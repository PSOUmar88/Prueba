import { useState } from "react"

function PracticaClase() {

    const [texto, setTexto] = useState(String);

    const [visible1, setVisible1] = useState<Boolean>(false);

    const [visible2, setVisible2] = useState<Boolean>(false);

    const [visible3, setVisible3] = useState<Boolean>(false);

    const [actividad, setActividad] = useState(String);

    const [energia, setEnergia] = useState(String);

    const [tiempo, setTiempo] = useState(Number);

    const info = {'Deporte': ['Recuerda hidratarte', 'Haz calentamiento'], 
        'Lectura':['Busca un lugar cómodo', 'Ajusta la luz'], 
        'Música': ['Usa auriculares', 'Prueba géneros nuevos'], 
        'Cocina': ['Lee la receta completa', 'Ten los ingredientes listos']}
        

  return (
    <>
    
        <h2><b>Selector de actividades</b></h2>

            <p>
                Nombre <input value = {texto} onChange ={(e) => setTexto(e.target.value)} type="text" placeholder="Introduce un texto ..."></input>
                <button onClick={() => {setVisible1(!visible1);setTexto(texto)}}>Guardar</button>
                <button onClick={() => {setVisible1(false);setTexto("")}}>Resetear</button>
            </p>

            <p>¿Qué quieres hacer?</p>

            <p>
                
                <button onClick={() => {setVisible2(true);setVisible1(false);setActividad('Deporte')}}>Deporte</button>
                <button onClick={() => {setVisible2(true);setVisible1(false);setActividad('Lectura')}}>Lectura</button>
                <button onClick={() => {setVisible2(true);setVisible1(false);setActividad('Música')}}>Música</button>
                <button onClick={() => {setVisible2(true);setVisible1(false);setActividad('Cocina')}}>Cocina</button>
                <button onClick={() => {setVisible2(false);setVisible1(true);setActividad('')}}>Reset</button>

            </p>

                {visible2 && (<p>Selecciona el nivel de energía de tu actividad</p>)}
                
                {visible2 && (<p>

                    <button onClick={() => {setEnergia('Alto')}}>Alto</button>
                    <button onClick={() => {setEnergia('Medio')}}>Medio</button>
                    <button onClick={() => {setEnergia('Bajo')}}>Bajo</button>

                </p>)}

                 {visible2 && (<p>Nivel de energía seleccionado : {energia}</p>)}

                 {visible2 && (<p>Tiempo disponible {tiempo} minutos</p>)}

                 {visible2 && (<p><input type="range" min={15} max={180} step={15} value={tiempo}
                onChange={e => setTiempo(Number(e.target.value))} /></p>)}

            <p>
                
                <button onClick={() => {setVisible3(!visible3)}}>Mostrar recomendaciones</button>

                {visible3 && (
                    <div>
                    <h3>Recomendaciones para {actividad}</h3>
 
                    {actividad === 'Deporte' && (
                        <ul>
                            <li>{info.Deporte[0]}</li>
                            <li>{info.Deporte[1]}</li>
                        </ul>
                    )}
 
                    {actividad === 'Lectura' && (
                        <ul>
                            <li>{info.Lectura[0]}</li>
                            <li>{info.Lectura[1]}</li>
                        </ul>
                    )}
 
                    {actividad === 'Música' && (
                        <ul>
                            <li>{info.Música[0]}</li>
                            <li>{info.Música[1]}</li>
                        </ul>
                    )}
 
                    {actividad === 'Cocina' && (
                        <ul>
                            <li>{info.Cocina[0]}</li>
                            <li>{info.Cocina[1]}</li>
                        </ul>
                    )}
                </div>
            )}
  
            </p>

            {visible1 && (<p>Hola {texto}, no tienes actividad recomendada con nivel de energía bajo</p>)}

            {visible2 && (<p>Hola {texto}, tu actividad recomendada es {actividad} durante {tiempo} minutos al día con nivel de energía {energia}</p>)}

    </>
    
  )
}

export default PracticaClase