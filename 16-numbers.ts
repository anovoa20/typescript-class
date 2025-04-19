(() => {
    let avengers: number = 100;
    const  villans: number = 20;   

    if (avengers < villans){
        console.log('estamos en problemas');
        avengers =33;
    }else{
        console.log('nos salvamos');
    }

    avengers = Number('55A');
    console.log({avengers});


}
)()