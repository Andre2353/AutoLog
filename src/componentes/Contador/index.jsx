import { useState } from 'react'
import './Contador.css'

const MIN = 0
const MAX = 50
const LIMITE_ALERTA = 40

function Contador() {
  const [contador, setContador] = useState(0)
  const [passo, setPasso] = useState(1)
  const [ultimoLoteRegistrado, setUltimoLoteRegistrado] = useState(null)

  const decrementoBloqueado = contador === MIN || contador - passo < MIN
  const incrementoBloqueado = contador === MAX || contador + passo > MAX

  let status = 'normal'
  if (contador === MAX) status = 'completo'
  else if (contador >= LIMITE_ALERTA) status = 'alerta'

  function incrementar() {
    if (contador + passo > MAX) return
    setContador(contador + passo)
  }

  function decrementar() {
    if (contador - passo < MIN) return
    setContador(contador - passo)
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
        {status === 'alerta' && <p>⚠️ Capacidade quase atingida</p>}
        {status === 'completo' && <span className="badge">Lote Fechado</span>}
      </div>

      <input
        type="number"
        value={passo}
        onChange={(e) => setPasso(Number(e.target.value))}
      />

      <button onClick={decrementar} disabled={decrementoBloqueado}>- {passo}</button>
      <button onClick={incrementar} disabled={incrementoBloqueado}>+ {passo}</button>
      <button onClick={finalizarLote}>Finalizar Lote</button>

      <p>
        Último lote finalizado:{' '}
        <strong>
          {ultimoLoteRegistrado !== null ? `${ultimoLoteRegistrado} caixas` : 'nenhum registro'}
        </strong>
      </p>
    </div>
  )
}

export default Contador