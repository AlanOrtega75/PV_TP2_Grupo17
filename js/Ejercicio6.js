const edades = [10, 25, 33, 40, 44, 56, 66, 70];

let suma = 0;

edades.forEach((edad) => {
    console.log(`Edad: ${edad}`);
    suma = suma + edad;
});

const promedio = suma / edades.length;
console.log(`El promedio de las edades es ${promedio}`);
