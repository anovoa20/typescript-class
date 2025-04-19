"use strict";
(() => {
    //arrays
    const numberAndString = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    numbers.push(11);
    numberAndString.push('12');
    console.log(numberAndString);
    console.log({ numberAndString });
    console.log(numbers);
    console.log({ numbers });
    //Other Example
    const villians = ['Omega', 'Dormammu', 'Duende Verde'];
    villians.forEach(v => console.log(v.toLocaleUpperCase()));
    numbers.forEach(v => console.log(v));
    numbers.forEach(function (v) {
        console.log(v);
    });
    //callback example 1
    function greet(name, callback) {
        console.log(`Hello, ${name}!`);
        callback();
    }
    function sayGoodbye() {
        console.log("Goodbye!");
    }
    greet("Alice", sayGoodbye);
    //callback example 2
    const operation = (numero1, numero2, callback) => {
        return callback(numero1, numero2);
    };
    operation(1, 3, (a, b) => a + b);
    operation(1, 3, (a, b) => a - b);
    operation(1, 3, (a, b) => a * b);
    operation(1, 3, (a, b) => console.log(a + b));
    operation(1, 3, (a, b) => console.log(a - b));
    operation(1, 3, (a, b) => console.log(a * b));
    operation(1, 3, (a, b) => {
        console.log(`La suma de ${a} y ${b} corresponde a: ` + (a + b));
        console.log(a + b);
    });
    //callback example 3
    const operation3 = (numero1, numero2, timer, done) => {
        return setTimeout(() => {
            done(numero1, numero2);
        }, timer);
    };
    operation3(4, 5, 5000, (a, b) => {
        console.log(`Operation 3 - La suma de ${a} y ${b} corresponde a: ` + (a + b));
        console.log(a + b);
    });
    operation3(4, 5, 100, (a, b) => {
        console.log(`Operation 3 - La multiplicación de ${a} y ${b} corresponde a: ` + (a * b));
        console.log(a + b);
    });
    //callback example 4
    function modifyNames(nameValue, arrayNames, callback) {
        //accion de insertar un nombre a un array
        arrayNames.push(nameValue);
        //después hace algo
        callback(arrayNames);
    }
    const Names = ['hugo', 'paco', 'luis'];
    modifyNames("Azucena", Names, () => console.log("Listado de nombres arrow: " + Names + `y contiene ${Names.length} elementos`));
    modifyNames("Magnolia", Names, (arrayNames) => console.log("Listado de nombres arrow: " + arrayNames + `y contiene ${arrayNames.length} elementos`));
    modifyNames('Adela', Names, function () { console.log("Listado de nombres function: " + Names + `y contiene ${Names.length} elementos`); });
    modifyNames('Jazmin', Names, function (arrayNames) { console.log("Listado de nombres function: " + arrayNames + `y contiene ${arrayNames.length} elementos`); });
    //callback example 5
    function addIdName(nameUser, nitValue, callback) {
        let convertName = "";
        let secretNumber = nitValue * 5;
        convertName = nameUser.toUpperCase() + "000001100" + nitValue.toString();
        callback(convertName, secretNumber);
    }
    addIdName("Helena", 333, (convertName) => console.log("Nombre convertido: " + convertName));
    addIdName("Ambrosia", 500, (convertName, secretNumber) => { console.log("Nombre convertido: " + convertName); console.log("Número convertido: " + secretNumber); });
    //callback example 6
    function operNum(num1, num2, callback) {
        num1 = num1 * 5;
        num2 = num2 * 5;
        callback(num1, num2);
    }
    operNum(5, 2, (a, b) => console.log(`La suma de los nums ${a} y ${b} corresponde a ` + (a + b)));
    //callback example 7
    const valorDividido = (num1, val, done) => {
        if (val === "s") {
            return done(++num1);
        }
        if (val === "r") {
            return done(--num1);
        }
        if (val === "m") {
            return done(num1 * num1);
        }
        if (val === "d") {
            return done(num1 / num1);
        }
    };
    valorDividido(20, 's', (a) => console.log(a));
    valorDividido(20, 'r', (a) => console.log(a));
    valorDividido(20, 'm', (a) => console.log(a));
    valorDividido(20, 'd', (a) => console.log(a));
    valorDividido(20, 'x', (a) => console.log(a));
    //callback example 8
    const flowerString = ['Rosa'];
    const newFlower = (flString, flName, callback) => { return callback(flString.push(flName)); };
    newFlower(flowerString, "Pompón", () => console.log(flowerString));
    console.log(typeof (newFlower));
    flowerString.push("pepa");
    console.log(flowerString);
})();
