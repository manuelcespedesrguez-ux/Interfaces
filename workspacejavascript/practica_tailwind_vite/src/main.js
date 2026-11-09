import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<h1 class="text-red-500 text-2xl">Titulo</h1>
<div class="text-fuchsia-700 text-xs">Prueba</div>
<div class="text-center bg-amber-100 text-black">Centro</div>
<span class="bg-amber-500 text-right text-black">Derecha</span>
<div class="italic">Cursiva</div>
<div class="font-semibold">Menos negrita</div>
<div class="font-bold">Negrita</div>
<div class="font-extrabold">Más negro</div>
<div class="m-4 p-5 bg-blue-500 text-black">CEBEM</div>
<div class="m-4 p-4 bg-linear-to-r from-white to-blue-200 text-black">PEPE</div>
<div class="m-4 p-2 border-4 border-manuel text-white font-cebem">ANTONIO</div>
<div class="bg-green-500 sm:bg-fuchsia-500 md:bg-amber-500 lg:bg-red-600 text-black">Responsive</div>
<nav class="m-4 flex flex-col sm:flex-row gap-4 mx-4">
    <a class="hover:text-blue-600 hover:text-2xl" href="#">Inicio</a>
    <a class="hover:text-red-600 hover:font-extrabold hover:text-3xl" href="#">Curso</a>
    <a class="hover:text-yellow-400 hover:italic hover:text-4xl" href="#">Mi clase</a>
</nav>
`

setupCounter(document.querySelector('#counter'))
