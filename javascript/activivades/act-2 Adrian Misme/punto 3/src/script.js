/*

3. Un postulante a un empleo, realiza un test de capacitación, se obtuvo la siguiente 
información: cantidad total de preguntas que se le realizaron y la cantidad de preguntas 
que contestó correctamente. Se pide confeccionar un programa que ingrese los dos datos 
por teclado e informe el nivel del mismo según el porcentaje de respuestas correctas que 
ha obtenido, y sabiendo que:

Nivel máximo: Porcentaje>=90%.     
Nivel medio: Porcentaje>=75% y <90%.
Nivel regular: Porcentaje>=50% y <75%.
Fuera de nivel: Porcentaje<50%.


*/


let p = parseInt(prompt("ingrese la cantidad que se le realizaron"))
let c = parseInt(prompt("ingrese la cantidad que contestó correctamente"))

s = (c / p)* 100


if(s >= 90){

console.log("Nivel Maximo : ", s)

}

else if(s >= 75 && s < 90){

console.log("Nivel medio : ", s)

}

else if(s >= 50 && s < 75){

console.log("Nivel regular : ", s)

}

else if(s < 50){

console.log("Fuera de Nivel : ", s)

}


 