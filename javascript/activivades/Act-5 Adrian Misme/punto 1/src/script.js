/*

Punto 1:
Crear una función llamada calcularImpuesto que reciba como parámetro un sueldo y
devuelva cuánto debe pagar de impuesto, según las siguientes condiciones:
● Si el sueldo es menor a 100000, no paga impuesto.
● Si está entre 100000 y 250000, paga el 15%.
● Si es mayor a 250000, paga el 25%.
Luego, pedir al usuario que ingrese 5 sueldos, calcular el impuesto de cada uno y mostrarlo
con un mensaje en consola.

*/



function calcularImpuesto(sueldo) {
    if (sueldo < 100000) {
        return  0
    }
    else if (sueldo >= 100000 && sueldo <= 250000) {
        return sueldo * 0.15
    } 
    else if(sueldo > 250000){
        
        return sueldo * 0.25
    }
}


for (let i = 1; i <= 5; i++) {

    let sueldo = parseFloat(prompt("Ingrese el sueldo " + i + ":"))
    
    let impuesto = calcularImpuesto(sueldo)
    
    console.log("Sueldo: $" + sueldo + ", Impuesto a pagar: $" + impuesto)
}
