//                     Document Object Module    

// Window Object
// it represents an open window in a browser. It is browser's object( not Js's) and it is automatically created by browser.
// it is a global object with lots of properties and methods


//DOM
// when a web page is loaded, the browser creates a Document Object Model of the page.
// HTML collection is very similar to array
// DOM Manipulation


// let header = document.getElementsByClassName("heading")
// console.log(header);

// let elements = document.querySelector('p');
// console.log(elements)


// let div = document.querySelector('div');
// console.log(div);


// let h2 = document.querySelector('h2');
// h2.innerText = h2.innerText + ", I am Manoj Garnayak";


// let divs = document.querySelectorAll(".box");
// divs.innerHTML = "Hello"


// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id")
// console.log();


//   Insert a element

// let newBtn = document.createElement("button");
// newBtn.innerHTML = "click me!";
// console.log(newBtn);

// let div = document.querySelector("div")
// div.append(newBtn)

// let newHeading = document.createElement('h1');
// newHeading.innerHTML = "Hello Manoj";

// document.querySelector('body').prepend(newHeading);

// let para = document.querySelector('p');
// para.remove();


let btn = document.createElement("button");
btn.innerText = "Click me!";

btn.style.color = "white";
btn.style.backgroundColor = "red"

document.querySelector('body').prepend(btn)



let para = document.querySelector('p');
para.classList.add("newclass")