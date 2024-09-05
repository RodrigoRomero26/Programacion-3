import { esPar, convertirCelsiusAFahrenheit } from "./funciones";

/*
// Ejercicio 1.2
let a = 2;
let b = 3;
let c = a + b;
console.log("La suma de a + b es: "+c);
//Ejercicio 1.3
name = prompt("Cual es tu nombre");
console.log("Hola, "+name);
//Ejercicio 2.1
let d = 10;
let e = 15;
let f = 20;
console.log("El numero mayor es: "+Math.max(d,e,f))
//Ejercicio 2.2
let num = prompt("Ingrese un numero")
if(num%2 == 0){
  console.log(num+" Es par")
}else{
  console.log(num+" Es impar")
}

//Ejercicio 3.1
let cont = 10;
while(cont!=0){
  console.log(cont);
  cont--;
}
//Ejercicio 3.2
let num1;
do{
  num1 = prompt("Ingrese un numero mayor a 100");
}while(num1<=100);
console.log("Ingresaste un numero mayor a 100: "+num1);
//Ejercicio 4.1
console.log("El numero 8 es par: "+esPar(8));
console.log("El numero 7 es par: "+esPar(7));
//Ejercicio 4.2
convertirCelsiusAFahrenheit(30);

//Ejercicio 5.1
let persona = {
  nombre: "Pipo",
  edad: 15,
  ciudad: "Escochad",
  cambiarCiudad: function () {
    this.ciudad = prompt("Ingrese su nueva ciudad")
  }
}
console.log("La ciudad sin editar es: " + persona.ciudad);
persona.cambiarCiudad();
console.log("La nueva ciudad es: " + persona.ciudad)
//5.2
let libro = {
  titulo: "El viejo y el mar",
  autor: "Ernest Hemingway",
  anio: 1950,
  esAntiguo: function () {
    if (((new Date().getFullYear()) - this.anio) > 10) {
      return true;
    } else {
      return false;
    }
  }
}
console.log("El libro es antiguo: " + libro.esAntiguo());

//6.1
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosmultiplicados = [];
numeros.forEach((num) => {
  numerosmultiplicados.push(num * 2);
})
console.log("Numeros originales: " + numeros);
console.log("Numeros multiplicados: " + numerosmultiplicados);
//6.2
let pares = [];
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    pares.push(i);
  }
}
console.log("Primeros 20 numeros pares: " + pares);
*/
//7.1
const boton = document.getElementById("botoncambiacolor");

document.querySelectorAll(".parrafoazul").forEach((item) => {
  boton.addEventListener("click", () => {
    if (item.classList.contains("textoazul")) {
      item.classList.remove("textoazul");
    } else {
      item.classList.add("textoazul");
    }
  })
})

//7.2
const alerta = document.getElementById("texto");
const boton2 = document.getElementById("botonmostrar");
boton2.addEventListener("click", () => {
  alert("Has ingreasado: " + alerta.value);
  alerta.value = "";
})
//8.1
document.querySelectorAll(".clickeable").forEach((item) => {
  item.addEventListener("click", () => {
    alert("Has clickeado el " + item.textContent);
  });
});
//8.2
const botonSi = document.getElementById("botonHabilitar");
const botonNo = document.getElementById("botonDeshabilitar");
const input1 = document.getElementById("input");

botonSi.addEventListener("click", () => {
  input1.disabled = false;
})
botonNo.addEventListener("click", () => {
  input1.disabled = true;
})

//9
const correo = document.getElementById("email");
const correoguardado = document.getElementById("correoguardado");


document.getElementById("botonguardar").addEventListener("click", () => {
  if (correo.value == "") {
    alert("No se ha introducido ningun correo");
  } else {
    localStorage.setItem("correo", correo.value);
    correoguardado.innerHTML += localStorage.getItem("correo");
    correo.disabled = true
    document.getElementById("botonguardar").disabled = true
  }
})

document.getElementById("botoneliminar").addEventListener("click", () => {
  if (correoguardado.innerHTML != "Correo guardado:") {
    localStorage.removeItem("correo");
    correoguardado.innerHTML = "Correo guardado:";
    correo.disabled = false
    document.getElementById("botonguardar").disabled = false
    correo.value = ""
  }
})
