/*

2. Confeccionar una función que nos retorne un string con el siguiente formato:
Hoy es Lunes 9 de Agosto de 2021
Para poder recuperar el día de la semana debemos llamar al método:
let diaSemana=fecha.getDay();
El método getDay() devuelve el día de la semana de la fecha especificada,
siendo 0 (Domingo) el primer día.

*/

function obtenerfecha(){

    let f = new Date
    let d = f.getDay()
    let n = f.getDate()
    let m = f.getMonth() + 1
    let a = f.getFullYear()
    
    dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
    meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]


    return `Hoy es ${dias[d]} ${n} de ${meses[m]} de ${a}`

    
}

console.log(obtenerfecha());