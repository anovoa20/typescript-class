(
    () => {
        //Ejemplo básico
        function operar(a: number,b: number,callback: any) {
            return callback(a,b);
        }

        function sumar (x: number, y: number){
            return x + y;
        }
        
        function multiplicar (x: number, y: number){
            return x * y;
        }

        console.log(operar(5,3,sumar)); //8
        console.log(operar(5,3,multiplicar)); //15



        //Ejemplo con strings
        function procesarTexto(texto: string, callback: any) {
            return callback(texto);
          }
          
          function aMayusculas(str: string) {
            return str.toUpperCase();
          }
          
          function aMinusculas(str: string) {
            return str.toLowerCase();
          }
          
          console.log(procesarTexto("Hola Mundo", aMayusculas)); // "HOLA MUNDO"
          console.log(procesarTexto("Hola Mundo", aMinusculas)); // "hola mundo"





          //Ejemplo con booleanos
          function verificar(valor: boolean, callback: any) {
            return callback(valor);
          }
          
          function esVerdadero(val: boolean) {
            return val === true;
          }
          
          console.log(verificar(true, esVerdadero));  // true
          console.log(verificar(false, esVerdadero)); // false



          //Ejemplo con setTimeout (callback asíncrono)
          function saludarDespues(nombre: string, callback: any) {
            setTimeout(() => {
              callback(`Hola ${nombre}`);
            }, 500);
          }
          
          saludarDespues("Carlos", function (mensaje: string) {
            console.log(mensaje); // Se ejecuta después de 1 segundo
          });





          //Ejemplo con objeto
          function procesarPersona(persona: object, callback: any) {
            return callback(persona);
          }
          
          function obtenerNombreCompleto(obj: any) {
            return `hola mi primer nombre es ${obj.nombre} y mi primer apellido es ${obj.apellido}`;
          }
          
          interface Persona {nombre: string, apellido: string};
          let persona: Persona = { nombre: "Ana", apellido: "Pérez" };
          
          console.log(procesarPersona(persona, obtenerNombreCompleto)); // "Ana Pérez"

          persona.nombre = 'Pepa';
          persona.apellido = 'Lalo';
          console.log(`${persona.nombre} ${persona.apellido}`);









          
    }
)()