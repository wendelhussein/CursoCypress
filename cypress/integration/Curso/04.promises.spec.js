///<reference types = "cypress" />

it('sem testes, ainda', () => { })

// const getSomething = () => 10;

//usando callback
// const getSomething = (callback) => {
//     setTimeout(() => {
//         callback(12);
//     }, 1000)
// }

// const system = () => {
//     console.log('init');
//     getSomething(some => {
//         console.log(`Something is ${some}`)
//         //console.log(`Something is ${something}`); //console.log("Something is " + something);
//         console.log('end');
//     })
// }

//usando promises
const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(13);
        }, 1000)
    })
}

const system = () => {
    console.log('init');
    const prom = getSomething();
    prom.then(some => {
        console.log(`Something is ${some}`)
    })
    console.log('end');
}

system();