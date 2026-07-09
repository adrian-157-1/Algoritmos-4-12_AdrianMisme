/*

2. Realizar un programa que acumule (sume) valores ingresados por teclado hasta
ingresar el 9999 (no sumar dicho valor, indica que ha finalizado la carga). Imprimir el
valor acumulado e informar si dicho valor es cero, mayor a cero o menor a cero.

*/

let s = 0;


let n = parseInt(prompt("Ingrese un número (9999 para salir)"))

for (let i = 0; n !== 9999; i++) {

    s = n + s

    
    n = parseInt(prompt("Ingrese un número (9999 para finalizar):"))
}


console.log("Suma acumulada:", s)


if (s > 0) {
    console.log("El valor es mayor a cero")
} 

else if (s < 0) {
    console.log("El valor es menor a cero")
}

else {
    console.log("El valor es cero")
}