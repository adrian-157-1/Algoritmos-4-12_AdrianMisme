/* 
1. Confeccionar una página que muestre dos objetos de la clase RADIO solicitando que
seleccione si es mayor de 18 años o no. Al presionar un botón mostrar un alert
indicando si puede ingresar al sitio o no.
*/

function validacion(){
    if(document.getElementById("si").checked){
        alert("Puede ingresar al sitio")
    }
    if(document.getElementById("no").checked){
        alert("No es mayor de edad, no puede ingresar al sitio")
    }
}
