const form = document.querySelector('#form')
const pais = document.querySelector('#pais') 
const resultado = document.querySelector('#resultado')

form.addEventListener('click', buscarPaisAsynAwait)
const API = 'https://api.restcountries.com/countries/v5?q='
const API_KEY = 'rc_live_77cfeed35e524f91b87b6eafa53f68a7'

async function buscarPaisAsynAwait(event) {
   event.preventDefault();

   if(!pais.value) return 
    try {
        const response = await fetch (
            API + pais.value,
            { headers: {'Authorization': 'Bearer ' + API_KEY}}
        )

        const info = await response.json()

        resultado.innerHTML = `
            <p>${info.data.objects[0].capitals[0].name}</p>
            <img src="${info.data.objects[0].flag.url_svg}"/>
        `
    } catch (error) {
        console.log("Ha ocurrido un error: " + error.message)
    } 
}
