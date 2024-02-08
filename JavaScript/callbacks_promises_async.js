// async await >> promise chain >> callback hell

// setTimeout(() => {
//     console.log("hello");
// }, 2000);

// Callbacks
// callback is an argument to another function



// function sum (a ,b){
//     console.log(a + b)
// }

// function calculator (a, b, sumCallback){
//     sumCallback(a,b);
// }
// calculator(1,2,sum)



// Callback hell
// Nested callbacks stacked below one another forming a pyramid structure
// Difficult to understand and manage

// Callback Hell Example
// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data", dataId); 
//         if(getNextData){
//             getNextData();  
//         }
//     },2000);
// }
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4)
//         });
//     });
// });




// Promises
//Promise is a eventual completion of task. It is an object in JS
// It is a solution to callback hell
// Resolve and Reject are callbacks provided by JS


// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//             if(getNextData){
//                 getNextData();
//             }
//         },5000)
//     });
// }
// getData(123)


// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("It is a Promise");
//         // resolve("Successfull")
//         reject("error")
//     });
// };

// let promise = getPromise();
// promise.then(() => {
//     console.log("Promise Fullfilled");
// })
// promise.catch((err) => {
//     console.log("Rejected",err);
// })





// Async Await
// always returns a promise
// await pauses the execution of its surrounding async function until the promise is settled

// async function hello(){
//     console.log("hello");
// }

function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("Weather data");
            resolve(200);
        },2000)
    })
}
async function getWeatherData(){
    await api();
}