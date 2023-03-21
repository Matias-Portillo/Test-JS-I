// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  class Usuario {

    constructor (opciones) {
      this.usuario = opciones.usuario;
      this.nombre = opciones.nombre;
      this.email = opciones.email;
      this.password = opciones.password;
    }

    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre}`);
    }

  }
}
let juanPerez ={
  usuario: "Juans",
  nombre: "Juan",
  email: "juan.perez@gmail.com",
  password: "qweqwe",
}

let nuevoUsuario = new Usuario(juanPerez);
nuevoUsuario.saludar();

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  function Persona1(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
  }
  Persona1.prototype.saludar = function(){
    console.log("Hello World")
    }
}
let nuevaPersona1 = new Persona1(Julian, Alvarez)
nuevaPersona1.saludar();

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  // Tu código:

  class Persona {
    constructor(nombre){
      this.nombre = nombre;
    }
      
    }

    Persona.prototype.reverse() = function() {
      console.log(this.nombre);
    }
  }
let hombre = {
  nombre: "Enzo",
}

let nuevaPersona = new Persona(hombre);
nuevaPersona.reverse();


// ---------------------------------------------------------------------------//
//Crea el constructor de la clase "Persona"
//Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
//Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
//Ej: { 
//   Nombre: 'Juan',
//   Apellido: 'Perez',
//   Edad: 22,
//   Domicilio: 'Saavedra 123'
//  }

class Persona2 {
  //Escribir el constructor aquí:
  constructor(nombre, apellido, edad, domicilio) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.domicilio = domicilio;
  }

  detalle() {
    console.log(this.nombre, this.apellido, this.edad, this.domicilio)
  }
}
let hombre2 = {
  nombre: "Lucas",
  apellido: "Rodrigues",
  edad: 25,
  domicilio: "Mitre 225",
}

let nuevaPersona2 = new Persona2(hombre2);
nuevaPersona2.detalle();


function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  //Tu código:
  
}
let hombre3 ={
  nombre: "Hernan",
  apellido: "Figueroa",
  edad: 35,
  domicilio: "Bartolome 7852",
} 
let nuevoUsuario3 = new Persona2(hombre3);
nuevoUsuario3.detalle();

function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  //Tu código:
  class Persona5 {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  }
  Persona5.prototype.datos() = function() {
  console.log(this.nombre, this.edad)
}
let hombre5 = {
  nombre: "Lucas",
  edad: 21,
}
let nuevaPersona5 = new Persona5(hombre5);
nuevaPersona5.datos();
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo,
  Persona,
}
