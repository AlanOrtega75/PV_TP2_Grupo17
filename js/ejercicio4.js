const base = Number(prompt("Ingrese la base del rectángulo en cm ; "));
const altura = Number(prompt("Ingrese la altura del rectángulo en cm ; "));

const area = base * altura;
const perimetro = 2 * (base + altura);

console.log(`
╔════════════════════════════╗
║ Rectángulo                 ║
╠════════════════════════════╣
║ Área: ${area} cm²
║ Perímetro: ${perimetro} cm
╚════════════════════════════╝
`);