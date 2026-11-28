import Vox from '../assets/Vox.webp'
import Abascal from '../assets/Abascal.jpg'

export function Vox1() {
    return <div className="max-w-3xl mx-auto p-6">
        <div className="flex items-center justify-center gap-4 mb-8">
            <h1 className="text-6xl font-bold text-green-600">Vox</h1>
            <img src={Vox} alt="Logo Vox" className="w-16 h-16 object-contain bg-white rounded-xl p-2 shadow-md" />
        </div>
        <main>
            <ul className="p-4">
                <li className="p-4"><strong className="text-green-600">Inmigración y fronteras:</strong> Propone la deportación de inmigrantes en 
                    situación irregular, la "remigración", el refuerzo y militarización de las fronteras de Ceuta y Melilla, y la "prioridad nacional" 
                    para los españoles en el acceso a las ayudas sociales.
                </li>
                <li className="p-4"><strong className="text-green-600">Economía, impuestos y Administración:</strong> Defiende una rebaja masiva 
                    de impuestos, la desregulación económica y reducir el tamaño de la Administración eliminando subvenciones a partidos, 
                    sindicatos y ONGs.
                </li>
                <li className="p-4"><strong className="text-green-600">Energía y vivienda:</strong> Propone recuperar el plan de energía nuclear 
                    alargando la vida de las centrales, derogar la Ley de Vivienda y liberalizar el suelo para construir más.
                </li>
            </ul>
        <div className="flex items-center justify-center gap-5">
            <p>Representante: <strong className="text-green-600">Santiago Abascal Conde</strong></p>
            <img src={Abascal} alt="Santiago Abascal Conde" className="h-80 w-64 object-cover object-top rounded-xl shadow-lg" />
        </div>
        </main>
    </div>
}