import { obtenerColorAleatorio } from "./Funciones25.js";

const boton = document.getElementById("btnColor");

boton.addEventListener("click", () => {
    const nuevoColor = obtenerColorAleatorio();
    document.body.style.backgroundColor = nuevoColor;
    console.log(`El color cambió a: ${nuevoColor}`);
});