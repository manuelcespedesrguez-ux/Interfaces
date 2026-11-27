import { Link, Route, Routes } from 'react-router'
import './App.css'
import { Productos } from './pages/Productos'
import { Contacto } from './pages/Contacto'
import { Alumno } from './components/Alumno'

function App() {

  return (
    <>
      <nav className='flex gap-4'>
        <Link to="/contacto">Contacto</Link>
        <Link to="/productos">Productos</Link>
      </nav>
      <main>
        <h1 className="text-blue-700!">Bienvenido</h1>
        <Alumno nombre="Manuel" edad={ 20 } />
      </main>
      <Routes>
        <Route path="/productos" element={<Productos />}/>
        <Route path="/contacto" element={<Contacto />}/>
      </Routes>
    </>
  )
}

export default App
