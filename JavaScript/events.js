// change in the state of an object is known as an event
// events are fired to notify code of interesting changes that may affect code execution


// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (e) => {
//     console.log(e.target)
//     console.log("Btn1 is clicked");
// }

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("pointer is inside div")
// }


// Event object
// It is a special object that has details about the event
// All event handlers have access to the event objects properties and methods


// Event Listeners
// btn1.addEventListener('click', (e) => {
//     console.log("button1 was clicked");
// });


let modeBtn = document.querySelector('#mode');
let currmode = "light" 

modeBtn.addEventListener("click", () => {
    if(currmode === 'light'){
        currmode = 'dark'
        document.querySelector('body').style.backgroundColor = 'black';
    } else {
        currmode = 'light'
        document.querySelector('body').style.backgroundColor = 'white';
    }
    console.log(currmode);
});