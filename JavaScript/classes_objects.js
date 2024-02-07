//  Prototypes
// A javascript object is an entity having state and behaviour (properties and method)
// JS Objects have a special property called prototype.
//prototype would be a reference to an object
// if object and prototype have same method, then object's method will be used


const student = {
    name: "Manoj Garnayak",
    marks: 78,
    printMarks: function() {
        console.log("marks = " ,this.marks);
    }
};
const employee = {
    calcTax(){
        console.log("Tax rate is 10%");
    }
};
const manoj = {
    salary: 50000,
};

manoj.__proto__ = employee


// Class is a (blueprint) program-code template for creating objects.
// Those objects will have some state(variables) and some behaviour(functions) inside it.
// constructor method is automatically invoked by new
// initializes object


class MarutiCar{
    constructor(brand){
        console.log("Creating new object");
        this.brand = brand;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
}
// let brezza = new MarutiCar("Brezza");
// console.log(brezza);



// Inheritance
// Inheritance is passing down properties and methods from parent class to child class.
// if child and parent have same method, child's method will be used, also known as method overriding


// class Parent{
//     hello(){
//         console.log("Hello");
//     }
// }
// class Child extends Parent{

// }
// let obj = new Child();


// class Person{
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
// }

// class Engineer extends Person{
//     work(){
//         console.log("eat🍴, sleep💤, code👨‍💻, repeat🔁");
//     }
// }

// let bhalu = new Engineer()
// console.log(bhalu.work());
// console.log(bhalu.eat());
// console.log(bhalu.sleep());


// Super Keyword
// The Super Keyword is used to call the constructor of its parent class to access the parent's properties and methods


class Person{
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}
class Engineer extends Person{
    constructor(branch){
        super();
        this.branch = branch;
    }
    work(){
        console.log("eat🍴, sleep💤, code👨‍💻, repeat🔁");
    }
}

// let bhalu = new Engineer("Electrical Branch");
// console.log(bhalu);





//  ********************************************************************************************************************************
let DATA = "secret data"

class User{
    constructor(name, email){
        this.name =  name;
        this.email = email;
    }
    viewData(){
        console.log("data = ", DATA);
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA = "New Value";
    }
}

let student1 = new User("Manoj", "manoj@gmail.com");
let student2 = new User("Bhalu", "bhalu@gmail.com");

let admin1 = new Admin("admin","admin@gmail.com")

console.log(admin1.viewData());