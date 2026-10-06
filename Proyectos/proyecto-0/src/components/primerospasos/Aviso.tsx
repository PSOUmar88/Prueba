import type { ReactNode } from 'react'

type AvisoProps = {
  tipo?: 'info' | 'exito' | 'error'
  titulo?: string
  children: ReactNode
}

const iconos = {info: 'ℹ️', exito: '✅', error: '⛔'}

function Aviso({ tipo = 'info', titulo = 'Aviso', children }: AvisoProps) {
  return (
    <div className={`aviso ${tipo}`}>
      <strong>{iconos[tipo]} {titulo}</strong>
      <div>{children}</div>
    </div>
  )
}

export default Aviso