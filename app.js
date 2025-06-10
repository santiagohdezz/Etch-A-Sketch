const contenedor = document.getElementById('contenedor');

function colorAleatorio() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

contenedor.style.gridTemplateColumns = `repeat(16, 1fr)`;
contenedor.style.gridTemplateRows = `repeat(16, 1fr)`;

for (let i = 0; i < 16 * 16; i++) {
    const caja = document.createElement("div");
    caja.classList.add('caja');
    caja.addEventListener('mouseover', function() {
        caja.style.backgroundColor = colorAleatorio();
    });
    contenedor.appendChild(caja);
}

const boton = document.getElementById('botonCuadricula');

function nuevaCuadricula() {
    const nuevoTamano = prompt("Ingrese el tamaño de la nueva cuadricula (max: 100):");
    const lados = parseInt(nuevoTamano);
    contenedor.innerHTML = '';
    contenedor.style.gridTemplateColumns = `repeat(${lados}, 1fr)`;
    contenedor.style.gridTemplateRows = `repeat(${lados}, 1fr)`;

    for (let i = 0; i < lados * lados; i++) {
        const caja = document.createElement('div');
        caja.classList.add('caja');
        caja.addEventListener('mouseover', function() {
            caja.style.backgroundColor = colorAleatorio();
        });
        contenedor.appendChild(caja);
    }
}

boton.addEventListener('click', nuevaCuadricula);
