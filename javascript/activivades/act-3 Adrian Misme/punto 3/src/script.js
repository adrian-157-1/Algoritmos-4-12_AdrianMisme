/*
3. Confeccionar un programa que permita ingresar un valor del 1 al 10 y nos
muestre la tabla de multiplicar del mismo (los primeros 13 términos)
Ejemplo: Si ingreso 3 deberá aparecer en pantalla los valores 3, 6, 9, hasta el
39.

*/


let n = parseInt(prompt("ingrese numero para mostra tabla"))


console.log("tabla de multiplicacion del", n)

for(let i = 1; i < 14; i ++){

m = n * i



console.log(n+ " x "+ i+ " = "+ m)

}