(
    () => {
        //ss
        let avenger: any = 123;
        let exists;
        let power;

        const pepe: any = 44;
        console.log(avenger + pepe);
        console.log(avenger.toFixed(2));
        console.log(<number>avenger.toFixed(2));
        


        avenger = 'Iron Man';
        console.log(avenger + pepe);
        console.log(avenger.charAt(0));
        console.log((avenger as string).charAt(0));

    }
)()