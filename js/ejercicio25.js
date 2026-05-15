const colores = [
    { nombre: 'Aguamarina', valor: '#7fd8be' },
    { nombre: 'Lavanda', valor: '#c8b5ff' },
    { nombre: 'Melocotón', valor: '#ffb07c' },
    { nombre: 'Verde menta', valor: '#8de0c0' },
    { nombre: 'Azul noche', valor: '#203d7b' },
    { nombre: 'Rosa suave', valor: '#ff8fb1' }
];

const button = document.getElementById('changeColorBtn');
const colorName = document.getElementById('colorName');
let ultimoIndice = -1;

function colorAleatorio() {
    let indice = Math.floor(Math.random() * colores.length);
    while (indice === ultimoIndice && colores.length > 1) {
        indice = Math.floor(Math.random() * colores.length);
    }
    ultimoIndice = indice;
    return colores[indice];
}

function cambiarColor() {
    const nuevoColor = colorAleatorio();
    document.body.style.background = nuevoColor.valor;
    colorName.textContent = nuevoColor.nombre;
    console.log('Color de fondo cambiado a:', nuevoColor.nombre, nuevoColor.valor);
}

button.addEventListener('click', cambiarColor);
