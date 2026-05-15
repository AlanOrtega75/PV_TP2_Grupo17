export const mostrarSeleccion = () => {

    const opcionSeleccionada = document.querySelector('input[name="lenguaje"]:checked');
    const resultado = document.querySelector("#resultado");
    
    resultado.textContent = `Seleccionaste: ${opcionSeleccionada.value}`;

    console.log(`Lenguaje seleccionado: ${opcionSeleccionada.value}`);
};