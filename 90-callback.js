"use strict";
(() => {
    //Ejemplo básico
    function operar(a, b, callback) {
        return callback(a, b);
    }
    function sumar(x, y) {
        return x + y;
    }
    function multiplicar(x, y) {
        return x * y;
    }
    console.log(operar(5, 3, sumar)); //8
    console.log(operar(5, 3, multiplicar)); //15
    //Ejemplo con strings
    function procesarTexto(texto, callback) {
        return callback(texto);
    }
    function aMayusculas(str) {
        return str.toUpperCase();
    }
    function aMinusculas(str) {
        return str.toLowerCase();
    }
    console.log(procesarTexto("Hola Mundo", aMayusculas)); // "HOLA MUNDO"
    console.log(procesarTexto("Hola Mundo", aMinusculas)); // "hola mundo"
    //Ejemplo con booleanos
    function verificar(valor, callback) {
        return callback(valor);
    }
    function esVerdadero(val) {
        return val === true;
    }
    console.log(verificar(true, esVerdadero)); // true
    console.log(verificar(false, esVerdadero)); // false
    //Ejemplo con setTimeout (callback asíncrono)
    function saludarDespues(nombre, callback) {
        setTimeout(() => {
            callback(`Hola ${nombre}`);
        }, 500);
    }
    saludarDespues("Carlos", function (mensaje) {
        console.log(mensaje); // Se ejecuta después de 1 segundo
    });
    //Ejemplo con objeto
    function procesarPersona(persona, callback) {
        return callback(persona);
    }
    function obtenerNombreCompleto(obj) {
        return `hola mi primer nombre es ${obj.nombre} y mi primer apellido es ${obj.apellido}`;
    }
    ;
    let persona = { nombre: "Ana", apellido: "Pérez" };
    console.log(procesarPersona(persona, obtenerNombreCompleto)); // "Ana Pérez"
    persona.nombre = 'Pepa';
    persona.apellido = 'Lalo';
    console.log(`${persona.nombre} ${persona.apellido}`);
})();
