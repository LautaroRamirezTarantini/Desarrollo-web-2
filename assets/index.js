//alert("hola mundo")

/*
console.log("hola desde index.js")

const nombreInstructor = "Lautaro"
const apellidoInstructor = "Ramirez"

const nombreCompleto = nombreInstructor + " " +  apellidoInstructor

const nombreCompletoMejorado =`${nombreInstructor} ${apellidoInstructor}` 

let edad =17;

let fechaNacimiento = prompt("Indicame tu fecha de nacimiento:")

let edadUsuario =  2025 - fechaNacimiento 

alert("tu edad es: " + edadUsuario)

edad = 18

console.log("mi edad es:" + edad)

*/

// primer ejercicio:

/* ejercicio terminadooooooooooooooooooo

const nombreProducto = "Remera";

const precioUnitario = 5

const cantidadDeseada =  prompt("cuantos productos "+ "queres ?" + "el producto " + nombreProducto +  "vale " + precioUnitario)

const total = precioUnitario * cantidadDeseada

alert("su costo total que tiene que pagar es: " + total) */

//siguiente clase

/*
let lluvia= true

if(lluvia){ 
    alert("está lloviendo")
} else {
    alert("no está lloviendo")
}
    console.log("dddsldaldñal")
*/
/*
let edad= 14
let nombre= prompt("cual es su nombre")    

if(edad >= 18 && (nombre== "lautaro" || nombre== "Lautaro")){
    alert("sos mayor de edad y te llamas Lautaro")
}else if(edad >=18 && nombre!= "Lautaro"){
    alert("sos mayor de edad y tenes otro nombre")
}else if(edad <18 && nombre== "Lautaro"){
    alert("sos menor de edad y te llamas Lautaro")
}else{
    alert("sos menor")
}
*/

//ejercicio 2 de if (optativo)

/*
let nombreProducto= "bufanda"
let precioUnitario= 100
let cantidadDeseada= prompt(" cuanta cantidad desea llevar ")

let costoTotal= precioUnitario* cantidadDeseada

if(cantidadDeseada >=5 || cantidadDeseada >=5){
   costoTotal= costoTotal*0.9
}
    alert(`El total a pagar es ${cantidadDeseada} ${nombreProducto} es $${costoTotal}`)
*/

//siguiente clase 

/*function saludar() {
    console.log("holaa!!")
}

function saludarAalguien(nombre){
    console.log(`hola, ${nombre}`)
}
saludarAalguien("lautaro")

const saludar2 = (nombre) => {
    console.log("hola" + nombre)
}
saludar2(nombre)
*/
/*
let total

function sumar(num1,num2) {
    total=num1+num2
    console.log("el total es: " + total)
}

sumar(5,4)
*/

/*
let total               

function sumar(num1,num2) {
    return num1 + num2
}
console.log("el total es:" + sumar(5,4))

Swal.fire("SweetAlert2 is working!");
*/

//ejercicio funcion
/*
let precioUnitario= 1000
let cantidadDeseada= prompt("cuanta cantidad deseada quiere llevar")


function sumarProductos()  {
     return  precioUnitario * cantidadDeseada 
}

sumarProductos(1000,3)
console.log("el total es:" + sumarProductos)
*/

//while
/*
let contador= 0
while(contador<=3) {
    console.log("hola")
    contador= contador + 1
}
*/

/*
const contrasenia= ""
const usuario= ""
let intentos= 0
const maxIntentos= 3
let accesoContenido= false

do{
    const pedir_us=prompt("ingrese su usuario")
    const pedir_contra=prompt("ingrese su contraseña")

    if (contrasenia==pedir_contra && usuario==pedir_us.toLowerCase) {
        alert("bienvenido/a a nuestra pagina ");
        accesoContenido= true;
    }else{
        intentos++;
        if(intentos < maxIntentos) {
            alert("usuario o contraseña incorrectos intentos restantes : " + (maxIntentos - intentos))

        }
    }
    
} while (intentos < maxIntentos && ! accesoContenido);
if(!accesoContenido) {
    alert(" has superado el nuro de intentos")
}
 */
/*
for (let i = 0 ; i<=5 ; i++ ) {
    console.log("hola")
}
*/

/*
const usuario1= "lautaro"
 
let usuarios= [usuario1,"luciano", "gustavo"]
    
    usuarios[0]="claudio"

    console.log(usuarios[0])
    */

    //ejercicio 5 
/*
    let productos= ["mochila","campera","buzo","pulsera","remera","ojota"]

    for (let i=0 ;i<=5 ; i++) {
        console.log(productos[i])
    }
    let productoEliminado= productos.pop()
    console.log("El producto que se eliminó es : " + productoEliminado)

    for (producto of productos) {
        console.log(producto)
    }
*/

// ejercicio 6

/*
let producto= {
    nombre: "camiseta",
    precio: "500",
    cantidadDisponible: "3",
    
}

producto.nombre= "zapatillas";
producto.categoria= "calzado";
delete producto.cantidadDisponible;


console.log(producto)
*/


//ejercicio 7
/*
let producto= document.getElementById("nombreProducto")
let precio= document.getElementById("precioProducto")
 
 producto.innerText="zapatillas"
 precio.innerText="450"

 let color= document.querySelector("#nombreProducto")
 color.style.color= "blue"
 */
