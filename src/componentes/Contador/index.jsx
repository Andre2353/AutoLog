import { useState } from 'react'

function Contador() {
  const [contador, setContador] = useState(0)
  const [passo, setPasso] = useState(1)

  return (
    <div>
      <p>{contador}</p>

      <input
        type="number"
        value={passo}
        onChange={(e) => setPasso(Number(e.target.value))}
      />

      <button onClick={() => setContador(contador - passo)}>- {passo}</button>
      <button onClick={() => setContador(contador + passo)}>+ {passo}</button>
    </div>
  )
}

export default Contador