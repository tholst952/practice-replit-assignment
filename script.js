'use strict';

// I'll edit these exercies to work with console

/**
 * ===== Troubleshooting =====
 * The function below should log the number 2, however it does not, 
 * see if you can fix it!
 * Be sure to fix it in the spirit of the code, do not hard code the result.
 */

function troubleshooting() {
	const a = 1;
	const b = 1;

	// Edit between these lines
	// =================================
	console.log(Number(a + b));

	// =================================
}

troubleshooting()


/* The code below tells the browser to ask you for a number then if that number is '6', is returns 'true' otherwise it returns 'false' 

Change this code so it returns 'true' when the number is greater than or equal to 10, and false if it is less than 10  */

const number = Number(prompt('enter a number'));

function numberChecker() {
	if(number >= 10) {
		console.log(true); 
	} else if(number < 10) {
		console.log(false);;
	}
}

numberChecker(number)

/**
 * Lets do some math!
 * Some rules first:
 *   - Replace the strings to the right of the = with the math expression they describe.
 *   - Do not manually enter the answers to the equations. For example, `const a = 9` would be incorrect as 9 is the answer to the equation you're being asked to write out
 */

const a = Number(1 + 8);  //"one plus eight"
const b = 22 * 3;  //"22 times three"
const c = 5 % 4;  //"the *remainder* of 5/4"
const d = a - 17;  //"the variable 'a' minus 17"
const e = Number(a + b + c + d);  //"the sum of the previous four variables"

console.log(a, b, c, d, e); 

/* 
	1. Create 4 variables: firstName, lastName, thisYear, and birthYear
	
	2. Create a 5th variable, greeting, that is constructed from the previous 4(it should contain a greeting with the person's full name and their age)
	
	3. Print greeting with console.log

	4. Press 'Run' to ensure your code works
	 
	 ===== NOTE =====
  In order to make the tests pass you will need to use these exact values. The wording also needs to be an exact match. If the tests fail, check spacing, capitalization, and punctuation:
	
  birth year = 1948
  this year = 1965
  first name = Carlos
  last name = Stevenson

  The greeting should say: "Hello! My name is Carlos Stevenson and I am 17 years old."
	*/

const firstName = 'Carlos';
const lastName = 'Stevenson';
const birthYear = 1948;
const thisYear = 1965;

const greeting = `Hello! My name is ${firstName} ${lastName} and I am ${thisYear - birthYear} years old.`

console.log(greeting);
