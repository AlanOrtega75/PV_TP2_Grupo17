const nombres = ["Alan", "Josefina", "Enrique", "Valeria", "Emanuel"];

let NombreLargo = "";

nombres.forEach((nombre) => {
    console.log(nombre);
    if(nombre.length > NombreLargo.length){
        NombreLargo = nombre;
    }
});

console.log(`El Nombre más largo es ${NombreLargo}`);