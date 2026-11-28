import PP from '../assets/PP.png'
import Alberto from '../assets/Alberto.jpg'

export function PartidoPopular() {
    return <div className="max-w-3xl mx-auto p-6">
        <div className="flex items-center justify-center gap-4 mb-8">
            <h1 className="text-6xl font-bold text-sky-600">El Partido Popular</h1>
            <img src={PP} alt="Logo Partido Popular" className="w-16 h-16 object-contain bg-white rounded-xl p-2 shadow-md" />
        </div>
        <main>
            <ul className="p-4">
                <li className="p-4"><strong className="text-sky-600">Economia e impuestos:</strong> El Partido Popular propone una bajada generalizada de impuestos para impulsar 
                    la economía.</li>
                <li className="p-4"><strong className="text-sky-600">Vivienda e infraestructura:</strong> Plantean construir un millón de viviendas y ejecutar un plan de infraestructuras
                    de más de 300.000 millones de euros a 15 años.</li>
                <li className="p-4"><strong className="text-sky-600">Sanidad, educación e inmigración:</strong> Defiende incorporar al menos 4.500 médicos a Atención Primaria, implantar
                    una prueba de acceso a la Universidad, conocida como EBAU, la cual sea común para toda España; y también endurecer 
                    la política migratoria.</li>
            </ul>
        <div className="flex items-center justify-center gap-5">
            <p>Representante: <strong className="text-sky-600">Alberto Núñez Feijóo</strong></p>
            <img src={Alberto} alt="Alberto Núñez Feijóo" className="h-80 w-64 object-cover object-top rounded-xl shadow-lg"/>
        </div>
        </main>
    </div>
}