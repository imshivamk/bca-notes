---
dg-publish: true
---

- [[#Strings|Strings]]
		- [[#1. slice()|1. slice()]]
		- [[#2. split()|2. split()]]
		- [[#3. Template Strings|3. Template Strings]]
		- [[#4. Replace()|4. Replace()]]
		- [[#5. includes()|5. includes()]]
- [[#Functions|Functions]]
		- [[#Regular functions|Regular functions]]
		- [[#Arrow functions|Arrow functions]]
		- [[#3.Immidiately invoked functions|3.Immidiately invoked functions]]
		- [[#4. Higher order functions|4. Higher order functions]]
- [[#Scoping|Scoping]]
		- [[#Global scope|Global scope]]
		- [[#function scope|function scope]]
		- [[#closures|closures]]

## Strings 
- strings are immutable, any modification results in a new string.

#### 1. slice()

extracts a section of a string and returns a new string without modifying the original

```js
let str = "Hello World"
console.log(str.slice(0,5)); //output hello
```

#### 2. split()

splits a string into an array based on a separator

```js
let str = "Hello World"
let words = str.split(" ");
console.log(words); //output ["hello", "World"]
```

#### 3. Template Strings

use backticks to allow embedding expressions within a string

```js
let name = "jake"
console.log(`Hello, ${name}`); //output hello
```

#### 4. Replace()

replaces a specified substring with another

```js
let str = "Hello"
console.log(str.replace("H", "J")); //output Jello
```

#### 5. includes()

Checks if a substring exists within a string and returns true or false

```js
let str = "Hello World"
console.log(str.includes("World")); //output true
```



## Functions

#### Regular functions

```js
function greet(name){
	return `Hello ${name}`;
}
```

#### Arrow functions

```js
const greet = (name) =>{
	return `hello ${name}`
}

const add = (a,b) => a+b;

```

#### 3.Immidiately invoked functions

```js
(function(){
console.log("this runs immidiately!");
})();
```

#### 4. Higher order functions

-  a function that takes another function as argument
```js
function operate(fn,a,b){
	return fn(a,b);
}
let c = operate(((x,y)=>x+y),a,b)
```


## Scoping

#### Global scope
- the variables decalred outside any function are accessible anywhere
#### function scope
- the variables decalred inside a function are accessible only within that function
#### closures
- it is a function that remembers variables from its outer function

```js
function outer(x){
	return function inner(y){
		return x+y;
	};
}
const addFive = outer(5);
console.log(addFive(10)); // returns 15
```


