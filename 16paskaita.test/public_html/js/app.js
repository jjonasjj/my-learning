document.getElementById("btn").addEventListener("click", receiveInfo);

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
  let table = document.getElementById("car-table");
  let tRow = document.createElement('tr');
  let tDate = document.createElement('td');
  let tNumber = document.createElement('td');
  let tMeters = document.createElement('td');
  let tSeconds = document.createElement('td');

  tDate.innerHTML = car.date;
  tNumber.innerHTML = car.number;
  tMeters.innerHTML = car.meters;
  tSeconds.innerHTML = car.seconds;

  for (var i = 0; i < Object.keys(car).length; i++){
  }

    tDate.innerHTML = Object.values(car)[0];
    tNumber.innerHTML = Object.values(car)[1];
    tMeters.innerHTML = Object.values(car)[2];
    tSeconds.innerHTML = Object.values(car)[3];
    tRow.appendChild(tNumber.innerText);
    tRow.appendChild(tMeters.innerText);
    tRow.appendChild(tDate.innerText);
    tRow.appendChild(tSeconds.innerText);
}


function calcAutos(){
  let kmh = carKMH(car.meters, car.seconds);
  let userKMH = {"kmh": kmh};
  car = {...car, ...userKMH};
}


function carKMH(meters, seconds){
  var speedMS = meters / seconds;
  let kmh = (speedMS * 18) / 5;
  return kmh = kmh + " KM/H"
}


function autosDisplay(){
  //display final autos array

}
