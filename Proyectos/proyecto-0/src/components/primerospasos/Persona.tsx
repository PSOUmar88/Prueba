
type informacion = {

nombre: string

edad: number

descripcion: string

}


function InfoPersonal({nombre, edad, descripcion}: informacion){

    return(

        <>

            <h2 className="atencion">Componente InfoPersonal</h2>
            <p>Nombre: {nombre}</p>
            <p>Edad: {edad} </p>
            <p>Descripción: {descripcion}</p>

        </>

    )

}

export default InfoPersonal

type listaHobbies = {

hobbie1: 'Programar'
hobbie2: 'Jugar a videojuegos'
hobbie3: 'Hacer ejercicio'
hobbie4: 'Leer'

}

function MisHobbies({hobbie1, hobbie2, hobbie3, hobbie4}: listaHobbies){

    return(
       <div>

        <h2>MIS HOBBIES</h2>
        <p>- {hobbie1}</p>
        <p>- {hobbie2}</p>
        <p>- {hobbie3}</p>
        <p>- {hobbie4}</p>

       </div>
    )

}

