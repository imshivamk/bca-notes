---
dg-publish: true
---
- [[#1. `let`|1. `let`]]
- [[#2. `var`|2. `var`]]
- [[#3. `const`|3. `const`]]
- [[#Data types|Data types]]
	- [[#3. `const`#1. Primitive Data Types|1. Primitive Data Types]]
	- [[#3. `const`#2. Non-Primitive (Reference) Data Types|2. Non-Primitive (Reference) Data Types]]
- [[#Data types#Type Conversion in JavaScript|Type Conversion in JavaScript]]
	- [[#Type Conversion in JavaScript#Implicit Type Conversion (Type Coercion)|Implicit Type Conversion (Type Coercion)]]
	- [[#Type Conversion in JavaScript#2. Explicit Type Conversion|2. Explicit Type Conversion]]


## Variables

In JavaScript, there are three ways to declare variables: `let`, `var`, and `const` 

- `let`: Use when you need block scope and the variable may change.
- `var`: Use in legacy code or when you need function scope (generally less preferred in modern JavaScript).
- `const`: Use when the variable should not be reassigned (constants) and you need block scope.

### 1. `let`
- Block Scope: Variables declared with `let` are block-scoped,  only accessible within the block they are defined in (e.g., within `{}` braces).
- Re-declaration: <mark style="background: #FFF3A3A6;"></mark>cannot be re-declared within the same scope.
- hoisted to the top of their block, but they are not initialized. 
- Accessing before declaration results in a `ReferenceError`.

Example:
```javascript
let x = 10;
if (true) {
    let x = 20; // different `x` than the one outside
    console.log(x); // 20
}
console.log(x); // 10
```

### 2. `var`
- Function Scope: Variables declared with `var` are function-scoped, 
- Re-declaration: Variables declared with `var` can be re-declared within the same scope.

Example:
```javascript
var y = 10;
if (true) {
    var y = 20; // same `y` as the one outside
    console.log(y); // 20
}
console.log(y); // 20
```

### 3. `const`
- Block Scope: Variables declared with `const` are block-scoped, like `let`.
- Re-declaration: Variables declared with `const` cannot be re-declared within the same scope.
- Immutability: The value of a `const` variable cannot be changed through reassignment. However, if the `const` variable is an object or array, its properties or elements can be modified.
- Hoisting: Variables declared with `const` are hoisted to the top of their block, but they are not initialized. Accessing them before the declaration results in a `ReferenceError`.

Example:
```javascript
const z = 10;
// z = 20; // Error: Assignment to constant variable
const obj = { a: 1 };
obj.a = 2; // This is allowed
console.log(obj.a); // 2
```

## Data types

#### 1. Primitive Data Types

These are immutable and stored by value.

1. Number
    - Represents both integers and floating-point numbers.
    - Example: `42`, `3.14`, `Infinity`, `NaN`.
2. String
    - Represents a sequence of characters.
    - Example: `'Hello'`, `"World"`, `` `Template String` ``.
3. Boolean
    - Represents logical values.
    - Example: `true`, `false`.
4. Undefined
    - A variable that has been declared but not initialized.
    - Example: `let x; // x is undefined`.
5. Null
    - Represents an intentional absence of value.
    - Example: `let y = null;`.
6. Symbol (ES6)
    - Represents unique, immutable identifiers.
    - Example: `const sym = Symbol('description');`.
7. BigInt 
    - Used for integers larger than the `Number` type can safely handle.
    - Example: `const bigNum = 123456789012345678901234567890n;
#### 2. Non-Primitive (Reference) Data Types

These are mutable and stored by reference.

1. Object
    - Represents collections of key-value pairs.
    - Example: `const obj = { name: 'John', age: 25 };`.
2. Array*
    - Represents an ordered collection of values.
    - Example: `const arr = [1, 2, 3];`.
3. Function
    - Represents callable blocks of code.
    - Example: `function greet() { console.log('Hello'); }`.
4. Date
    - Represents date and time.

---

### Type Conversion in JavaScript

####  Implicit Type Conversion (Type Coercion)
Occurs automatically during operations.
- String Concatenation:
    - `5 + '5'` → `'55'` (Number → String)
- Arithmetic Operations:
    - `'5' - 2` → `3` (String → Number)
- Boolean Coercion:
    - `if ('')` → `false` (Empty string → Boolean)

#### 2. Explicit Type Conversion
Performed manually using methods.
1. To String
    - `String(value)`
    - Example: `String(123)` → `'123'`.
2. To Number
    - `Number(value)`
    - Example: `Number('123')` → `123`.
    - Using `parseInt` or `parseFloat`:
        - `parseInt('42.5')` → `42`.
3. To Boolean*
    - `Boolean(value)`
    - Example: `Boolean(0)` → `false`.

4. Falsey Values:
    - `false`, `0`, `''`, `null`, `undefined`, `NaN`.


### Variable hoisting

- Hoisting moves variable and function declarations to the top of their scope before execution.
- var is hoisted with an initial value of undefinedv
- let and const are hoisted but remain in the Temporal Dead Zone until assigned.

