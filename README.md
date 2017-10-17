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
Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same.
