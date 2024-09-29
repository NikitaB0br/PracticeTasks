// This is an in-line comment.

/* This is a
multi-line comment*/

/* JS provides 8 different data types:

1) undefined 2) null
3) boolean   4) string
5) symbol    6) bigint
7) number    8) object*/

/*Create variable:

var myName;*/

/*Storing values:

var a;
a = 7;*/

/*Assigning the value of one var to another:

var a;
a = 7;
var b;
b = a;*/

/*Initializing variables:

var myVar = 0;
var a = 9;*/

/*Declare string variables:

var myFirstName = 'Nikita';
var myLastName = 'Bobrovsky';*/

/*Understanding uninitialized variables:

var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";*/

/*Understanding case sensitivity in variables:

var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;*/

/*Explore differences between the var and let, ES6 update JS
var change var, let make error:

let catName = "Oliver";
let catSound = "Meow!";*/

/*Declare a read-only variable (const):

const FCC = "Nikita";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);*/

/*Numbers in JS:

const sum = 10 + 10;
const difference = 45 - 33;
const product = 8 * 10;
const quotient = 66 / 33;*/

/*Increment and decrement a number:

let myVar = 87;
myVar++;
myVar--;*/

/*Decimal numbers:

const ourDecimal = 5.7;
let myDecimal = 3.3;
const product = 2.0 * 2.5;
const quotient = 4.4 / 2.0;*/

/*Remainder in JS:

const remainder = 11 % 3;*/

/*Compound assignment with augmented addition, subtraction, multiplication
and division:

let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;

a -= 6;
b -= 15;
c -= 1;

a *= 5;
b *= 3;
c *= 10;

a /= 12;
b /= 4;
c /= 11;*/

/*Escaping literal quotes in strings:

const myStr = "I am a \"double quoted\" string inside \"double quotes\".";*/

/*Quoting strings with single quotes:

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';*/

/*Escape sequences in strings:

Code   Output
\'     single quote
\"     double quote
\\     backslash
\n     newline
\t     tab
\r     carriage return
\b     backspace
\f     form feed

Example: const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";*/

/*Concatenating strings with plus, plus equals operator:

1) const myStr = "This is the start. " + "This is the end.";
2) let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
3)const myName = "Nikita";
const myStr = "My name is " + myName + " and I am well!";
4)const someAdjective = "awesome!";
let myStr = "Learning to code is ";
myStr += someAdjective;*/

/*Find the length of a string:

let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;*/

/*Use bracket notation to find the first and last character in a string:

let firstLetterOfLastName = "";
const lastName = "Lovelace";

firstLetterOfLastName = lastName[0];
lastLetterOfLastName = lastName[lastName.length - 1];*/

/*Store multiple values in one variable using JS arrays:

const myArray = ["string", 1];*/

/*Nest one array within another:

const myArray = [["Bob", 33]];*/

/*Access array data with indexes:

const myArray = [50, 60, 70];
let myData = myArray[0];*/

/*Modify array data with indexes:

const myArray = [18, 64, 99];
myArray[0] = 45;*/

/*Access multi-dimensional arrays with indexes:

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

const myData = myArray[3][0][1];

Answer: 11*/

/*Manipulate arrays with push, pop, shift method:

1) const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
2) const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();
3) */
