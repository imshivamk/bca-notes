---
dg-publish: true
---

- [[#1. Definition of Array|1. Definition of Array]]
- [[#2. Declaring Arrays (Array Literals)|2. Declaring Arrays (Array Literals)]]
- [[#3. Array Properties|3. Array Properties]]
- [[#4. Array Indexing|4. Array Indexing]]
- [[#5. Basic Array Methods (Mutating)|5. Basic Array Methods (Mutating)]]
- [[#6. Non-Mutating Methods|6. Non-Mutating Methods]]
- [[#7. Iteration Methods (ES6+ Functional Style)|7. Iteration Methods (ES6+ Functional Style)]]


## 1. Definition of Array

An array is a special variable in JavaScript used to store multiple values in a single variable. Arrays are ordered collections and allow storing elements of any data type, including numbers, strings, objects, or even other arrays.

> In JavaScript, arrays are a type of object and are dynamic in nature, meaning their size can grow or shrink as needed

---

## 2. Declaring Arrays (Array Literals)

The most common way to declare an array is using array literals, enclosed in square brackets `[]`.

### Syntax:

```javascript
let arrayName = [element1, element2, element3, ...];
```

### Examples:

```javascript
let numbers = [1, 2, 3, 4];
let fruits = ["apple", "banana", "cherry"];
let mixed = [10, "hello", true, null];
```

---

## 3. Array Properties

### a. length

Returns the number of elements in an array.

```javascript
let colors = ["red", "green", "blue"];
console.log(colors.length); // Output: 3
```

---

## 4. Array Indexing

- Arrays are zero-indexed: the first element is at index 0.
    
- You can access or modify an element using its index.
    

```javascript
let cars = ["Tesla", "BMW", "Toyota"];
console.log(cars[1]); // BMW

cars[2] = "Audi"; // Modify
```

---

## 5. Basic Array Methods (Mutating)

These methods change the original array.

### a. push()

Adds element(s) to the end of the array.

```javascript
let arr = [1, 2];
arr.push(3); // [1, 2, 3]
```

### b. pop()

Removes the last element.

```javascript
arr.pop(); // [1, 2]
```

### c. shift()

Removes the first element.

```javascript
arr.shift(); // [2]
```

### d. unshift()

Adds element(s) to the start.

```javascript
arr.unshift(0); // [0, 2]
```

### e. splice(start, deleteCount, ...items)

Adds/removes/replaces elements.

```javascript
let arr = ["a", "b", "c"];
arr.splice(1, 1, "x"); // ["a", "x", "c"]
```

---

## 6. Non-Mutating Methods

These methods return new arrays and do not modify the original array.

### a. slice(start, end)

Returns a shallow copy of a portion of an array (end is not included).

```javascript
let arr = [1, 2, 3, 4];
let sliced = arr.slice(1, 3); // [2, 3]
```

### b. concat()

Joins two or more arrays.

```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];
let result = arr1.concat(arr2); // [1, 2, 3, 4]
```

### c. join(separator)

Returns a string by joining elements with a separator.

```javascript
let arr = ["React", "Node"];
arr.join(" + "); // "React + Node"
```

### d. indexOf()

Returns the index of the first occurrence of an element.

```javascript
arr.indexOf("React"); // 0
```

### e. includes()

Checks if the array contains a specific element.

```javascript
arr.includes("Node"); // true
```

---

## 7. Iteration Methods (ES6+ Functional Style)

These are powerful methods used for transforming, filtering, and aggregating data.

### a. forEach(callback)

Executes a function for each element (does not return a new array).

```javascript
let nums = [1, 2, 3];
nums.forEach(n => console.log(n));
```

### b. map(callback)

Returns a new array with the result of applying a function to each element.

```javascript
let squared = [1, 2, 3].map(x => x * x); // [1, 4, 9]
```

### c. filter(callback)

Returns a new array with elements that pass a condition.

```javascript
let even = [1, 2, 3, 4].filter(x => x % 2 === 0); // [2, 4]
```

### d. reduce(callback, initialValue)

Reduces the array to a single value by applying a function.

```javascript
let sum = [1, 2, 3].reduce((acc, val) => acc + val, 0); // 6
```

### e. find(callback)

Returns the first element that satisfies a condition.

```javascript
let users = [{id: 1}, {id: 2}];
let user = users.find(u => u.id === 2); // {id: 2}
```

### f. some() / every()

- `some()` → true if any element passes the test.
    
- `every()` → true if all elements pass the test.
    

```javascript
[1, 2, 3].some(x => x > 2); // true
[1, 2, 3].every(x => x > 0); // true
```

---
