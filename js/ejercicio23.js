const entrada = document.querySelector('#entrada');
const resultado = document.querySelector('#resultado');

entrada.addEventListener('input', () => {
    const texto = entrada.value;
    resultado.textContent = texto.length ? texto : 'El texto ingresado aparecerá aquí.';
    resultado.classList.toggle('long', texto.length > 20);
});
