// Create a function called `go` that takes 2 arguments: 
// 1. direction (forwards, backwards, etc.)
// 1. speed (mph).

// The function, when invoked, will print out the following in your console (for example): `The car is moving forward, at 25 mph.

// Add a condition inside the function to check if the speed is greater than 75 mph. If it is, add an additional message of SLOW DOWN!

// Example:

// The car is moving forward at 82 mph
// SLOW DOWN!

function go (direction, speed){
    console.log(`The car is moving ${direction}, at ${speed} mph.`);
    if(speed>75){
    console.log("SLOW DOWN!");
    }
}

go("forward", 85);
go("backwards", 23);
go("left", 47);
go("right", 92);
go("up", 19000);
go("down", 12);






// Given the following set of data about chicken birth rates, you need to filter out the objects where the birth rate value is greater than 15 per 1000 chickens for that year. Store the good years in a new array named `bestYears`.

const birthRates = [
    { year: 1969, birthRate: 13}, 
    { year: 1970, birthRate: 16}, 
    { year: 1971, birthRate: 15}, 
    { year: 1972, birthRate: 11}, 
    { year: 1973, birthRate: 18}, 
    { year: 1974, birthRate: 17}, 
    { year: 1975, birthRate: 9}
  ];

const bestYears = [];

// for (let i=0; i<birthRates.legnth; i++){
//     const currentYear = birthRates[i];
//     if(currentYear.birthRate>15){
//         bestYears.push(currentYear);
//     }

// }

// console.log(bestYears);


// birthRates.forEach(function(currentYear){
//     if( currentYear.birthRate>15){
//       bestYears.push(currentYear);
//     }
// });

// for (const currentYear of birthRates) {
//     if(currentYear.birthRate>15){
//         bestYears.push(currentYear);
//     }
// }

// console.log(bestYears);


// const politician = {
//     platform: {
//         money: ["I like it", "I have lots of it", "I don't want other people to have any"],
//         health: "I'm against it"
//     },
//     district: "Michigan 13"
// }

// politician.platform.money