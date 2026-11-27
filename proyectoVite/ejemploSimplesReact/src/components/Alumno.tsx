interface AlumnoProps{
    nombre: string,
    edad: number
}

export function Alumno({nombre, edad}:AlumnoProps) {
    return <div>
        <h2>Soy un alumno nuevo</h2>
        <p>Mi nombre es {nombre}</p>
        <p>Mi edad es {edad} años</p>
    </div>
}