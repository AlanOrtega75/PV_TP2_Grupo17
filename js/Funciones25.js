const colores = ["#ff2f00","#00ff2f","#002fff","#ffcc00","#b700ff",];

export function obtenerColorAleatorio() {
    const indice = Math.floor(Math.random() * colores.length);

    return colores[indice];
}