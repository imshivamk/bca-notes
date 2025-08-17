```js 
// 1. Age Category Message
function ageCategory() {
    let age = parseInt(prompt("Enter your age:"));
    if (age < 18) console.log("You are a minor.");
    else if (age <= 60) console.log("You are an adult.");
    else console.log("You are a senior citizen.");
}

// 2. Even or Odd Sum
function evenOrOddSum() {
    let num1 = parseInt(prompt("Enter first number:"));
    let num2 = parseInt(prompt("Enter second number:"));
    console.log((num1 + num2) % 2 === 0 ? "Even Sum" : "Odd Sum");
}

// 3. Character Case Checker
function charCaseChecker() {
    let char = prompt("Enter a single character:");
    if (char >= 'A' && char <= 'Z') console.log("Uppercase");
    else if (char >= 'a' && char <= 'z') console.log("Lowercase");
    else console.log("Not a letter");
}

// 4. Largest of Three Numbers
function largestOfThree() {
    let a = parseInt(prompt("Enter first number:"));
    let b = parseInt(prompt("Enter second number:"));
    let c = parseInt(prompt("Enter third number:"));
    let largest = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
    console.log("Largest number:", largest);
}

// 5. Leap Year Checker
function leapYearChecker() {
    let year = parseInt(prompt("Enter a year:"));
    console.log((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? "Leap Year" : "Not a Leap Year");
}

// 6. Simple Calculator
function simpleCalculator() {
    let num1 = parseFloat(prompt("Enter first number:"));
    let operator = prompt("Enter operator (+, -, *, /):");
    let num2 = parseFloat(prompt("Enter second number:"));
    let result;
    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero"; break;
        default: result = "Invalid operator";
    }
    console.log("Result:", result);
}

// 7. Positive, Negative, or Zero
function checkNumber() {
    let num = parseInt(prompt("Enter a number:"));
    console.log(num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero");
}

// 8. User Greeting
function userGreeting() {
    let name = prompt("Enter your name:");
    let time = parseInt(prompt("Enter the time in 24-hour format:"));
    if (time >= 5 && time < 12) console.log(`Good Morning, ${name}!`);
    else if (time >= 12 && time < 17) console.log(`Good Afternoon, ${name}!`);
    else if (time >= 17 && time < 21) console.log(`Good Evening, ${name}!`);
    else console.log(`Good Night, ${name}!`);
}

// 9. Traffic Light System
function trafficLight() {
    let color = prompt("Enter traffic light color (red, yellow, green):").toLowerCase();
    if (color === "red") console.log("Stop!");
    else if (color === "yellow") console.log("Get Ready!");
    else if (color === "green") console.log("Go!");
    else console.log("Invalid color");
}

// 10. Multiplication Table
function multiplicationTable() {
    let num = parseInt(prompt("Enter a number:"));
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

// 11. Grade Calculator
function gradeCalculator() {
    let marks = parseInt(prompt("Enter marks (0-100):"));
    let grade = marks >= 90 ? 'A' : marks >= 80 ? 'B' : marks >= 70 ? 'C' : marks >= 60 ? 'D' : 'F';
    console.log("Grade:", grade);
}

// 12. Simple Login System
function loginSystem() {
    let username = "admin", password = "password";
    let inputUser = prompt("Enter username:");
    let inputPass = prompt("Enter password:");
    console.log((inputUser === username && inputPass === password) ? "Login Successful" : "Incorrect username or password");
}

// 13. Swapping Without Third Variable
function swapNumbers() {
    let a = parseInt(prompt("Enter first number:"));
    let b = parseInt(prompt("Enter second number:"));
    [a, b] = [b, a];
    console.log("After swap: a =", a, "b =", b);
}

// 14. FizzBuzz
function fizzBuzz() {
    let num = parseInt(prompt("Enter a number:"));
    console.log(num % 3 === 0 && num % 5 === 0 ? "FizzBuzz" : num % 3 === 0 ? "Fizz" : num % 5 === 0 ? "Buzz" : num);
}

// 15. Number Reversal
function reverseNumber() {
    let num = parseInt(prompt("Enter a three-digit number:"));
    let reversed = 0;
    while (num > 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    console.log("Reversed number:", reversed);
}
```