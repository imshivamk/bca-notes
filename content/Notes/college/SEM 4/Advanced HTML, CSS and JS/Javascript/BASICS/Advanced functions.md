---
dg-publish: true
---

- [[#ADVANCED function concepts|ADVANCED function concepts]]
	- [[#ADVANCED function concepts#IIFE (immidiaately invoked function expressions)|IIFE (immidiaately invoked function expressions)]]
	- [[#ADVANCED function concepts#Higher order functions|Higher order functions]]
	- [[#ADVANCED function concepts#callback function|callback function]]
	- [[#ADVANCED function concepts#First class functions|First class functions]]
	- [[#ADVANCED function concepts#Pure and Impure function|Pure and Impure function]]
	- [[#ADVANCED function concepts#Closure|Closure]]
- [[#MISC|MISC]]
	- [[#MISC#Rest parameter|Rest parameter]]
	- [[#MISC#hoisting|hoisting]]

## ADVANCED function concepts

### IIFE (immidiaately invoked function expressions)

```js
var ans = (function abcd(){
	var a = 10;
	// we do this IIFE to make private variables for that temporary scope which is destroyed s soon as the execution is complete
	return a;
})()
console.log(ans);
```

```js
let ans = ( function(){
	var a;
	return {
		set : function(val){
		a = val;
		},
		get : function(){
		console.log(a);
		return a;
		}
	}
}
ans.get();
ans.set(22);
ans.get();
)()
```

```js
let slib = (function shivamLib(){
	
	return{
		imageEffect : function(){
			console.log("image fx")
		},
		mouseFollower : function(){
			console.log("mouse fx")
		}
	}
})();

slib.mouseFollower();
```

### Higher order functions

- either returns a function or takes a function as a parameter

```js
function fn(){
	return function(){
		console.log("lalalla")
	}
}
fn()()
//or
let fnx = fn();
fnx();
```

```js
//higher order function takes another function as a parameter
function fn(val){
	val();
}
// calling it
fn(function(){
	console.log("lalala");
});
```


### callback function

a <mark style="background: #FFA500;">function that is passed as a parameter while calling another function</mark> is called a callback function

```js
function HOFn(fn, name){
	fn(name);
}

HOFn((name)=> console.log("Hello" + name), name)
```

### First class functions

in Javascript functions are first class, i.e they are treated as objects. they can be passed as paramters and they can be assigned as a value;

- every function in javacript is a first class function

```js
function fn(name){
	console.log("hi " + name)
}

let a = fn;
a("Ram"); // hi Ram
fn("Shyaam"); // hi Shyaam
```


### Pure and Impure function
- PURE : deosn't modify external state
- IMPURE : modifies external state

```js
//pure
function add(a,b){
	return a+b;
}
//impure
let total = 10;
function modify(val){
	total += val;
}
```


### Closure

- function returns another function
- and we use the parent functions data in the returned function

```js
function outer(){
	var a = 10;
	return function(){
		console.log(a);
	}
}

let ans = outer();
ans();
```

## MISC
### Rest parameter

```js
function abcd(a,b,c ...arr){
 	// a-> 1 b->2 c->3
 	// arr = [4,5]
}
abcd (1,2,3,4,5);
```

### hoisting

```js
console.log(a);
let a = 10;
// printing a before its even declared

// js converts 
let a = 10 
// into
var a; // undefined and this is moved to the top of the function i.e HOISTING
a = 10;
```

- SIMILARLY,  we can call functions even before declaration
- as its declaration is hoisted on top
- similar to C/C++ where we declare before and definition can be written even after calling it in the program
- Js does it automatically

