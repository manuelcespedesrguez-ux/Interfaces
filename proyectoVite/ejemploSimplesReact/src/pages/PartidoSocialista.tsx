import PSOE from '../assets/PSOE.png'
import Pedro from '../assets/Pedro.jpg'

export function PartidoSocialista() {
    return <div className="max-w-3xl mx-auto p-6">
        <div className="flex items-center justify-center gap-4 mb-8">
            <h1 className="text-6xl font-bold text-red-600">Partido Socialista Obrero Español</h1>
            <img src={PSOE} alt="Logo Partido Socialista" className="w-24 h-24 shrink-0 object-contain bg-white rounded-xl p-1 shadow-md" />
        </div>
        <main>
            <ul className="p-4">
                <li className="p-4"><strong className="text-red-600">Empleo y salarios:</strong> Propone reducir la jornada laboral a 37,5 horas 
                    semanales sin bajada de sueldo (con el objetivo de avanzar hacia las 35 horas) y mantener el Salario Mínimo Interprofesional (SMI) 
                    por encima del 60 % del salario medio.
                </li>
                <li className="p-4"><strong className="text-red-600">Vivienda e infraestructura:</strong> Plantea destinar el 1 % del PIB anual a 
                    políticas de vivienda y crear un parque público de 100.000 viviendas asequibles.
                </li>
                <li className="p-4"><strong className="text-red-600">Servicios públicos y derechos:</strong> Aboga por blindar las pensiones con 
                    el IPC y el derecho al aborto en la Constitución, universalizar la educación pública de 0 a 3 años y reforzar la sanidad pública 
                    (con atención psicológica gratuita en un máximo de 30 días).
                </li>
            </ul>
        <div className="flex items-center justify-center gap-5">
            <p>Representante: <strong className="text-red-600">Pedro Sánchez Pérez-Castejón</strong></p>
            <img src={Pedro} alt="Pedro Sánchez Pérez-Castejón" className="h-80 w-64 object-cover object-top rounded-xl shadow-lg" />
        </div>
        </main>
    </div>
}