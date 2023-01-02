const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// this is my function that sums two numbers
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}
const fromDollarToYen = (valueInDollar) => {
    let valueInYen = valueInDollar * 106.6 // (127.9yen/1.2usd)
    return valueInYen;
}
const fromYenToPound = (valueInYen) => {
    let valueInPound = valueInYen * 0.006 // (0.8 pound/127.9 yen)
    return valueInPound;
}

console.log(300*0.006)
// just a console log for ourselves.


// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };