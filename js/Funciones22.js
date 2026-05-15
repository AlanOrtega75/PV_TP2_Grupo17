export const mostrarTexto = () => {
    
    const input = document.querySelector("#texto");
    const resultado = document.querySelector("#resultado");

    resultado.textContent = input.value;
};