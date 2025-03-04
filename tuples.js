"use strict";
(() => {
    //
    const hero = ['Iron Man', 100];
    hero[1] = 50;
    console.log(hero);
    //Callback Example 1
    const money = ['USD', 4000, true];
    const assignValue = (mT, amount, callback) => { return (mT[1] = amount, mT[2] = false); };
    assignValue(money, 2000);
    console.log(`Rate for today: ${money[0]} - $${money[1]} is current ${money[2]}`);
})();
