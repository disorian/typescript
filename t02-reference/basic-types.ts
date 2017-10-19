// boolean
let isDone: boolean = false;

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;


// string
let color: string = "blue";

// template strings
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}. 
I'll be ${ age + 1} years old next month.`;

let namex: string = "Behnam";
let agex: number = 34;

// array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// tuple
let x: [string, number]
x = ["text", 10, "text2", 20]
x[5] = "text3"

console.log(x[4]);

// enum
enum Color { Red = 1, Green, Blue }
let c: Color = Color.Blue;
let colorName: string = Color[2]; // Green

// any
let something: any = 4;
something = "A string";
something = true;

// any vs object
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

//let prettySure: Object = 4;
//prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

// void
function warnUser(): void {
    alert("This is my warning message");
}

// null nad undefined
let u: undefined = undefined;
let n: null = null;

// type assertion
// # 1
let someValue: any = "This is a string";
let stringLength: number = (<string>someValue).length;
// # 2
let someValue1: any = "This is a string";
let stringLength1: number = (someValue1 as string).length;