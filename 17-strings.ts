(
    () => {
        const batman: string = 'Batman';
        const linternaVerde: string = "linterna Verde";
        const volcanNegro: string = `Héroe: volcan Negro`;

        console.log(batman.toUpperCase())
        console.log(`I'm ${ batman }`)

        console.log(`I'm ${ batman }`, `you're ${ linternaVerde.toLowerCase() }`)

        console.log(`I'm ${ batman[0] }`);
        console.log(`I'm ${ batman[10]?.toLocaleUpperCase() || "El recuerdo del que no está." }`);
        console.log(`Este señor es ${linternaVerde[2].toLocaleUpperCase()==="D"||"P"}`);


    }
)()