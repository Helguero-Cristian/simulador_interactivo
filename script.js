const IVA = 1.21;
let nombreJuego = prompt("Ingresa el nombre del videojuego").toUpperCase();
let precioJuego = parseFloat(prompt("Ingresa el precio del videojuego"));

//Creo una funcion para calcular el IVA
function calcularIVA (precio) {
    let impuesto = (precio * IVA)
    return impuesto
}

let resultado = calcularIVA (precioJuego)
alert ("El precio final de " + nombreJuego + " es " + resultado)

//Armo un ciclo para repetetir la operacion hasta que se cumpla la condicion
for (let index = 0; index <= 5; index++) {
    let entrada = prompt ("¿Quiere realizar otra operacion?\nY(si) / N(no)\n\nAtencion: Solo se permiten 5 consultas diarias").toUpperCase();
    if (entrada == "Y") {
        nombreJuego = prompt("Ingresa el nombre del videojuego").toUpperCase();
        precioJuego = parseFloat(prompt("Ingresa el precio del juego"));
        let resultado = calcularIVA (precioJuego)
        alert ("El precio final de " + nombreJuego + " es " + resultado)
    } else if (entrada == "N") {
        alert ("Gracias por usar nuestro sistema")
        break
    } else {
        alert ("Ingrese una opcion valida")
    }
}


