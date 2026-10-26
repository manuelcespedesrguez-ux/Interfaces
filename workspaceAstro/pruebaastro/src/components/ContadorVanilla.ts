// src/scripts/contador.ts
const btn = document.getElementById('btn');
const cont = document.getElementById('cont');
let count = 0;

btn?.addEventListener('click', () => {
  count++;
  if (cont) {
    cont.textContent = count.toString();
  }
});