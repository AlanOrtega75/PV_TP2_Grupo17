export const mostrarDatos = () => {
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const libreta = document.querySelector('#libreta').value;
    const resultado = document.querySelector('#resultado');

    resultado.textContent = `Los datos ingresados son:

Nombre: ${nombre}
Apellido: ${apellido}
Libreta Universitaria: ${libreta}`;
};
