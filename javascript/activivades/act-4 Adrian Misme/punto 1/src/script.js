/*

1. Desarrollar un programa que permita cargar n números enteros y luego nos
informe cuántos valores fueron pares y cuántos impares.
Emplear el operador “%” en la condición de la estructura condicional:
if (valor%2==0) //Si el if da verdadero luego es par.

*/

p = 0
m = 0

for(let i = 1; i <= 10; i++){

let n = parseInt(prompt(`ingrese el valor ${i}`))

if(n % 2 == 0){

p++
}

else if(n % 2 == 1){
m++

}


}
console.log("cantidad de valores pares : ", p)
console.log("cantidad de inpares : ", m)
