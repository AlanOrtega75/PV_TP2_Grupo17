const edades = [];

let suma = 0;

for (let i = 0; i < 8; i++) {

    const edad = Number(prompt(`Ingrese la edad ; ${i + 1}`));

    edades.push(edad);
}

let contenido = `
╔════════════════════╗
║ Lista de edades    ║
╠════════════════════╣
`;

for (let edad of edades) {

    contenido += `║ ${edad}\n`;

    suma += edad;
}

const promedio = suma / edades.length;

contenido += `║ Promedio: ${promedio}\n`;
contenido += "╚════════════════════╝";

console.log(contenido);