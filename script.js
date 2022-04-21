alert ("Bienvenidxs, en esta página podran saber el precio final de los videojuegos que se encuentran en las distintas paltaformas digitales (Al precio base se le suma el 8% del impuesto pais, el 21% de IVA y el 35% de impuesto a las ganancias)")

// 8 + 21 + 35 = 64%
const IMP = 1.64;
let nombreJuego = prompt("Ingresa el nombre del videojuego").toUpperCase();
let precioJuego = parseFloat(prompt("Ingresa el precio del videojuego"));

//Creo una funcion para calcular el IVA
function calcularIVA (precio) {
    let impuesto = (precio * IMP)
    return Math.round (impuesto)
}

let resultado = calcularIVA (precioJuego)
alert ("El precio final de " + nombreJuego + " es " + resultado)

//Armo un ciclo para repetetir la operacion hasta que se cumpla la condicion
for (let i = 0; i <= 5; i++) {
    let entrada = prompt ("¿Quiere realizar otra operacion?\nY(si) / N(no)\n\nAtencion: Solo se permiten 5 consultas diarias\nIntentos realizados: " + i).toUpperCase();
    
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


