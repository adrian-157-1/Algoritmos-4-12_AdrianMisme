/*

1.
 Realizar un programa que lea por teclado dos números, si el primero es mayor al segundo 
 informar su suma y diferencia, en caso contrario informar el producto y la división del 
 primero respecto al segundo.


*/


let n1 = parseInt(prompt("ingrese el 1° numero"))
let n2 = parseInt(prompt("ingrese el 2° numero"))

if(n1 > n2){

s = n1 + n2 
d = n1 - n2

console.log("-Resultado : ")
console.log("suma : ", s)
console.log("diferencia de : ", d)
}

else if(n2 > n1){

p = n2 * n1
d = n2 / n1

console.log("-Resultado : ")
console.log("producto : ", p)
console.log("division : ", d)
}