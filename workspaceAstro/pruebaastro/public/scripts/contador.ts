let contador = 0
    document.getElementById("btn")?.addEventListener("click", incrementar)
    function incrementar() {
        contador++;
        const element = document.getElementById("cont")
        if(element) {
            element.textContent = String(contador)
        }
    }