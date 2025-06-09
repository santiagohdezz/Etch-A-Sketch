const contenedor = document.getElementById('contenedor');

for (i = 0; i < 16 * 16; i++) {
    const caja = document.createElement("div");
    caja.classList.add('caja');
    contenedor.appendChild(caja);
}