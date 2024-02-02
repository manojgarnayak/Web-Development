// String is a sequence of characters used to represent a text

// let str = "Manoj Garnayak"
// console.log(str.length);
// console.log(str[7]);

//Template Literals
//It is a way to have embedded expressions iin strings
// let obj = {
//     item: "pen",
//     price: 10
// }
// console.log(`The cost of ${obj.item} is ${obj.price} rupees`);
//String Interpolation
//To create strings by doing substitution of placeholders



//Escape characters
// console.log("Manoj \nGarnayak");
// console.log("Manoj \tGarnayak");


//    String Methods
// In-built functions to manipulate a string

// let str = "   bhalu Manoj "
// console.log(str.toUpperCase())
// console.log(str.trim())

// let str = "Manoj Garnayak"
// console.log(str.slice(5, 12));


userName = prompt("Enter your full name: ")
generateUsername = "@"+userName.split(" ").join("")+userName.length
console.log(generateUsername);