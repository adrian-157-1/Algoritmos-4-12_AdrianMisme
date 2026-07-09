/*

4. 
De un operario se conoce su sueldo y los años de antigüedad. Se pide confeccionar un 
programa que lea los datos de entrada e informe:

a) Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años, otorgarle un aumento del 20 %, mostrar el sueldo a pagar.
b)Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años, otorgarle un aumento de 5 %.
c) Si el sueldo es mayor o igual a 500 mostrar el sueldo en pantalla sin cambios.



*/

let s = parseInt(prompt("Muestre su cantidad de sueldo"))
let a = parseInt(prompt("Muestre sus años de antiguedad"))

console.log("--EJERCICIO.4--")

if(s < 500 && a >= 10){

    p = 0.20 * s
console.log("resibe un aumento del 20 % que es = ", p,"$")
}

else if(s < 500 && a < 10){

    p = 0.05 * s
console.log("resibe un aumento del 5 % que es = ", p,"$")
}

else if(s >= 500 && a > 10){

console.log("TU SUELDO = 500")
}

