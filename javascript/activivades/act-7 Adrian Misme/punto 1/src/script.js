/*

Ejercicio 1: Sistema de Registro de Usuarios
Crear un sistema donde se le pida al usuario su nombre completo, fecha de
nacimiento (año), y una contraseña. El sistema debe:
1. Generar un nombre de usuario tomando las 3 primeras letras del nombre, las
3 últimas del apellido y el año de nacimiento, todo en minúsculas.
2. Calcular la edad usando el año actual.
3. Validar que la contraseña tenga al menos 6 caracteres. Si no cumple, informar
mediante un alert().
4. Mostrar todos los datos correctamente formateados en consola.



*/

let n = prompt("ingrese su nombre completo")
let a = prompt("ingrese el año en el que nacio")
let c = prompt("ingrese una contraseña(minimo de 6 caracteres)")


function emailusuario(e){
let n1 = n.slice(0, 3)
let n2 = n.slice(-3)
let g = "@gmail.com"
e = n1 + n2 + a + g

return e.toLowerCase().trim() 
}

function calculartedad(d){
let t = new Date()
d = t.getFullYear() - a

return d
}

function validarcontraseña(c){

    if(c.length < 6){
        
        alert("Contraseña no valida")
    }
    else{
        console.log("Contraseña : ", c)
    }
}

console.log("== DATOS DEL USUARIO ==")
console.log("Email : ", emailusuario(n))
console.log("Edad : ", calculartedad(a))
validarcontraseña(c);