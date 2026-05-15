const nombres = [];

for (let i = 0; i < 6; i++) {

    const nombre = prompt(`Ingrese el nombre ${i + 1}`);

    nombres.push(nombre);
}

let nombreMasLargo = "";

let contenido = `
╔════════════════════╗
║ Lista de nombres   ║
╠════════════════════╣
`;

for (let nombre of nombres) {

    contenido += `║ ${nombre}\n`;

    if (nombre.length > nombreMasLargo.length) {

        nombreMasLargo = nombre;
    }
}

contenido += `║ Más largo: ${nombreMasLargo}\n`;
contenido += "╚════════════════════╝";

console.log(contenido);