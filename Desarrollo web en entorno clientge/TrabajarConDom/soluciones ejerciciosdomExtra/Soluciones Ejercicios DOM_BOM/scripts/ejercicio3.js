let colorSeleccionado = "#1B4370";

function dibujarCeldas() {
    let panelCeldas = document.getElementById("panel");
    let celdas = "";
    for (let i = 0; i < 3600; i++) {
        celdas += "<div class='celda' onmouseover='cambiarColorCelda(this);'></div>";
    }
    panelCeldas.innerHTML = celdas;
}

function aplicarColor() {
    let colorInput = document.getElementById("selColor");
    (document.getElementById("color")).style.backgroundColor = colorInput.value;
    colorSeleccionado = colorInput.value;
}

function cambiarColorCelda(celda) {
    celda.style.backgroundColor = colorSeleccionado;

}