// change text
function changeText(){
document.getElementById("demo").innerHTML = "Na canza text da JavaScript 🚀";
}

// form
document.getElementById("myForm").addEventListener("submit", function(e){
e.preventDefault();

let name = document.getElementById("name").value;
let age = document.getElementById("age").value;
let course = document.getElementById("course").value;

document.getElementById("output").innerHTML =
`<p>Suna: ${name} | Shekara: ${age} | Course: ${course}</p>`;
});