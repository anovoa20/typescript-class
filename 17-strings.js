"use strict";
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = "linterna Verde";
    const volcanNegro = `Héroe: volcan Negro`;
    console.log(batman.toUpperCase());
    console.log(`I'm ${batman}`);
    console.log(`I'm ${batman}`, `you're ${linternaVerde.toLowerCase()}`);
    console.log(`I'm ${batman[0]}`);
    console.log(`I'm ${((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase()) || "El recuerdo del que no está."}`);
    console.log(`Este señor es ${linternaVerde[2].toLocaleUpperCase() === "D" || "P"}`);
})();
