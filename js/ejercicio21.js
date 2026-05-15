const paisSelect = document.querySelector('#pais');
const capitalSelect = document.querySelector('#capital');

const capitalPorPais = {
    argentina: 'buenos_aires',
    brasil: 'brasilia',
    canada: 'ottawa',
    mexico: 'ciudad_de_mexico',
    colombia: 'bogota',
    chile: 'santiago'
};

const capitalTexto = {
    buenos_aires: 'Buenos Aires',
    brasilia: 'Brasilia',
    ottawa: 'Ottawa',
    ciudad_de_mexico: 'Ciudad de México',
    bogota: 'Bogotá',
    santiago: 'Santiago'
};

const paisTexto = {
    argentina: 'Argentina',
    brasil: 'Brasil',
    canada: 'Canadá',
    mexico: 'México',
    colombia: 'Colombia',
    chile: 'Chile'
};

const actualizarCapital = () => {
    const pais = paisSelect.value;
    const capitalValue = capitalPorPais[pais];
    capitalSelect.value = capitalValue;

    console.clear();
    console.log(`País seleccionado: ${paisTexto[pais]}`);
    console.log(`Capital seleccionada: ${capitalTexto[capitalValue]}`);
};

paisSelect.addEventListener('change', actualizarCapital);
window.addEventListener('DOMContentLoaded', () => {
    actualizarCapital();
});
