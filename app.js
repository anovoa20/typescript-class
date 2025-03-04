"use strict";
const msg = 'hola mundo';
console.log(msg);
const hero = {
    name: 'Ironman',
    age: 45
};
console.log(hero);
console.log(hero.age + 4);
const names = ["Alice", "Bob", "Eve"];
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
// Contextual typing also applies to arrow functions
names.forEach((s) => {
    console.log(s.toUpperCase());
});
// Parameter type annotation
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
greet("pepe");
(() => {
    const a = 10930;
    console.log(a);
})();
