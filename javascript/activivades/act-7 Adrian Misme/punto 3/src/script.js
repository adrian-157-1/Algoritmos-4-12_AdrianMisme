/*

Ejercicio 3: Conversor de Texto con Análisis
Crear una función que reciba un texto por parte del usuario y realice lo siguiente:
1. Mostrar el texto en consola, en minúsculas y mayúsculas.
2. Mostrar cuántos caracteres tiene el texto total y cuántas vocales posee
(contando con un bucle).
3. Usar slice() para mostrar solo las 5 primeras letras.
4. Validar que el texto no esté vacío (mostrar alert() si lo está).

*/

let t = prompt("Ingrese un texto")

function texto(t){
    if(t.length === 0){
        alert("El texto no puede estar vacio")
    }
    else{
        console.log("Texto en mayusculas : ", t.toUpperCase())
        console.log("Texto en minusculas : ", t.toLowerCase())
    }
}

function caracteresyvocales(t){
    let v = "aeiouAEIOU"
    let c = 0    
    for(let i = 0; i < t.length; i++){
        if(v.includes(t[i])){
            c++
        }
    }
    console.log("El texto tiene ", t.length, " caracteres")
    console.log("El texto tiene ", c, " vocales")
}   

function primerascincoletras(t){
    console.log("Las 5 primeras letras del texto son : ", t.slice(0, 5))
}

texto(t)
caracteresyvocales(t)
primerascincoletras(t)        