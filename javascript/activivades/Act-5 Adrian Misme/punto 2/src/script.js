/*

Punto 2:
Crear una función llamada esPrimo que reciba un número y devuelva true si es primo o
false si no lo es.
Luego, pedir al usuario que ingrese 10 números y mostrar en consola cuáles son primos y
cuáles no.

*/
function esPrimo(num) {

    if (num <= 1) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }

    return true; 
}


for (let i = 1; i <= 10; i++) {

    let n = parseInt(prompt("Ingrese el número " + i + ":"));

    if (esPrimo(n)) {
        console.log(n + " es primo");
    } else {
        console.log(n + " no es primo");
    }
}
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}