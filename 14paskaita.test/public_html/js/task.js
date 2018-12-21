const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName(){
  let name = prompt('Enter a new name');

  para.textContent = 'Player 1: ' + name;
}

//var i = 10;
//const i = 10;
var i = 10;

if (true) {
  let i = 5;
  console.log(i)
}

console.log(i);

function f(){
  let temp_i = i;
  i = 50;
  //let i = 50;
  console.log("old definition: " + temp_i + " new definition: " + i)
}
f();
console.log(i)

// RECTANGLE

let button = document.getElementsByTagName("button")[0];
let holder = document.getElementsByClassName("rectangle-holder")[0];

function createRectangle(){
  var rectangle = document.createElement("DIV");
  rectangle.classList.add("rectangle");
  holder.appendChild(rectangle);
  listenRectangle();
};

function listenRectangle(){
  var rect = document.querySelector(".rectangle");
  rect.addEventListener("click", function(){
    this.classList.toggle('circle'); });
  document.addEventListener("keydown", function(){
    rect.classList.toggle('circle'); });
}

button.addEventListener("click", function(){
  createRectangle();
});

