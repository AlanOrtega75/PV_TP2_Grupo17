let contenido = `
╔════════════════════╗
║ Números impares    ║
╠════════════════════╣
`;

for (let i = 1; i <= 20; i += 2) {

    contenido += `║ ${i}\n`;
}

contenido += "╚════════════════════╝";

console.log(contenido);