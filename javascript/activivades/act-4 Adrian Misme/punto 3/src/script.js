/*

3. Realizar un programa que lea los lados de n triángulos, e informar:
a) De cada uno de ellos, qué tipo de triángulo es: equilátero (tres lados
iguales), isósceles (dos lados iguales), o escaleno (ningún lado igual)
b) Cantidad de triángulos de cada tipo.
c) Tipo de triángulo que posee menor cantidad.

*/


let n = parseInt(prompt("ingrese la cantidad de triángulos:"))


let eq = 0
let is = 0
let es = 0

for (let i = 1; i <= n; i++) {

    let a = parseInt(prompt("Lado 1:"))
    let b = parseInt(prompt("Lado 2:"))
    let c = parseInt(prompt("Lado 3:"))

    if (a === b && b === c) {
        console.log("Triángulo equilátero")
        eq++
    } 
    
    else if (a === b || a === c || b === c) {
        console.log("Triángulo isósceles")
        is++
    } 
    
    else {
        console.log("Triángulo escaleno")
        es++
    }
}

console.log("Equiláteros:", eq)
console.log("Isósceles:", is)
console.log("Escalenos:", es)


if (eq <= is && eq <= es) {
    console.log("Menor cantidad: Equiláteros")
} 

else if (is <= eq && is <= es) {
    console.log("Menor cantidad: Isósceles")
} 

else {
    console.log("Menor cantidad: Escalenos")
}
