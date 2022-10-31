
let datos = [
    ['perro', 'guau', 'marron', 'corre'],
    ['gato', 'miau', 'blanco'],
    ['vaca', 'mu', 'violeta']
]
console.log(datos) //accedemos al total de los arrays
console.log(datos.length) //accedemos a cantidad de arrays
console.log(datos[0].length); //accedemos a cantidad de datos del array
console.log(datos[0][3]) //accedemos a un dato especifico del array

let b = 5;
if (b > 5) {
    console.log("mayor a 5")
} else if (b < 5) {
    console.log("menor a 5")
} else {
    console.log("igual")
}
// condicional ternario 
let nombre = "Ludovico"
let edad = 19;

let esMayoEdad = edad > 18 ? console.log(nombre, "es mayor") : console.log(nombre, "es menor");

//ejercicio

/* let lista = ['leche', 'manteca', 'chocolate', 'mani', 'agua'];

let articulo = prompt('ingrese articulo');

//includes recorre el array y te devuelve si esta el valor buscado como true o false

if (lista.includes(articulo)) {
    alert(articulo + ' ya esta en la lista')
} else {
    //lo metes al array con push
    lista.push(articulo)
    alert('la lista es: ' + lista) 
} 

let color = prompt('ingrese un color')
switch (color) {
    case "rosa":
        alert("es Kimberly");
        break;
    case "rojo":
        alert("es Jason");
        break;
    case "negro":
        alert("es Zack");
        break;
    case "azul":
        alert("es Billy");
        break;
    case "amarillo":
        alert("es Trini");
        break;
    case "verde":
        alert("es Tommy");
        break;
    default:
        alert("No es un power ranger");
}

let numeroDia = new Date(). getDay();

// para que tome el dato como numero, parsefloat
 let numeroDia = parseFloat(prompt('ingrese dia'))

switch (numeroDia){
    case 1:
        dia = 'lunes'
        break
        case 2:
        dia = 'martes'
        break
        case 3:
        dia = 'miercoles'
        break
        case 4:
        dia = 'jueves'
        break
        case 5:
        dia = 'viernes'
        break
        case 6:
        dia = 'sabado'
        break
        default:
        dia = 'domingo'
}
console.log("Hoy es" , dia)
*/
let numero = parseFloat(prompt('ingrese numero'))

if(numero >= 10 && numero <= 50){
alert ('el numero esta entre 10 y 50');
}else if(numero < 10 || numero > 50){
alert ('el numero es menor a 10 o mayor a 50');
}else{
alert ('no es un numero')
}