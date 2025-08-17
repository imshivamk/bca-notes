---
dg-publish: true
---

## **1. Definition**

An **operator** in JavaScript is a symbol used to **perform operations** on operands (variables and values). Operators are essential for performing arithmetic, comparing values, assigning values, logical evaluation, and more.

---

## **2. Types of JavaScript Operators**

| Category             | Examples                            |
| -------------------- | ----------------------------------- |
| Arithmetic Operators | `+`, `-`, `*`, `/`, `%`, `**`       |
| Assignment Operators | `=`, `+=`, `-=`, `*=`, `/=`, etc.   |
| Comparison Operators | `==`, `===`, `!=`, `!==`, `<`, `>`  |
| Logical Operators    | `&&`, `                             |
| Unary Operators      | `typeof`, `++`, `--`, `!`, `delete` |
| Ternary Operator     | `condition ? expr1 : expr2`         |
| Bitwise Operators    | `&`, `                              |


---

## **3. Arithmetic Operators**

Used to perform mathematical calculations.

|Operator|Description|Example|Output|
|---|---|---|---|
|`+`|Addition|`2 + 3`|`5`|
|`-`|Subtraction|`5 - 2`|`3`|
|`*`|Multiplication|`4 * 2`|`8`|
|`/`|Division|`10 / 2`|`5`|
|`%`|Modulus (remainder)|`7 % 2`|`1`|
|`**`|Exponentiation (ES6)|`2 ** 3`|`8`|

---

## **4. Assignment Operators**

Used to assign values to variables.

|Operator|Description|Example|
|---|---|---|
|`=`|Assign|`x = 10`|
|`+=`|Add and assign|`x += 5` → `x = x + 5`|
|`-=`|Subtract and assign|`x -= 3`|
|`*=`|Multiply and assign|`x *= 2`|
|`/=`|Divide and assign|`x /= 4`|
|`%=`|Modulus and assign|`x %= 2`|

---

## **5. Comparison Operators**

Used to compare values. Results in a boolean (`true` or `false`).

|Operator|Description|Example|Output|
|---|---|---|---|
|`==`|Equal (type conversion allowed)|`5 == '5'`|`true`|
|`===`|Strict equal (no type conversion)|`5 === '5'`|`false`|
|`!=`|Not equal|`5 != '5'`|`false`|
|`!==`|Strict not equal|`5 !== '5'`|`true`|
|`>`|Greater than|`6 > 3`|`true`|
|`<`|Less than|`3 < 6`|`true`|
|`>=`|Greater than or equal|`5 >= 5`|`true`|
|`<=`|Less than or equal|`5 <= 6`|`true`|

---

## **6. Logical Operators**

Used to combine multiple boolean expressions.

|Operator|Description|Example|Output|
|---|---|---|---|
|`&&`|Logical AND|`true && false`|`false`|
|`||`|Logical OR|
|`!`|Logical NOT|`!true`|`false`|

---

## **7. Unary Operators**

Work with only one operand.

### **a. typeof**

- Returns the data type of a variable.

`typeof "hello"; // "string"`

### **b. ++ (Increment) / -- (Decrement)**

Increases or decreases a variable's value by 1.

javascript

CopyEdit

`let x = 5; x++; // 6`

### **c. delete**

Deletes a property from an object.

javascript

CopyEdit

`let obj = {name: "John"}; delete obj.name; // obj becomes {}`

---

## **8. Ternary Operator (Conditional Operator)**

Short form of `if...else`. Used for decision-making.

### **Syntax:**

```javascript
condition ? expressionIfTrue : expressionIfFalse
```

### **Example:**


```javascript
let age = 20; let status = age >= 18 ? "Adult" : "Minor"; // "Adult"
```

---

## **9. Bitwise Operators**

Operate on 32-bit binary numbers.

|Operator|Description|Example|Output|
|---|---|---|---|
|`&`|AND|`5 & 1`|`1`|
|`|`|OR|`5|
|`^`|XOR|`5 ^ 1`|`4`|
|`~`|NOT|`~5`|`-6`|
|`<<`|Left shift|`5 << 1`|`10`|
|`>>`|Right shift|`5 >> 1`|`2`|

---

## **10. String Operators**

Used to concatenate strings.

### **a. `+` (Concatenation)**


```javascript
"Hello" + " World"; // "Hello World"
```



### **b. `+=`**

```javascript
let str = "Hello"; str += " World"; // "Hello World"
```


---

## **11. Spread and Rest Operators (`...`)**

### **a. Spread**

Expands elements of an array or object.


```javascript
let nums = [1, 2, 3]; let copy = [...nums]; // [1, 2, 3]
```


### **b. Rest**

Gathers remaining arguments into an array.

```javascript
function sum(...args) {   return args.reduce((a, b) => a + b, 0); } sum(1, 2, 3); // 6`
```



---

