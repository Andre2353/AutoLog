import { useState } from 'react'
import './Contador.css'

const MIN = 0
const MAX = 50
const limite = 40

function Contador() {
  const [contador, setContador] = useState(0)
  const [passo, setPasso] = useState(1)
  const [ultimoLoteRegistrado, setUltimoLoteRegistrado] = useState(null)

  const decrementoBloqueado = contador === MIN || contador - passo < MIN
  const incrementoBloqueado = contador === MAX || contador + passo > MAX

  let status = 'normal'
  if (contador === MAX) status = 'completo'
  else if (contador >= limite) status = 'alerta'

  function incrementar() {
    setContador(contador + passo)
  }

  function decrementar() {
    setContador(contador - passo)
  }

  function mudarPasso(e) {
    let valor = Number(e.target.value)

    if (!valor || valor < 1) valor = 1
    if (valor > 10) valor = 10

    setPasso(valor)
  }

  function finalizarLote() {
    if (contador > 0) {
      setUltimoLoteRegistrado(contador)
    }
    setContador(0)
  }

  return (
    <div>
      <div className={`display display--${status}`}>
        <p>{contador} / {MAX} caixas</p>
        {status === 'alerta' && <p>Capacidade quase atingida</p>}
        {status === 'completo' && <span className="badge">Lote Fechado</span>}
      </div>

      <input type="number" value={passo} onChange={mudarPasso} />

      <button onClick={decrementar} disabled={decrementoBloqueado}>- {passo}</button>
      <button onClick={incrementar} disabled={incrementoBloqueado}>+ {passo}</button>
      <button onClick={finalizarLote}>Finalizar Lote</button>

      <p>
        Último lote finalizado:{' '}
        {ultimoLoteRegistrado !== null ? `${ultimoLoteRegistrado} caixas` : 'nenhum registro'}
      </p>
    </div>
  )
}

export default Contador