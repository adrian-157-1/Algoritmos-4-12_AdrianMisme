/*

Metalúrgica - Control de Temperatura de Hornos
Una fábrica de fundición monitorea la temperatura de 3 hornos industriales
durante 3 lecturas consecutivas del día. Las mediciones se almacenan en una
estructura bidimensional de 3x3(filas para los hornos y columnas para las
temperaturas registradas).
Consignas:
1. Carga de datos: Cargar por teclado el nombre o modelo de los 3 hornos en un
vector. Para cada horno, solicitar la carga secuencial de las 3 lecturas de
temperatura e ingresarlas en una matriz de 3x3.
2. Cálculo: Calcular e imprimir la temperatura promedio que registró cada uno de
los hornos a lo largo del proceso.
3. Búsqueda: Buscar e informar el registro de temperatura individual más alto
obtenido en toda la planta (búsqueda del valor máximo absoluto de la matriz),
detallando el valor térmico y el nombre del horno al que pertenece.

*/




function cargar(){
    const modelos=[];
    const temperaturas=[];

    for (let x=0; x<3; x++){
        let n = prompt("ingrese modelo de horno : ");
        let tmp1 = parseFloat(prompt("ingrese primera temperatura : "));
        let tmp2 = parseFloat(prompt("ingrese segunda temperatura : "));
        let tmp3 = parseFloat(prompt("ingrese tercera temperatura : "));

        modelos.push(n);
        temperaturas.push([tmp1, tmp2, tmp3]);
    }

    console.log(modelos);
    console.log(temperaturas);
    
    temp_promedio(modelos, temperaturas);
    temp_mayor(modelos, temperaturas);

}


function temp_promedio(modelos, temperaturas){
    console.log("Temperatura promedios : ");

    let s = 0;
    let p = 0;

    for (let k=0; k<3; k++){
        for(let x=0; x<3; x++){
            s = s + temperaturas[k][x];
    
            p=s/3;
        }
        console.log("modelo : ", modelos[k], ", con promedio de : ", p);
    }
}



function temp_mayor(modelos, temperaturas){
    console.log("Registro del la temperatura individual mas alta de toda la planta es : ");

    let mayor = temperaturas[0][0];
    let m_mayor = modelos[0];

    for(let k=0; k<3; k++){
        for(let x=0; x<3; x++){
            if(temperaturas[k][x] > mayor){
                mayor = temperaturas[k][x];
                m_mayor = modelos[k];
            }
        }
    console.log("temperatura maxima : ", mayor, ", del Modelo : ", m_mayor );
    }
}


cargar();

