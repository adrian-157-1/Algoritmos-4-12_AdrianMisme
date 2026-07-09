/*

1. Confeccionar un programa que muestre en que cuatrimestre del año nos
encontramos. Para esto obtener el mes.

*/

let d = new Date();
let m = d.getMonth() + 1;

if (m <= 4) {
    console.log("Te encuentras en el Primer cuatrimestre");
} 

else if (m <= 8) {
    console.log("Te encuentras en el Segundo cuatrimestre");
} 

else {
    console.log("Te encuentras en el Tercer cuatrimestre");
}
