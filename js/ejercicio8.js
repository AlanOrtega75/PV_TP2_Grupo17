const notas = [];

let suma = 0;
let aprobadas = 0;

for (let i = 0; i < 10; i++) {

    const nota = Number(prompt(`Ingrese la nota ${i + 1}`));

    notas.push(nota);
}

let contenido = `
╔════════════════════════╗
║ Lista de notas         ║
╠════════════════════════╣
`;

for (let nota of notas) {

    contenido += `║ Nota: ${nota}\n`;

    if (nota >= 6) {

        contenido += "║ ✔ Aprobada\n";

        aprobadas++;

    } else {

        contenido += "║ ✘ Desaprobada\n";
    }

    suma += nota;
}

const promedio = suma / notas.length;

contenido += `║ Promedio: ${promedio}\n`;
contenido += `║ Aprobadas: ${aprobadas}\n`;
contenido += "╚════════════════════════╝";

console.log(contenido);