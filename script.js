const IVA = 1.21;
let nombreJuego = prompt("Ingresa el nombre del videojuego").toUpperCase();
let precioJuego = parseFloat(prompt("Ingresa el precio del producto"));

function calcularIVA (precio) {
    let impuesto = (precio * IVA)
    return impuesto
}

let resultado = calcularIVA (precioJuego)
alert ("El precio final de " + nombreJuego + " es " + resultado)


for (let index = 0; index < 5; index++) {
    let entrada = prompt ("quiere realizar otra operacion")
    if (entrada == "Y") {
        nombreJuego = prompt("Ingresa el nombre del videojuego").toUpperCase();
        precioJuego = parseFloat(prompt("Ingresa el precio del producto"));
        let resultado = calcularIVA (precioJuego)
        alert ("El precio final de " + nombreJuego + " es " + resultado)
    } else if (entrada == "N") {
        alert ("gracias")
        break
    } else {
        alert ("ingrese una opcion valida")
    }
}


