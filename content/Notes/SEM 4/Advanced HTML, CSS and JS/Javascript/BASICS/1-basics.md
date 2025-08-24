---
dg-publish: true
---
- [[#01 Intro to JavaScript|01 Intro to JavaScript]]
- [[#Basic syntax|Basic syntax]]
	- [[#Basic syntax#1. Hello World! Printing to the console|1. Hello World! Printing to the console]]
	- [[#Basic syntax#2. Alert and window prompts|2. Alert and window prompts]]
	- [[#Basic syntax#3.  Take user input through html textbox|3.  Take user input through html textbox]]
	- [[#Basic syntax#logging|logging]]

## 01 Intro to JavaScript

- JavaScript is a  <mark style="background: #D2B3FFA6;">programming and scripting</mark> language used for frontend as well as backend web development
- We use JS along with HTML and CSS to design and make responsive web pages
- JS is an mainly an interpreted language and also a compiled language.

1. **Interpreted**:
	1. Traditionally, JavaScript was <mark style="background: #2dba4e;">interpreted line-by-line by the browser's JavaScript engine (V8)</mark>. 
	2. The<mark style="background: #2dba4e;"> engine reads the source code, parses it, and executes it directly </mark>without prior conversion to machine code.
	3. This interpretation process is relatively straightforward and allows for quick startup times.
2. 1. **Compiled**: 
	1.<mark style="background: #2dba4e;"> modern JavaScript engines often use a combination of interpretation and compilation</mark> techniques to improve performance.
	2. They may initially parse the JavaScript code and then compile it into an intermediate representation.
	3. This representation can be optimized and further compiled <mark style="background: #FFF3A3A6;">("Just-In-Time" compilation)</mark> into machine code for execution.
	4. compilation allows for performance improvements for frequently executed code paths.

## Basic syntax

### 1. Hello World! Printing to the console

```js
// this is our hello world code
console.log("Hello World!");
```

```js
console.error("there was an error fetching data!");
```

#### grouped Logs

```js
console.group("Alphabets");
	console.log("A");
	console.log("B");
	console.log("C");
console.groupEnd()

console.groupCollapsed("Alphabets");
	console.log("A");
	console.log("A");
console.groupEnd()
```

### 2. Alert and window prompts

```js
alert("hello world");
alert("X-men '97 is awesome!");

let name = window.prompt(`enter your name:`);
```

### 3.  Take user input through html textbox 

```html
<input placeholder="username" id="box1" type="text"></input>
```

```js
let name = document.getElementById("username").value;
```

### logging
```js
console.log("");
console.info("");
console.warn("");
console.error("");
alert("Hello");

let name = prompt("Enter name:");
let response =  confirm("Sure?"); 
// returns boolean
```

