const input = document.querySelector('#texto');
const output = document.querySelector('#vista');

input.addEventListener('input', () => {
    const value = input.value.trim();
    output.textContent = value.length ? value : 'Texto ingresado aparecerá aquí.';
});
