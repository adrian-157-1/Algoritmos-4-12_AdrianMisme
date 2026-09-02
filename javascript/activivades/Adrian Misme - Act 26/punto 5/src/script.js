/* 
Ejercicio 05: Control de Temperatura
Diseñar una página con un campo de texto para ingresar una temperatura y un botón
“Verificar”.
Cuando el usuario haga clic:
 Si la temperatura es menor a 10, mostrar en el documento el mensaje “Hace
frío” en azul.
 Si está entre 10 y 25, mostrar “Clima agradable” en verde.
 Si es mayor a 25, mostrar “Hace calor” en rojo.
Además, cada verificación debe registrarse en consola con la fecha y hora
exacta (usando Date()).
*/ 



let boton = document.getElementById("boton")
let fecha = new Date()


boton.addEventListener("click", function()
{
    let temp = document.getElementById('temp').value
    let texto = document.getElementById("texto")

    if(temp<10){
        texto.textContent = "Hace Frio"
        texto.style.color = "blue"
        console.log("hubo Frio el : ", fecha)
    }
    if(temp>=10 && temp<=25){
        texto.textContent = "Clima Agradable"
        texto.style.color = "green"
        console.log("hubo un Clima Agradable el :", fecha)
    }

    if(temp>25){
        texto.textContent = "Hace Calor"
        texto.style.color = "red"
        console.log("hubo Calor el : ", fecha)
    }
    
}
)
