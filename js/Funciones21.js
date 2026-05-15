export const seleccionarCapital = () => {

    const paises = document.querySelector("#paises");

    const capitales = document.querySelector("#capitales");

    capitales.value = paises.value;

    const paisSeleccionado = paises.options[paises.selectedIndex].text;

    console.log(`País seleccionado: ${paisSeleccionado}`);
    console.log(`Capital seleccionada: ${capitales.value}`);
};