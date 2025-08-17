---
dg-publish: true
---

## 🔁 2. Loops in JavaScript

###  Definition:

Loops are used to execute a block of code repeatedly as long as a specified condition is true. Loops are essential for processing arrays, handling asynchronous logic, and iterating over data in MERN stack apps.

---

### a. `for` Loop

Syntax:

```javascript
for (initialization; condition; increment) {
  // code block
}
```

Example:

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

---

### b. `while` Loop

Syntax:

```javascript
while (condition) {
  // block of code
}
```

Example:

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

---

### c. `do...while` Loop

Executes the block at least once, even if the condition is false.

Syntax:

```javascript
do {
  // block
} while (condition);
```

Example:

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);
```

---

### d. `for...in` Loop

Used to iterate over the properties of an object.

Syntax:

```javascript
for (let key in object) {
  // code
}
```

Example:

```javascript
let user = { name: "John", age: 30 };
for (let key in user) {
  console.log(key + ": " + user[key]);
}
```

---

### e. `for...of` Loop (ES6)

Used to iterate over iterable objects like arrays, strings, etc.

Syntax:

```javascript
for (let value of iterable) {
  // code
}
```

Example:

```javascript
let fruits = ["apple", "banana"];
for (let fruit of fruits) {
  console.log(fruit);
}
```

---

### f. `break` and `continue`

- `break`: Exits the loop immediately.
    
- `continue`: Skips the current iteration and continues the loop.
    

Example:

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i); // Skips 3
}
```

---