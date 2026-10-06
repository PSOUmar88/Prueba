type PieProps = {
  texto?: string
}

function Pie({texto = 'Tienda del ciclo · Curso 2026/2027'}:PieProps){

    return <footer className = "pie">{texto}</footer>

}

export default Pie