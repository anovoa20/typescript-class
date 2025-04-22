(
    () => {
        //arrays
        const numberAndString: (string | number)[] = [1,2,3,4,5,'6',7,8,9,10];
        const numbers: number[] = [1,2,3,4,5,6,7,8,9,10];

        numbers.push(11);
        numberAndString.push('12');

        console.log(numberAndString)
        console.log({numberAndString})

    
        console.log(numbers)
        console.log({numbers})


        //Other Example
        const villians = ['Omega', 'Dormammu', 'Duende Verde'];
        villians.forEach (
            v => console.log(v.toLocaleUpperCase())
        );

        console.log(villians);

        numbers.forEach (
            v => console.log(v)
            
        );

        numbers.forEach (
            function (v) {
                console.log(v);
            }
        );




        //callback example 1
        function greet(name: string, callback: any) {
            console.log(`Hello, ${name}!`);
            callback();
          }
          
          function sayGoodbye() {
            console.log("Goodbye!");
          }
          
        greet("Alice", sayGoodbye);
          
        
        //callback example 2
        const operation: any = (numero1: number , numero2: number, callback: any) => {
            return callback(numero1, numero2);          
        }

        operation(1, 3, (a: number, b: number) => a + b);
        operation(1, 3, (a: number, b: number) => a - b);
        operation(1, 3, (a: number, b: number) => a * b);

        operation(1, 3, (a: number, b: number) => console.log(a + b));
        operation(1, 3, (a: number, b: number) => console.log(a - b));
        operation(1, 3, (a: number, b: number) => console.log(a * b));


        operation(1, 3, (a: number, b: number) => {
            console.log(`La suma de ${a} y ${b} corresponde a: ` + (a + b)); 
            console.log(a + b)
        });




        //callback example 3
        const operation3: any = (numero1: number , numero2: number, timer: number, done: any) => {
            return setTimeout(() => {
                done(numero1, numero2)
            }, timer)
        }

        operation3(4, 5, 5000, (a: number, b: number) => {
            console.log(`Operation 3 - La suma de ${a} y ${b} corresponde a: ` + (a + b)); 
            console.log(a + b)
        });


        operation3(4, 5, 100, (a: number, b: number) => {
            console.log(`Operation 3 - La multiplicación de ${a} y ${b} corresponde a: ` + (a * b)); 
            console.log(a + b)
        });



        //callback example 4
        function modifyNames (nameValue: string, arrayNames: string[], callback: any) {
            //accion de insertar un nombre a un array
            arrayNames.push(nameValue);

            //después hace algo
            callback(arrayNames);
        }

        const Names: string[] = ['hugo', 'paco', 'luis'];

        modifyNames("Azucena", Names, () => console.log("Listado de nombres arrow: " + Names + `y contiene ${ Names.length } elementos`));
        modifyNames("Magnolia", Names, (arrayNames: string[]) => console.log("Listado de nombres arrow: " + arrayNames + `y contiene ${ arrayNames.length } elementos`));

        modifyNames('Adela', Names, function(){console.log("Listado de nombres function: " + Names + `y contiene ${ Names.length } elementos`)})
        modifyNames('Jazmin', Names, function(arrayNames: string[]){console.log("Listado de nombres function: " + arrayNames + `y contiene ${ arrayNames.length } elementos`)})


        //callback example 5
        function addIdName (nameUser: string, nitValue: number, callback: any) {
            let convertName: string = "";
            let secretNumber: number = nitValue * 5;
            convertName = nameUser.toUpperCase() + "000001100" + nitValue.toString();
            callback(convertName, secretNumber);
        }

        addIdName("Helena", 333, (convertName: string) => console.log("Nombre convertido: " + convertName) );

        addIdName("Ambrosia", 500, (convertName: string, secretNumber: number) => {console.log("Nombre convertido: " + convertName); console.log("Número convertido: " + secretNumber); });



        //callback example 6
        function operNum (num1: number, num2: number, callback: any){
            num1 = num1 * 5;
            num2 = num2 * 5;
            callback(num1,num2);
        }
        operNum(5,2,(a: number,b: number) => console.log(`La suma de los nums ${a} y ${b} corresponde a ` + (a+b)));


        //callback example 7
        const valorDividido: any = (num1: number, val: string, done: any) => {
            if (val==="s"){
                return done(++num1);
            }
            if (val==="r"){
                return done(--num1);
            }
            if (val==="m"){
                return done(num1*num1);
            }
            if (val==="d"){
                return done(num1/num1);
            }
        }
        valorDividido(20,'s',(a:number) => console.log(a));
        valorDividido(20,'r',(a:number) => console.log(a));
        valorDividido(20,'m',(a:number) => console.log(a));
        valorDividido(20,'d',(a:number) => console.log(a));
        valorDividido(20,'x',(a:number) => console.log(a));


        //callback example 8
        const flowerString: (string)[] = ['Rosa'];

        const newFlower: any = (flString: (string)[], flName: string, callback: any)=> {return callback(flString.push(flName))};
        newFlower (flowerString, "Pompón", () => console.log(flowerString));
        console.log(typeof(newFlower));
        flowerString.push("pepa");
        console.log(flowerString);







        








        
    }
)()