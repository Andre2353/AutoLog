import { useState } from 'react'

  const decrementoBloqueado = contador === MIN || contador - passo < MIN
  const incrementoBloqueado = contador === MAX || contador + passo > MAX

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

     <button onClick={decrementar} disabled={decrementoBloqueado}>- {passo}</button>
      <button onClick={incrementar} disabled={incrementoBloqueado}>+ {passo}</button>
    </div>
  )
}

export default Contador