document.addEventListener('DOMContentLoaded', () => {
    const radios = document.querySelectorAll('input[name="language"]');
    const selectedValue = document.getElementById('selectedValue');

    function actualizarSeleccion(event) {
        const valor = event.target.value;
        selectedValue.textContent = valor;
        selectedValue.classList.remove('empty');
        console.log('Lenguaje seleccionado:', valor);
    }

    radios.forEach(radio => {
        radio.addEventListener('change', actualizarSeleccion);
    });
});
