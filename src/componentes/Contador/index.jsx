import { useState } from 'react'
import './Contador.css'

const MIN = 0
const MAX = 50
const LIMITE = 40

function Contador() {
  const [contador, setContador] = useState(0)
  const [passo, setPasso] = useState(1)

  const decrementoBloqueado = contador === MIN || contador - passo < MIN
  const incrementoBloqueado = contador === MAX || contador + passo > MAX

  function incrementar() {
    if (contador + passo > MAX) return
    setContador(contador + passo)
  }

  function decrementar() {
    if (contador - passo < MIN) return
    setContador(contador - passo)
  }
    let status = 'normal'
  if (contador === MAX) status = 'completo'
  else if (contador >= LIMITE_ALERTA) status = 'alerta'

  return (
    <div>
            <div className={`display display--${status}`}>
        <p>{contador} / {MAX} caixas</p>
        {status === 'alerta' && <p> Capacidade atingida</p>}
        {status === 'completo' && <span className="badge">Lote Fechado</span>}
      </div>

      <input
        type="number"
        value={passo}
        onChange={(e) => setPasso(Number(e.target.value))}
      />

      <button onClick={decrementar} disabled={decrementoBloqueado}>- {passo}</button>
      <button onClick={incrementar} disabled={incrementoBloqueado}>+ {passo}</button>
    </div>
  )
}

export default Contador