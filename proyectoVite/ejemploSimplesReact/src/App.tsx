import './App.css'
import Alumno from './components/Alumno'

function App() {

  return (
    <main>
      <h1 className="text-blue-700!">Bienvenido</h1>
      <Alumno nombre="Manolo" edad="20" />
    </main>
  )
}

export default App
