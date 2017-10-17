# Basics

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
