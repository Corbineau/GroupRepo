var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];
var randomValue = stuff[Math.floor(Math.random() * 14 ) ];


for(let i = 0; i < stuff.length; i++) {
    if(stuff[i] === randomValue) {
        console.log(`Match! ${randomValue} is ${stuff[i]}!` );
    } else {
        console.log(`No match. ${randomValue} is not ${stuff[i]}!`);
    }
}