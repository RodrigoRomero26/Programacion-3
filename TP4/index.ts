console.log("Ejercicio 2: corriendo desde typescript");
const texto: string = "Hola, TypeScript";
const numero: number = 123;
const booleano: boolean = true;
const fecha: Date = new Date();
const divValores = document.getElementById("contenedor");
const textoElemento = document.createElement("p");
textoElemento.textContent = `Texto: ${texto}`;
const numeroElemento = document.createElement("p");
numeroElemento.textContent = `Numero: ${numero}`;
const booleanoElemento = document.createElement("p");
booleanoElemento.textContent = `Booleano: ${booleano}`;
const fechaElemento = document.createElement("p");
fechaElemento.textContent = `Fecha actual: ${fecha.toLocaleDateString(
  "es-ES"
)}`;
if (divValores) {
  divValores.appendChild(textoElemento);
  divValores.appendChild(numeroElemento);
  divValores.appendChild(booleanoElemento);
  divValores.appendChild(fechaElemento);
}
function convierteString(num: number): string {
  return num.toString();
}
let numeroastring: number = 456;
const stringaNumero = convierteString(numeroastring);
if (divValores) {
  divValores.appendChild(
    document.createElement("p")
  ).textContent = `Numero convertido a cadena: ${stringaNumero}`;
}
const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumarNumeros(numeros: number[]): number {
  if (numeros.length === 0) {
    return 0;
  } else {
    let suma: number = 0;
    numeros.forEach((numero) => {
      suma += numero;
    });
    return suma;
  }
}
const suma = sumarNumeros(numeros);
if (divValores) {
  divValores.appendChild(
    document.createElement("p")
  ).textContent = `Suma del array: ${suma}`;
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

type Direccion = {
  calle: string;
  ciudad: string;
  cp: number;
};

const direccion: Direccion = {
  calle: "Calle Falsa 123",
  ciudad: "Alcala",
  cp: 12345,
};

const direcc = document.createElement("p");
if (divValores) {
  divValores.appendChild(
    direcc
  ).textContent = `Direccion: Calle: ${direccion.calle} Ciudad: ${direccion.ciudad} C.P: ${direccion.cp}`;
}

interface Usuario {
  nombre: string;
  correo: string;
  saludar(): string;
}

const usuario: Usuario = {
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
  nombre: string;
  edad: number;
  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  presentarse(): string {
    return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`;
  }
}

const persona: Persona = new Persona("Pedro", 25);
const saludoPersona = document.createElement("p");
if (divValores) {
  divValores.appendChild(
    saludoPersona
  ).textContent = ` ${persona.presentarse()}`;
}

class Caja<T> {
  private valor: T;

  constructor(valor: T) {
    this.valor = valor;
  }

  obtenerValor(): T {
    return this.valor;
  }
}

const cajaDeTexto: Caja<string> = new Caja("Mensaje secreto");
const cajaDeNumero: Caja<number> = new Caja(42);
const cajadeTexto = document.createElement("p");
const cajadeNumero = document.createElement("p");
if (divValores) {
  divValores.appendChild(
    cajadeTexto
  ).textContent = `Contenido de caja de texto: ${cajaDeTexto.obtenerValor()}. Tipo de dato: ${typeof cajaDeTexto.obtenerValor()}`;
  divValores.appendChild(
    cajadeNumero
  ).textContent = `Contenido de caja de numero: ${cajaDeNumero.obtenerValor()}. Tipo de dato: ${typeof cajaDeNumero.obtenerValor()}`;
}

function identidad<T>(variable: T) {
  return variable;
}

if (divValores) {
  divValores.appendChild(
    document.createElement("p")
  ).textContent = `Identidad: ${identidad("Hola")}. Tipo de dato: ${typeof identidad("Hola")}`;
  divValores.appendChild(
    document.createElement("p")
  ).textContent = `Identidad: ${identidad(42)}. Tipo de dato: ${typeof identidad(42)}`;
  divValores.appendChild(
    document.createElement("p")
  ).textContent = `Identidad: ${identidad(true)}. Tipo de dato: ${typeof identidad(true)}`;
}

enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul",
}

const color: Color = Color.Azul;

if (divValores) {
  divValores.appendChild(
    document.createElement("p")
  ).textContent = `Color favorito: ${color}`;
}