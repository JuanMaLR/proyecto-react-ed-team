import { useEffect, useState } from "react"
import axios from "axios"
import "./App.css"
import CriptoGrid from "./components/CriptoGrid"

function App() {
  //Variables
  const API_URL = import.meta.env.VITE_API_URL
  const [criptos, setCriptos] = useState()
  
  //HTTP GET request using fetch
  /*useEffect(() => {
    fetch(`${API_URL}assets`)
    .then((res) => res.json())
    .then(data => {
      setCriptos(data.data)
    })
    .catch(() => console.error("La petición falló"))
  }, [])*/

  //HTTP GET request using axios
  useEffect(() => {
    axios.get(`${API_URL}assets`) //By default axios already converts the API response to JSON
    .then(data => {
      setCriptos(data.data.data)
    })
    .catch(() => console.error("La petición falló"))
  }, [])

  if(!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Lista de criptomonedas</h1>
      <div className="container">
        <div className="row">
          { criptos.map((cripto) => (<CriptoGrid key={cripto.id} {...cripto}/>)) }
        </div>
      </div>
    </>
  )
}

export default App
