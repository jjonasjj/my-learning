var bmw;
var atstumasPerMenesi = 638;
var x = 8630;
var perMetus = atstumasPerMenesi * 12;

function calc(){
  if (perMetus > x){ document.getElementById("form").innerHTML = "BMW automobilis virsija " + x + " km per metus"; } else {
    document.getElementById("form").innerHTML = "Automobilis nevaziuoja daugiau kaip " + x + " km";
  }
}

document.getElementById("btn").addEventListener("click", calc);

var dienos = ["Pirmadienis", "Antradienis", "Treciadienis", "Ketvirtadienis", "Penktadienis", "Sestadienis", "Sekmadienis"]

for (var i = 0; i < dienos.length; i++){
  console.log(dienos[i]);
}

var paskaitos = {pradzia: "(9:00)",
pabaiga: "(11:15)", pertrauka: "(10:00)",
kartaiPerSavaite: 4}




paskaitos.savaites = 4;

for (var i = 0; i < paskaitos.savaites; i++){
  document.getElementById("text").innerHTML += "Jau ketvirta savaite vyksta paskaitos nuo " + paskaitos.pradzia + " val. Visus " + paskaitos.kartaiPerSavaite + ' kartus per savaite plius penktadieni. Isvedinti patalpos ir galvai darom pertrauka: ' + paskaitos.pertrauka + ' val' + '<br>';
}


// Slaptazodziu tikrinimas 
var form = document.forms["passwordChange"]

if (form.addEventListener){
  form.addEventListener("submit", comparePasswords);
}else if (form.attachEvent){
  form.attachEvent('onsubmit', comparePasswords);
}

function comparePasswords(event){
  event.preventDefault();
  console.log("suveikiau!");
  
  var firstPassword = document.forms["passwordChange"]["password"].value;
  var secondPassword = document.forms["passwordChange"]["password2"].value;

  console.log(firstPassword)
  console.log(secondPassword)

  var overlay = document.getElementsByClassName('overlay');
  overlay[0].style.display = "block";
  var mygtukas = form["mygtukas"].value = "Keiciamas...";

  if(firstPassword == "" || secondPassword == "") {
    console.log("negali buti tuscias")
  } else if (firstPassword != secondPassword) {
    console.log("Slaptazodziai nevienodi")
  } else {
    form.submit();
  }

  overlay[0].style.display = "none";

}
