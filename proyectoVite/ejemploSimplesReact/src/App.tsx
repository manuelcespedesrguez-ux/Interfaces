import { Link, Route, Routes } from 'react-router'
import './App.css'
import { Productos } from './pages/Productos'
import { Contacto } from './pages/Contacto'
import { Alumno } from './components/Alumno'
import { PartidoPopular } from './pages/PartidoPopular'
import { PartidoSocialista } from './pages/PartidoSocialista'
import { Vox1 } from './pages/Vox'
import { FA } from './pages/FrenteAmplio'

function App() {

  return (
    <>
      <nav className='flex gap-6 justify-center'>
        <Link to="/">Página Principal</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/partidopopular">Partido Popular</Link>
        <Link to="/partidosocialista">Partido Socialista Obrero Español</Link>
        <Link to="/vox">Vox</Link>
        <Link to="/frenteamplio">Frente Amplio</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <main className="mt-36 text-center">
              <h1 className="text-4xl text-blue-700 p-4">Bienvenido</h1>
              <Alumno nombre="Manuel" edad={20} />
            </main>
          }
        />
        <Route path="/productos" element={<Productos />}/>
        <Route path="/contacto" element={<Contacto />}/>
        <Route path="/partidopopular" element={<PartidoPopular/>}/>
        <Route path="/partidosocialista" element={<PartidoSocialista/>}/>
        <Route path="/vox" element={<Vox1/>}/>
        <Route path="/frenteamplio" element={<FA/>}/>
      </Routes>
    </>
  )
}

export default App
