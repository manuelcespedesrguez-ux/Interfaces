import FrenteAmplio from '../assets/Logo_Frente_Amplio_España.svg.webp'
import Ada from '../assets/Ada.webp'

export function FA() {
    return <div className="max-w-3xl mx-auto p-6">
        <div className="flex items-center justify-center gap-4 mb-8">
            <h1 className="text-6xl font-bold text-orange-400">Frente Amplio</h1>
            <img src={FrenteAmplio} alt="Logo Partido Socialista" className="w-16 h-16 object-contain bg-white rounded-xl p-2 shadow-md" />
        </div>
        <main>
            <ul className="p-4">
                <li className="p-4"><strong className="text-orange-400">Vivienda e infraestructura:</strong> Es su eje central; propone crear 1,5 
                    millones de viviendas públicas en alquiler asequible en 12 años, limitar los precios de alquiler en zonas tensionadas, prohibir
                    los desahucios sin alternativa habitacional y expropiar inmuebles a grandes propietarios corporativos.
                </li>
                <li className="p-4"><strong className="text-orange-400">Fiscalidad:</strong> Defiende una reforma fiscal progresiva con una tasa 
                    del 3 % a patrimonios superiores a 50 millones de euros (Tasa Zucman), un tipo mínimo del 20 % en Sociedades para grandes 
                    corporaciones y una rebaja del IRPF para rentas inferiores a 27.000 euros.
                </li>
                <li className="p-4"><strong className="text-orange-400">Trabajo:</strong> Plantea avanzar hacia la reducción 
                de la jornada laboral a 32 horas semanales.
                </li>
            </ul>
        <div className="flex items-center justify-center gap-5">
            <p>Representante: <strong className="text-orange-400">Ada Colau Ballano</strong></p>
            <img src={Ada} alt="Ada Colau Ballano" className="h-80 w-64 object-cover object-top rounded-xl shadow-lg" />
        </div>
        </main>
    </div>
}