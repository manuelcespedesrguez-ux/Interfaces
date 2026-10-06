const form = document.querySelector('#form')
const input = document.querySelector('#nombre')
const resultado = document.querySelector('#resultado')

form.addEventListener('submit', buscarPais)

function buscarPais(event) {
    event.preventDefault()

    const nombre = input.value.trim().toLowerCase()
    if (!nombre) return

    fetch(`https://api.restcountries.com/countries/v5?q=${nombre}`,
        { headers: { 'Authorization': 'rc_live_77cfeed35e524f91b87b6eafa53f68a7' } })
        .then((response) => {
            if (!response.ok) throw new Error(response.status)
            return response.json()
        })
        .then(respuesta => {
            const pais = respuesta.data.objects[0]
            resultado.innerHTML = `
                <img src="${pais.flag.url_svg}" width="80" alt="Bandera de ${pais.names.common}" />
                <h2>${pais.names.common}</h2>
                <h3>Capital: ${pais.capitals[0].name}</h3>
                <p>Población: ${pais.population.toLocaleString('es-ES')}</p>
            `
        })
        .catch((error) => {
            console.error(error)
            resultado.innerHTML = '<p>País no encontrado</p>'
        })
}