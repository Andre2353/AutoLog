import { useState } from 'react'

const MIN = 0
const MAX = 50

function Contador() {
  const [contador, setContador] = useState(0)
  const [passo, setPasso] = useState(1)

  function incrementar() {
    if (contador + passo > MAX) return
    setContador(contador + passo)
  }

  function decrementar() {
    if (contador - passo < MIN) return
    setContador(contador - passo)
  }

  return (
    <div>
      <p>{contador}</p>

      <input
        type="number"
        value={passo}
        onChange={(e) => setPasso(Number(e.target.value))}
      />

      <button onClick={decrementar}>- {passo}</button>
      <button onClick={incrementar}>+ {passo}</button>
    </div>
  )
}

export default Contador