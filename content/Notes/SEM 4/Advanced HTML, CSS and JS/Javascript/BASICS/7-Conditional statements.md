---
dg-publish: true
---

- [[#1. Conditional Statements in JavaScript|1. Conditional Statements in JavaScript]]
	- [[#1. Conditional Statements in JavaScript#Definition:|Definition:]]
	- [[#1. Conditional Statements in JavaScript#a. `if` Statement|a. `if` Statement]]
	- [[#1. Conditional Statements in JavaScript#b. `if...else` Statement|b. `if...else` Statement]]
	- [[#1. Conditional Statements in JavaScript#c. `if...else if...else` Ladder|c. `if...else if...else` Ladder]]
	- [[#1. Conditional Statements in JavaScript#d. Ternary Operator (`? :`)|d. Ternary Operator (`? :`)]]
	- [[#1. Conditional Statements in JavaScript#e. `switch` Statement|e. `switch` Statement]]
- [[#🔁 2. Loops in JavaScript|🔁 2. Loops in JavaScript]]
	- [[#🔁 2. Loops in JavaScript#Definition:|Definition:]]
	- [[#🔁 2. Loops in JavaScript#a. `for` Loop|a. `for` Loop]]
	- [[#🔁 2. Loops in JavaScript#b. `while` Loop|b. `while` Loop]]
	- [[#🔁 2. Loops in JavaScript#c. `do...while` Loop|c. `do...while` Loop]]
	- [[#🔁 2. Loops in JavaScript#d. `for...in` Loop|d. `for...in` Loop]]
	- [[#🔁 2. Loops in JavaScript#e. `for...of` Loop (ES6)|e. `for...of` Loop (ES6)]]
	- [[#🔁 2. Loops in JavaScript#f. `break` and `continue`|f. `break` and `continue`]]

##  1. Conditional Statements in JavaScript

###  Definition:

Conditional statements are used to make decisions in code. They allow the program to execute different blocks of code based on whether a condition evaluates to true or false.

---

### a. `if` Statement

Syntax:

```javascript
if (condition) {
  // block of code executed if condition is true
}
```

Example:

```javascript
let age = 18;
if (age >= 18) {
  console.log("Eligible to vote");
}
```

---

### b. `if...else` Statement

Syntax:

```javascript
if (condition) {
  // true block
} else {
  // false block
}
```

Example:

```javascript
let marks = 45;
if (marks >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}
```

---

### c. `if...else if...else` Ladder

Syntax:

```javascript
if (condition1) {
  // block 1
} else if (condition2) {
  // block 2
} else {
  // default block
}
```

Example:

```javascript
let grade = 85;
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else {
  console.log("C or below");
}
```

---

### d. Ternary Operator (`? :`)

A shorthand for `if...else`. Returns a value based on a condition.

Syntax:

```javascript
condition ? valueIfTrue : valueIfFalse
```

Example:

```javascript
let access = age >= 18 ? "Allowed" : "Denied";
```

---

### e. `switch` Statement

Used for multiple condition checking. Works well with discrete values.

Syntax:

```javascript
switch (expression) {
  case value1:
    // block
    break;
  case value2:
    // block
    break;
  default:
    // default block
}
```

Example:

```javascript
let day = 2;
switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  default: console.log("Another day");
}
```

---
