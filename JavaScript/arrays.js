//                    Arrays
// It is a collection of items
// array is muttable

//let marks = [97,82,78,90];
// console.log(marks);

// Looping over a array

// let heroes = ['Captain', 'IronMan', 'Batman', 'Thor', 'Antman'];

// for(let i = 0; i < heroes.length; i++){
//     console.log(heroes[i]);
// }

// for(let hero of heroes){
//     console.log(hero)
// }

// for(let hero in heroes){
//     console.log(heroes[hero]);
// }



// let marks = [85, 97, 44, 37, 76, 60];
// sum = 0
// for(let i = 0; i < marks.length; i++){
//     sum = sum + marks[i]
// }
// let avg = (sum / marks.length)
// console.log(avg);


// let prices = [250, 645, 300, 900, 50]

// for (let value of prices){
//     let offer = value - (value * 0.1 )
//     console.log(`price of ${value} after discount is ${offer}`);
// }

// for(let i = 0; i < prices.length; i++){
//     let offer = prices[i] / 10
//     prices[i] -= offer;
// }
// console.log(prices);


//                   Array methods


// push method to add 1 or multiple element at the end
// pop method is used to remove a element from the end

// toString is used to convert an array to string
// let foodItems = ['Potato', "Onion","Lettuce"]
// console.log(foodItems);
// console.log(foodItems.toString());

// Concat method joins multiple arrays and return result

// unshift method works as push but adds at the start
// shift method works as pop but removes from start and returns the value


// slice method returns a piece of the array do not change in original array

// let heroes = ['Captain', 'IronMan', 'Batman', 'Thor', 'Antman']
// console.log(heroes.slice(2,4));





// splice method make changes in the original array and take 3 parameters(add, remove, replace) 
// splice(startindex, deletecount, ...newelement)

// console.log(heroes.splice(2, 3));
// console.log(heroes);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers.splice(2,0,101,102,103));
// console.log(numbers);

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies.shift());
companies.splice(2,1,"Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);
