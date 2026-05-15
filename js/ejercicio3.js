const radio = Number(prompt("Ingrese el radio de la esfera; "));

const volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);

console.log(`
╔════════════════════════════╗
║ Volumen de la esfera       ║
╠════════════════════════════╣
║ ${volumen.toFixed(2)} m³
╚════════════════════════════╝
`);