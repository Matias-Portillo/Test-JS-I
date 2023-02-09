// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  function obtenerMayor(x,y) {
    if (x >=y); {
      return "El numero mayor es: "
    }
  } 
  }
  obtenerMayor(8, 7); 



function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  function mayoriaDeEdad(edad) {
    if (edad >= 18){
      return "Allowed";
    } else if (edad < 18){
      return "Not Allowed";
    }
  }
}
mayoriaDeEdad(21)


function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  function conection(status) {
    if (status === 1){
      return "Online";
    } else if (status === 2){
      return "Away";
    }
      return "Offline";
  }
}
conection(Online)
conection(Away)
conection(Offline)


function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  function saludo(idioma){
    if (idioma === aleman){
      return "Guten Tag!";
    }else if (idioma === mandarin){
      return "Ni Hao!";
    }else if (idioma === ingles){
      return "Hello!"
    }
      return "Hola!"

  }
}
saludo(aleman)
saludo(mandarin)
saludo(ingles)
saludo(otro)


function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Pista: Puedes usar el statement Switch.
  const colors = (test) => {
    switch (test) {
      case blue:
        return "This is blue";
       case red:
        return "This is red";
       case green:
        return "This is green";
       case orange:
        return "This is orange";
       default:
        return "Color not found"  
    }
  }
}


function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  function esDiezOCinco(numero) {
    if (numero === 10){
      return "True"
    }else if(numero === 5){
      return "True"
    }
    return "False"
  }
}
esDiezOCinco(10)
esDiezOCinco(5)


function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  function estaEnRango(numero){
    if (numero >= 50){
      return "True"
    }else if (numero <= 20){
      return "True"
    }
    return "False"

  }
}
estaEnRango(70)


function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  function esEntero(numero) {
    if (numero === interger) {
      return "True"
    } else if (numero === float) {
      return "False"
    }

  }
}
esEntero(1.5)

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  function fizzBuzz(numero){
    for (let i = 1; i <= numero; i++) {
      if (i % 15 === 0) {
        return "fizzbuzz"
      } else if (i % 5 === 0){
        return "buzz"
      } else if (i % 3 === 0){
        return "fizz"
      }
    }

  }
}
fizzBuzz(5)

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  //Tu código:
}

function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí:
}

function tieneTresDigitos(numero) {
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí:
}

// ---------- Puntos extra ----------

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  // Tu código:
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  //Tu código:
}

// No modificar nada debajo de esta línea, sino no correrán los test.
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tieneTresDigitos,
  doWhile
};