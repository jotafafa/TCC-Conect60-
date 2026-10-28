// Ligar/desligar o modo Alto Contraste
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// Aumentar e diminuir tamanho do texto do site
let currentZoom = 1;

function changeFontSize(direction) {
    currentZoom += direction * 0.1;
    if (currentZoom < 0.9) currentZoom = 0.9; // Limite mínimo
    if (currentZoom > 1.3) currentZoom = 1.3; // Limite máximo
    document.body.style.zoom = currentZoom;
}