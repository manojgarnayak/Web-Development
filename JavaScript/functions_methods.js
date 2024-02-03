// Function is a block of code that performs a specific task, can be invoked whenever needed
// 2 parts of a function function definition and a function call



// function myFunction(msg){ //   parameter
//     console.log(msg);
// }
// myFunction("Manoj"); //   argument

// function add(a,b){
//     local variables
//     sum = a+b;
//     return sum
// }
// let result = add(3,7)
// console.log(result);



// Arrow Function
// Compact way of writing a function
// const sum = (a,b) => {
//     return a + b
// };
// let result = sum(4,6)
// console.log(result);

// const vowels = (str) => {
//     let count = 0
//     for( let i = 0; i < str.length; i++){
//         if (str[i] === 'a' || str[i] === 'e' ||str[i] === 'i' ||str[i] === 'o' || str[i] == 'u'){
//             count = count + 1;
//         }
//     }
//     return count;
// }
// let result = vowels('manoj')
// console.log(result);



// For-each loop
// it is a callback function which helps to execute for each element in the array
// callback is a function passed as an argument to another function
//higher order function are functions which other functions as parameter or return a function

// let arr = [1, 2, 3, 4, 5];
// arr.forEach((val) => { 
//     console.log(val);
// })
// let arr = [1, 2, 3, 4, 5];
// arr.forEach((val) =>{
//     console.log((val * val));
// })



// Map Function
// Creates a new array with the results of some operation. the value its callback returns are used to form new array

// let nums = [1,2,3];
// let newArr = nums.map((val) => {
//     return val*val;
// });
// console.log(newArr);



// Filter function
// Creates a new array of elements that give true for a condition/filter.

// let nums = [1,2,3,4,5,6,7,8,9]
// let evenArr = nums.filter((val) => {
//     return val % 2 === 0
// })
// console.log(evenArr);



//Reduce Function
// Performs some operations and reduces the array to a single value . It returns that single value.

// let nums = [1,2,3,4,5,6,7,8,9,10];
// const output = nums.reduce((res,curr) => {
//     return res + curr
// })
// console.log(output);




// let marks = [97,64,32,49,99,96,86];
// let toppers = marks.filter((val) => {
//     return val > 90;
// });
// console.log(toppers);

let n = prompt("Enter a number: ");
let arr = [];
for(let i = 1; i <= n ; i++){
    arr[i-1] = i;
}
let result1 = arr.reduce((prev,curr) => {
    return prev + curr;
})
console.log(result1);
let result2 = arr.reduce((prev,curr) => {
    return prev * curr;
})
console.log(result2);
