export async function GET() {
    const fecha = new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" })
    return new Response(
        JSON.stringify({
            laFecha: fecha,
            msg: "Hola"
        }),
        { headers: {"Content-Type": "application/json"} }
    )
}