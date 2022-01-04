console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  console.log('Hello,', name);
  return name;
}
// Remember to call the function to test
helloName('Brandon');
console.log('Testing helloName function:', helloName('Jake'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  let totalNumber = firstNumber + secondNumber;
  return totalNumber;
}

console.log('Testing addNumbers: 6 + 5 =', addNumbers(6, 5));
console.log('Testing addNumbers: 10 + 15 =', addNumbers(10, 15));
console.log('Testing addNumbers: 1 + 2 =', addNumbers(1, 2));

// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  let totalMultiply = num1 * num2 * num3;
  return totalMultiply;
}

console.log('Testing multiplyThree: 7 * 2 * 4 =', multiplyThree(7, 2, 4));
console.log('Testing multiplyThree: 1 * 2 * 3 =', multiplyThree(1, 2, 3));
console.log('Testing multiplyThree: 10 * 10 * 10 =', multiplyThree(10, 10, 10));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );

isPositive(5);
isPositive(-10);

console.log('Testing isPositive: 5 is argument and should be true', isPositive(5));
console.log('Testing isPositive: -10 is argument and should be false', isPositive(10));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.

function getLast( array ) {
  return array[array.length - 1];
}

console.log('Testing getLast function: Last item should be 7:', getLast([1, 2, 3, 4, 7]));
console.log('Testing getLast function: Last item should be Maybe:', getLast(['Yes', 'No', 'Maybe']));
console.log('Testing getLast function: Should say undefined', getLast([]));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

function find( value, array ) {
  for (let i = 0; i < array.length, i++) {
    if (value === array[i]) {
      return true;
    }
    else {
      return false;
    }
  }
} //end function


console.log('Testing true', find( 1, [2, 77, 1, 3, 4, 5] ));
console.log('Testing False', find( 5, [1, 6, 7, 8, 4, 2, 11] ));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
