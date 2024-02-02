//print "Hello" 5 times
// for (let i = 0; i < 5; i++) {
//     console.log("Hello");  
// }

//sum of 1st 10 numbers
// let sum = 0
// for (let i = 1; i <= 10 ;i++){
//     sum = sum + i
// }
// console.log(`sum is = ` + sum);



//   while loop
// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }


// Do While loop
// let i = 1;
// do{
//     console.log(i);
//     i++
// } while(i<=10);



// for-of loop
// helps to iterate over strings and arrays not to use on objects
// let str = "Manoj Garnayak"
// let size = 0
// for(let i of str){
//     console.log(i)
//     size++;
// }
// console.log(size);



// for-in loop
// helps to iterate over objects and also on arrays
// let student = {
//     name: "Manoj",
//     age: 23,
//     email: "manoj.garnayak@gmail.com"
// }
// for(let i in student){
//     console.log("Key is : "+ i,"and the "+"value is : " +  student[i]);
// }



//Practise Questions
//Print all even numbers from 0 to 100
// for(let i = 0; i <= 100; i++){
//     if( i == 0) continue
//     else if( i % 2 == 0){
//         console.log(i);
//     }
// }


//Random Number
let gameNumber = 10;
let userNum = prompt("Enter a number: ")

while(userNum != gameNumber){
    userNum = prompt("You guessed it wrong Enter a number again: ")
}
console.log("You entered the correct number");
