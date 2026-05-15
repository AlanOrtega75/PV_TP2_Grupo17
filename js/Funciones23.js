export const mostrarTexto = () => {

    const input = document.querySelector("#texto");

    const resultado = document.querySelector("#resultado");

    resultado.textContent = input.value;

    if (input.value.length > 20) {
        resultado.style.backgroundColor = "lightgreen";
    } else {
        resultado.style.backgroundColor = "white";
    }
};