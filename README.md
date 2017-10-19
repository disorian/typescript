# Contents
<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Contents](#contents)
- [Overview](#overview)
	- [Type annotations](#type-annotations)
	- [Interfaces](#interfaces)
	- [Classes](#classes)
- [Basics](#basics)
	- [Basic Types](#basic-types)
		- [Template strings](#template-strings)
		- [Tuple](#tuple)
		- [Enums](#enums)
		- [Any](#any)
		- [Void](#void)
		- [Null and Undefined](#null-and-undefined)
		- [Never](#never)
		- [Type Assertions](#type-assertions)

<!-- /TOC -->

# Overview

[Learn the basics](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

Install Typescript globally via npm

`> npminstall -g typescript`

Typescript files have .ts extension and can be compiled with the following command:

`tsc [filename].ts`

A .js file will be created with the same name.

## Type annotations

Type annotations in TypeScript are lightweight ways to record the intended contract of the function or variable.

``` javascript
function greeter(person: string) {
  // ...
}
```
## Interfaces

In TypeScript, two types are compatible if their internal structure is compatible. This allows us to implement an interface just by having the shape the interface requires, without an explicit implements clause.

``` javascript
interface Person {
    firstName: string;
    lastName: string
}

function greeter(person: Person) {
    return "Hello " + person.firstName + " " + person.lastName;
}

var user = { firstName: "Ayn", lastName: "Rand" };

document.body.innerHTML = greeter(user);
```

## Classes
TypeScript supports new features in JavaScript, like support for class-based object-oriented programming. Classes and interfaces play well together, letting the programmer decide on the right level of abstraction.

The use of `public` keyword on arguments to the constructor is a shorthand that allows us to automatically create properties with that name.

``` javascript
class Student {
    fullName: string;

    constructor(public firstName: string, public lastName: string) {
        this.fullName = firstName + " " + lastName;
    }
}
```

Classes in TypeScript are just a shorthand for the same prototype-based OO that is frequently used in JavaScript. The following snippet is how the typescript class compiled to:

``` javascript
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
```
# Basics
## Basic Types

The `let` keyword is actually a newer JavaScript construct that TypeScript makes available, instead of using `var`.

``` javascript
// boolean
let isDone: boolean = false;

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// string
let color: string = "blue";

// Array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
```

### Template strings
They can span multiple lines and have embedded expressions. These strings are surrounded by the backtick/backquote (\`) character, and embedded expressions are of the form ``${ expr }``.
``` javascript
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.
                        I'll be ${ age + 1} years old next month.`;
```

### Tuple
Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number.

``` javascript
let x: [string, number]
x = ["text", 10, "text2", 20]
x[5] = "text3"
```

### Enums
An enum is a way of giving more friendly names to sets of numeric values.
```javascript
enum Color { Red = 1, Green, Blue }
let c: Color = Color.Blue;
let colorName: string = Color[2]; // Green
```
Blow is the javascript compilation of the typescript:
``` javascript
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
```
### Any
We may need to describe the type of variables that we do not know when we are writing an application. These values may come from dynamic content, e.g. from the user or a 3rd party library. In these cases, we want to opt-out of type-checking and let the values pass through compile-time checks. To do so, we label these with the any type

``` javascript
let something: any = 4;
something = "A string";
something = true;
```

You might expect Object to play a similar role, as it does in other languages. But variables of type Object only allow you to assign any value to them - you can’t call arbitrary methods on them, even ones that actually exist:

``` javascript
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
```

The any type is also handy if you know some part of the type, but perhaps not all of it. For example, you may have an array but the array has a mix of different types:

``` javascript
let list: any[] = [1, true, "free"];

list[1] = 100;
```
### Void
`void` is a little like the opposite of `any`: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value:

``` javascript
function warnUser(): void {
    alert("This is my warning message");
}
```
### Null and Undefined
In TypeScript, both `undefined` and `null` actually have their own types named `undefined` and `null` respectively. Much like `void`, they’re not extremely useful on their own:

By default `null` and `undefined` are subtypes of all other types. That means you can assign `null` and `undefined` to something like `number`.

However, when using the `--strictNullChecks` flag, `null` and `undefined` are only assignable to `void` and their respective types. This helps avoid many common errors. In cases where you want to pass in either a `string` or `null` and `undefined`, you can use the union type `string | null | undefined`.

### Never
Never
The never type represents the type of values that never occur. For instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns; Variables also acquire the type never when narrowed by any type guards that can never be true.

The never type is a subtype of, and assignable to, every type; however, no type is a subtype of, or assignable to, never (except never itself). Even any isn’t assignable to never.

Some examples of functions returning never:

``` javascript
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}
```

### Type Assertions
A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data. It has no runtime impact, and is used purely by the compiler.

``` javascript
// # 1
let someValue: any = "This is a string";
let stringLength: number = (<string>someValue).length;
// # 2
let someValue1: any = "This is a string";
let stringLength1: number = (someValue1 as string).length;
```
