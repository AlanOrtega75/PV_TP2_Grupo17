const horas = Number(prompt("Ingrese las horas ;"));
const minutos = Number(prompt("Ingrese los minutos ;"));

const segundos = (horas * 3600) + (minutos * 60);

console.log(`
╔════════════════════════════╗
║ Conversión a segundos      ║
╠════════════════════════════╣
║ Horas: ${horas}
║ Minutos: ${minutos}
║ Segundos: ${segundos}
╚════════════════════════════╝
`);