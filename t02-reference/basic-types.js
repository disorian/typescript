// boolean
var isDone = false;
// number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// string
var color = "blue";
// template strings
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ". \nI'll be " + (age + 1) + " years old next month.";
var namex = "Behnam";
var agex = 34;
// array
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// tuple
var x;
x = ["text", 10, "text2", 20];
x[5] = "text3";
console.log(x[4]);
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
var colorName = Color[2]; // Green
// any
var something = 4;
something = "A string";
something = true;
// any vs object
var notSure = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
//let prettySure: Object = 4;
//prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
// void
function warnUser() {
    alert("This is my warning message");
}
// null nad undefined
var u = undefined;
var n = null;
// type assertion
// # 1
var someValue = "This is a string";
var stringLength = someValue.length;
// # 2
var someValue1 = "This is a string";
var stringLength1 = someValue1.length;
//# sourceMappingURL=basic-types.js.map