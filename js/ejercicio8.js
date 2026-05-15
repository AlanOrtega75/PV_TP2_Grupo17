const notas = [8, 5, 10, 6, 4, 7, 9, 3, 2, 7];

let suma = 0;
let aprobados = 0;

notas.forEach((nota)=>{
    console.log(`Nota: ${nota}`);
    suma = suma + nota;
    if(nota >= 6){
        console.log(`Aprobado: ${nota}`);
        aprobados = aprobados + 1;
    }else{
        console.log(`Desaprobado: ${nota}`);
    }
})

const promedio = suma / notas.length;
console.log(`El Promedio General es ${promedio}`);
console.log(`La cantidad de aprobados son ${aprobados}`);