import { mostrarSeleccion } from "./Funciones24.js";

const radios = document.querySelectorAll('input[name="lenguaje"]');

radios.forEach((radio) => {
    radio.addEventListener("change", mostrarSeleccion);
});