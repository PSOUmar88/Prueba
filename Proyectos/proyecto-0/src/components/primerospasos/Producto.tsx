type ProductoProps = {

    nombre: string
    variante?: 'primario' | 'secundario'
    precio: number
    disponible: boolean

}

function Producto ({nombre, precio, disponible, variante}:ProductoProps){

return(

    <div> 

    <h3>{nombre}</h3>

    <p>{precio.toLocaleString('es-ES', {style: 'currency', currency: 'EUR'})}</p>
    
    <p>{disponible ? 'En stock' : 'Agotado'}</p>

    <p>{'variante:' + variante}</p>

    </div>

)

}

export default Producto