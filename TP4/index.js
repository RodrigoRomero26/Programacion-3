"use strict";
console.log("Ejercicio 2: corriendo desde typescript");
const texto = "Hola, TypeScript";
const numero = 123;
const booleano = true;
const fecha = new Date();
const divValores = document.getElementById("contenedor");
const textoElemento = document.createElement("p");
textoElemento.textContent = `Texto: ${texto}`;
const numeroElemento = document.createElement("p");
numeroElemento.textContent = `Numero: ${numero}`;
const booleanoElemento = document.createElement("p");
booleanoElemento.textContent = `Booleano: ${booleano}`;
const fechaElemento = document.createElement("p");
fechaElemento.textContent = `Fecha actual: ${fecha.toLocaleDateString("es-ES")}`;
if (divValores) {
    divValores.appendChild(textoElemento);
    divValores.appendChild(numeroElemento);
    divValores.appendChild(booleanoElemento);
    divValores.appendChild(fechaElemento);
}
function convierteString(num) {
    return num.toString();
}
let numeroastring = 456;
const stringaNumero = convierteString(numeroastring);
if (divValores) {
    divValores.appendChild(document.createElement("p")).textContent = `Numero convertido a cadena: ${stringaNumero}`;
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumarNumeros(numeros) {
    if (numeros.length === 0) {
        return 0;
    }
    else {
        let suma = 0;
        numeros.forEach((numero) => {
            suma += numero;
        });
        return suma;
    }
}
const suma = sumarNumeros(numeros);
if (divValores) {
    divValores.appendChild(document.createElement("p")).textContent = `Suma del array: ${suma}`;
}
const alumno = {
    nombre: "Juan",
    edad: 20,
    curso: "Programacion",
};
const nombreAlumno = document.createElement("p");
const edadAlumno = document.createElement("p");
const cursoAlumno = document.createElement("p");
if (divValores) {
    divValores.appendChild(nombreAlumno).textContent = `Nombre: ${alumno.nombre}`;
    divValores.appendChild(edadAlumno).textContent = `Edad: ${alumno.edad}`;
    divValores.appendChild(cursoAlumno).textContent = `Curso: ${alumno.curso}`;
}
const direccion = {
    calle: "Calle Falsa 123",
    ciudad: "Alcala",
    cp: 12345,
};
const direcc = document.createElement("p");
if (divValores) {
    divValores.appendChild(direcc).textContent = `Direccion: Calle: ${direccion.calle} Ciudad: ${direccion.ciudad} C.P: ${direccion.cp}`;
}
const usuario = {
    nombre: "Ana",
    correo: "a@a.com",
    saludar: () => {
        return `Hola, mi nombre es ${usuario.nombre}`;
    },
};
const saludo = document.createElement("p");
if (divValores) {
    divValores.appendChild(saludo).textContent = ` ${usuario.saludar()}`;
}
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`;
    }
}
const persona = new Persona("Pedro", 25);
const saludoPersona = document.createElement("p");
if (divValores) {
    divValores.appendChild(saludoPersona).textContent = ` ${persona.presentarse()}`;
}
class Caja {
    constructor(valor) {
        this.valor = valor;
    }
    obtenerValor() {
        return this.valor;
    }
}
const cajaDeTexto = new Caja("Mensaje secreto");
const cajaDeNumero = new Caja(42);
const cajadeTexto = document.createElement("p");
const cajadeNumero = document.createElement("p");
if (divValores) {
    divValores.appendChild(cajadeTexto).textContent = `Contenido de caja de texto: ${cajaDeTexto.obtenerValor()}. Tipo de dato: ${typeof cajaDeTexto.obtenerValor()}`;
    divValores.appendChild(cajadeNumero).textContent = `Contenido de caja de numero: ${cajaDeNumero.obtenerValor()}. Tipo de dato: ${typeof cajaDeNumero.obtenerValor()}`;
}
function identidad(variable) {
    return variable;
}
if (divValores) {
    divValores.appendChild(document.createElement("p")).textContent = `Identidad: ${identidad("Hola")}. Tipo de dato: ${typeof identidad("Hola")}`;
    divValores.appendChild(document.createElement("p")).textContent = `Identidad: ${identidad(42)}. Tipo de dato: ${typeof identidad(42)}`;
    divValores.appendChild(document.createElement("p")).textContent = `Identidad: ${identidad(true)}. Tipo de dato: ${typeof identidad(true)}`;
}
var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["Verde"] = "Verde";
    Color["Azul"] = "Azul";
})(Color || (Color = {}));
const color = Color.Azul;
if (divValores) {
    divValores.appendChild(document.createElement("p")).textContent = `Color favorito: ${color}`;
}
