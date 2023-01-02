
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')
    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)
    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});
test("One dollar should be 106.6 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')
    // use the function like its suppoed to be used
    const dollars = fromDollarToYen(4)
    // if 1.206 dollars are 127.9 yen, then 1 dollar are 106.6 yen, then 4 dollars should be (4 * 106.6)
    const expected = 4 * 106.6; 
    // this is the comparison for the unit test
     expect(fromDollarToYen(4)).toBe(426.4); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});
test("One yen should be 0.0063 pound", function(){
    const { fromYenToPound } = require('./app.js')
    const dollars = fromYenToPound(300)
    const expected = 300 * 0.006; 
     expect(fromYenToPound(300)).toBe(1.8); //1 yen are 0.0063 pound, then 300 yen should be = (300 * 0.0063)
})



// import the function sum from the app.js file
const { sum } = require('./app.js');
// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);
    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});