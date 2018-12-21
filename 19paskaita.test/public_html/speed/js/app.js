document.getElementById("btn").addEventListener("click", receiveInfo);

// Display KM/H of a Single Car
function receiveInfo(){
  date = document.getElementById("1").value;
  plate = document.getElementById("2").value;
  m = document.getElementById("3").value;
  s = document.getElementById("4").value;

  info = [date, plate, m, s];

  document.getElementById("result").innerHTML = displayInfo(info[2], info[3]);
}

function displayInfo(m, s){
  speedMS = m / s;
  kmh = (speedMS * 18) / 5;
  return kmh.toFixed([2]) + " KM/H";
}







// Display all and Find Max 

document.getElementById("btn-1").addEventListener("click", displayAll);
document.getElementById("btn-2").addEventListener("click", displayMax);

var figuros = [
  {ilgis: 2, plotis: 5, aukstis: 3, id:"a0"},
  {ilgis: 3, plotis: 2, aukstis: 6, id:"a1"},
  {ilgis: 1, plotis: 5, aukstis: 5, id:"a2"}
]
function displayAll(){
  let lentelesDuomenys = '';

  for (i = 0; i < figuros.length; i++) {
      lentelesDuomenys += "<tr id=\"a"+i+"\"><td>"+figuros[i].ilgis+"</td><td>"+figuros[i].plotis+"</td><td>"+figuros[i].aukstis+"</td></tr>";
  }

  document.getElementById("duomenys-table").innerHTML = lentelesDuomenys; 

}

function displayMax(){
  let pirmas, antras, trecias, array, index, max, item_holder, maxId;
  array = [pirmas, antras, trecias];

  for (i=0; i<figuros.length; i++){
    array[i] = figuros[i].ilgis * figuros[i].plotis * figuros[i].aukstis; };

  max = array.indexOf(Math.max.apply(Math, array));
  maxId = "a" + max;
  item_holder = document.getElementById(maxId);

  if (figuros[max].id == maxId){
    item_holder.classList.add("gotcha");
  }
}









// Cars into Table with KM/H

document.getElementById("addCar").addEventListener("click", carInput);
document.getElementById("calcAutos").addEventListener("click", autosDisplay);
var autos = [];
var autos_list = [];
var car_saved = [];


function carInput(){
  date = document.getElementById("date").value;
  number = document.getElementById("number").value;
  meters = document.getElementById("meters").value;
  seconds = document.getElementById("seconds").value;
  car = {"date": date, "number": number, "meters": meters, "seconds": seconds};
  autos.push(car);
  carDisplay(car);
}


function carDisplay(){
  let car_table = document.getElementById("car-table");
  let tRow = document.createElement('tr');
  let tDate = document.createElement('td');
  let tNumber = document.createElement('td');
  let tMeters = document.createElement('td');
  let tSeconds = document.createElement('td');
  let d = document.createTextNode(car.date);
  let n = document.createTextNode(car.number);
  let m = document.createTextNode(car.meters);
  let s = document.createTextNode(car.seconds);

  tDate.appendChild(d);
  tNumber.appendChild(n);
  tMeters.appendChild(m);
  tSeconds.appendChild(s);

  tRow.appendChild(tDate);
  tRow.appendChild(tNumber);
  tRow.appendChild(tMeters);
  tRow.appendChild(tSeconds);

  car_table.appendChild(tRow);
  car_saved.push(tRow);
}


function carKMH(meters, seconds){
  var speedMS = meters / seconds;
  let kmh = (speedMS * 18) / 5;
  return kmh = kmh + " KM/H"
}


function calcAutos(meters, seconds){
  let kmh = carKMH(meters, seconds);
  let userKMH = {"kmh": parseFloat(kmh).toFixed([2]) + " km/h"};
  return userKMH;
}


function autosDisplay(){

  let autos_table = document.getElementById("autos-table");

  for (var i = 0; i < car_saved.length; i++){
    let temp_kmh = calcAutos(car_saved[i].childNodes[2].textContent, car_saved[i].childNodes[3].textContent)
    car_saved[i].final_kmh = temp_kmh;
    let speedKMH = document.createTextNode(temp_kmh.kmh);
    let tSpeed = document.createElement('td');
    tSpeed.appendChild(speedKMH);
    car_saved[i].appendChild(tSpeed);
    autos_table.appendChild(car_saved[i]);
  }
    car_saved = [];
}
