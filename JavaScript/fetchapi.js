// Fetch API provides an interface for fetching resources
// It uses request and response objects
// fetch() method is used to fetch a resource(data)


const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector(".facts")
const btn = document.querySelector('#btn')

const getFacts = async () => {
    console.log("getting data....");
    let response = await fetch(URL);
    console.log(response.status);
    let data = await response.json();
    factPara.innerText = data[0].text;
}

btn.addEventListener('click', getFacts)

// json method() returns a second promise that resolves with the result of parsing the response body text as json. (input is Json, output is JS object)