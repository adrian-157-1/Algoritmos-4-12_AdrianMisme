/* 
6. Confeccionar una página que permita tomar un examen múltiple choice.
Se debe mostrar una pregunta y seguidamente un objeto SELECT con
las respuestas posibles. Al presionar un botón mostrar la cantidad de
respuestas correctas e incorrectas (Disponer 4 preguntas y sus
respectivos controles SELECT)
*/ 


function respuestas(){
    let texto1 = document.getElementById("texto1")
    let texto2 = document.getElementById("texto2")
    let Pre1 = document.getElementById("Pre1")
    let Pre2 = document.getElementById("Pre2")
    let Pre3 = document.getElementById("Pre3")
    let Pre4 = document.getElementById("Pre4")

    let cant_Corectas = 0
    let cant_Incorectas = 0

    if("1b" == Pre1.value){
        cant_Corectas++
    }else{   
        cant_Incorectas++   }

    if("2c" == Pre2.value){
        cant_Corectas++
    }else{   
        cant_Incorectas++   }

    if("3a" == Pre3.value){
        cant_Corectas++
    }else{   
        cant_Incorectas++   }

    if("4c" == Pre4.value){
        cant_Corectas++
    }else{   
        cant_Incorectas++   }

    texto1.value = "respuestas Correctas: "+ cant_Corectas
    texto2.value = "respuestas Incorrectas: "+ cant_Incorectas
}