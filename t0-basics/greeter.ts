class Student {
    fullName: string;

    constructor(public firstName: string, public lastName: string) {
        this.fullName = firstName + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string
}

function greeter(person: Person) {
    return "Hello " + person.firstName + " " + person.lastName;
}

var user = new Student("Ayn", "Rand")

document.body.innerHTML = greeter(user);