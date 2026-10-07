const form = document.querySelector('#form')
const pais = document.querySelector('#pais') 
const resultado = document.querySelector('#resultado')

form.addEventListener('submit', buscarPaisPromesas)

function buscarPaisPromesas(event) {
    event.preventDefault();
    const API = 'https://api.restcountries.com/countries/v5?q='
    const API_KEY = 'rc_live_77cfeed35e524f91b87b6eafa53f68a7'

    if(!pais.value) return 

    fetch(
        API + pais.value,
        { headers: {'Authorization': 'Bearer ' + API_KEY } }
    )
    .then( response => response.json() ) 
    .then( info => {
        console.log(info);
        resultado.innerHTML = `
        <p>${info.data.objects[0].capitals[0].name}</p>
        <img src="${info.data.objects[0].flag.url_svg}"/>
        `
    })
    .catch(error => console.log('Error al consultar el país: ' + error));
}