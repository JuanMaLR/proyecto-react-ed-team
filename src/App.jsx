import { useEffect, useState } from "react"

function App() {

  const [criptos, setCriptos] = useState();

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
    .then((res) => res.json())
    .then(data => {
      setCriptos(data.data)
    })
    .catch(() => console.error("La petición falló"))
  }, [])

  if(!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Lista de criptomonedas</h1>
      <ol>
        { criptos.map(({name, priceUsd}) => (<li key={name}>Nombre {name} Precio: {priceUsd}</li>)) }
      </ol>
    </>
  )
}

export default App
