// sending messages to the developers console
// right clikc -> inspect -> console
// if you type in console.log("HI"), then it will print it out
// console shows errors!! - IMPORTANT
// console.log("BOO!");

// gets a pop-up window showing the alert
// alert("Le Boo.");
// can pass in an int and it will convert that int to string
// alert(5);

// variable: a place to store data
// string, integers, floats, and boolean

// there is also something else with different scope for var - later
var firstName = "Lil";
var lastName = "Pumpkin";
var space = " ";
var another = "Soggy"
var withSpace = " Soggy ";
// we just declared

console.log(firstName); //// Lil
// this will print out firstName which is "Lil" to our Console


//////////////////// concatinating variables
// option 1
console.log(firstName + " :) " + lastName); //// Lil :) Pumpkin

// option 2
// the commas automatically insert a space in between those two
console.log(firstName, lastName); //// Lil Pumpkin

// option 3
console.log(firstName + another + lastName);  //// LilSoggyPumpkin
console.log(firstName + withSpace + lastName);  //// Lil Soggy Pumpkin

// storing integers
var num1 = 5;

// storing floats
var num2 = 5.4;
var num3 = 4;

// does the actual math of adding those three numbers (5 + 5.4 + 4 = 14.4)
console.log(num1 + num2 + num3);  //// 14.4

// if we put a string in the beginning
// those numbers became string (5 5.4 4 -> 55.44) - concatinating string!!
console.log("Output: " + num1 + num2 + num3); //// Output: 55.44

// put every mathematic thing in a parenthesis - math!!
console.log("Output: " + (num1 + num2 + num3)); //// Output: 14.4


// Array: collection of multiple items
// index starts at zero

var firstArray = ["Lil", "Big", "DJ", "Dr.", "Dark", "Mx.", "Tik"];
var secondArray = ["Yeet", "Xan", "Kitten", "Corona", "Zoom", "Distancing", "Nook"];

// print entire array
console.log(firstArray);  // console log of the full array
//// (7) ['Lil', 'Big', 'DJ', 'Dr.', 'Dark', 'Mx.', 'Tik']
//// 0: "Lil" 1: "Big" 2: "DJ" 3: "Dr." 4: "Dark" 5: "Mx." 6: "Tik"
//// length: 7
//// [[Prototype]]: Array(0)...

// print one item from the array
console.log(firstArray[1]); //// Big


//////////////////// LOGIC with CONDITIONALS

/*
  Set up control flow with if/else statements
  < or >
  <= or >=
*/

// js accepts equality as == or ===. When you use === you are ensureing TRUE equality

// when declaring object, =
var num = 17;

if (num == 17) {  // (CONDITION)
                  // if the condition is true, execute the code inside {}
  console.log('you have the correct number!') //// you have the correct number!
};

if (num == 2) {  // (CONDITION)
  console.log('you have the correct number!')
} else if (num > 15) {
  console.log('your number is too big');
} else {
  console.log('please choose another number')
}
//// your number is too big


//////////////////// function
// built-in functions

// random FLOAT from 0-1
console.log(Math.random());

// random FLOAT from 0-50
console.log(Math.random() * 50);
// using basic math: multyplying by the maximum number you want in the scale

console.log(5 + Math.random() * 50);


// random INTEGER from 0-length of an array, giving us an INDEX...
// select an random item from that array - call using random index (which is an integer)
var secondArray = ["Animal Crossing", "Zoom Party", "Toilet Paper", "Yoga", "Netflix Party", "Bops"];
var randomIndex = Math.floor( Math.random() * secondArray.length );
// secondArray.length : length of the secondArray
console.log(secondArray.length);  //// 6

// Math.floor(FLOAT): round FLOAT down to the floor (INT)
var ourNum = 10.123554756;
console.log(Math.floor(ourNum));  //// 10

console.log(randomIndex); // any int number 0-5

console.log(secondArray[randomIndex]);  // print out the item with the index printed Output

// Math.random() and Math.floor() are both returning functions
//////////////////// CUSTOM FUNCTIONS

// setting it up
function sayHello() { // declaring the function
  // have all the behaviors in {}
  console.log("helloooo!");
  console.log("sup.");
}

// calling the function
sayHello(); //// helloooo!
            //// sup.

// setting up a function with parameters / arguments
function addNumber(numberOne, numberTwo) {
  // numberOne and numberTwo only exist inside this function
  // console.log("Result: " + (numberOne + numberTwo));
  var result = numberOne + numberTwo;
  console.log("Result: " + result); // does the same thing but a bit cleaner
}

// calling the addNumber function
addNumber(40, 60);  //// Result: 100

// RETURNING values from a functions
function addNumberAndReturn(numberOne, numberTwo) {
  return numberOne + numberTwo;
}
// value returned from the function to be used in the place where the function was called

console.log("Here's the value coming back from out function: " + addNumberAndReturn(400, 200));
//// Here's the value coming back from out function: 600


//////////////////// LOGICAL OPERATORS
// larger application of  conditionals

/*
  create a function that acts like a virtual door
  if we call door #1, we will return Hall of Mirrors
  if we call door #2, we will return Mummy Bathroom
  if we call door #3, we will return Witchy Kitchen
*/

function door(num) {
  if (num == 0) {
    return "Bathroom";
  }
  else if (num == 1){
    return "Bedroom";
  }
  else if (num == 2){
    return "Kitchen";
  }
  else if (num == 3) {
      return "Boo-sment";
  }
  else if (num == 4) {
    return "Acrid Attic";
  }
  else if (num == 5) {
    return "Boo-lcony"
  }
  else {
      return "There are only 3 doors!";
  }
}

console.log(door(1)); //// Bathroom
console.log(door(2)); //// Bedroom
console.log(door(3)); //// Kitchen
console.log(door(7)); //// There are only 3 doors!
console.log(door(5)); //// Boo-lcony
console.log(door(Math.floor(Math.random() * 5)));
