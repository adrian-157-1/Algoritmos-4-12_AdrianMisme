/*

2. Confeccionar un programa que permita cargar un número entero positivo de hasta tres 
cifras y muestre un mensaje indicando si tiene 1, 2, o 3 cifras. Mostrar un mensaje de error
 si el número de cifras es mayor.

*/

let n1 = parseInt(prompt("ingrese un numero de entre 1 a 3 cifras"))

if(n1 > 999){

console.log("ERROR, tienes mas de 3 cifras")
    
}

else if(n1 > 99 && n1 < 1000){

console.log("El numero tiene tre cifras")

}

else if(n1 > 9 && n1 <100){

console.log("El numero tiene dos cifras")

}

else if(n1 < 10){

console.log("El numero tiene una cifras")

}