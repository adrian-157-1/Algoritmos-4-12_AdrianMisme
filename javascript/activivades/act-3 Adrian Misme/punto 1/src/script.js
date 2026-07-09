/*

1. En una empresa trabajan n empleados cuyos sueldos oscilan entre $100 y
$500, realizar un programa que lea los sueldos que cobra cada empleado e
informe cuántos empleados cobran entre $100 y $300 y cuántos cobran más
de $300. Además el programa deberá informar el importe que gasta la empresa
en sueldos al personal.


*/



let n = parseInt(prompt("ingrese cantidad de empleados:"));

let e = 0;
let m = 0;
let Total = 0;

for (let i = 1; i <= n; i++) {
    let sueldo = parseFloat(prompt(`Ingrese el sueldo del empleado ${i}:`));

    if (sueldo >= 100 && sueldo <= 300) {
        e++;
    } else if (sueldo > 300) {
        m++;
    }

    Total += sueldo;
}

console.log("Resultados:");
console.log("Empleados que cobran entre $100 y $300:", e);
console.log("Empleados que cobran más de $300:", m);
console.log("Total que gasta la empresa en sueldos: $", Total);