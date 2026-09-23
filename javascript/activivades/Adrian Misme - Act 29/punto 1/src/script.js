/* 
Ejercicio 1: Guardar Preferencias de Usuario
Enunciado: Crear una función que guarde y recupere las preferencias de un usuario,
como su nombre y el color de fondo preferido, utilizando LocalStorage.
1. La función debe permitir al usuario ingresar su nombre y seleccionar su color
de fondo preferido desde una lista de opciones.
2. Los datos ingresados deben almacenarse en LocalStorage.
3. Cada vez que la página se recargue, las preferencias deben recuperarse de
LocalStorage y aplicarse automáticamente (mostrar el nombre del usuario y
cambiar el color de fondo).
*/

function guardar() {
    const nombre = document.getElementById("nombre").value
    const color = document.getElementById("color").value
    localStorage.setItem("nombre", nombre)
    localStorage.setItem("color", color)
    aplicar()
}
function aplicar() {
    const nombreG = localStorage.getItem("nombre")
    const colorG = localStorage.getItem("color")
    if(nombreG) {
        document.getElementById("nombre").value = nombreG
        document.getElementById("mensaje").textContent =
            "¡Hola, " + nombreG + "!"
    }
    
    document.body.style.backgroundColor = colorG
    document.getElementById("color").value = colorG
    
}
document.addEventListener("DOMContentLoaded", aplicar)