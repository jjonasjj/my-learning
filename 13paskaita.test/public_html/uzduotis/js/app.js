function helloPerson(){
  var first_name = document.getElementById("first_name").value;
  var last_name = document.getElementById("last_name").value;
  var greeting = "Helo " + first_name + " " + last_name;
  document.getElementById("hello").innerHTML = greeting;
}

document.getElementById("say_hi").addEventListener('click', function(){helloPerson();});

var txt = "I can eat bananas all day";
console.log(txt.slice(0,1));

var weight, height, bmi, result;

function calcBMI(){
  weight = document.getElementById("weight").value;  
  height = document.getElementById("height").value;
  console.log(height);
  console.log(weight);

  if (document.getElementById("kg-cm").checked){
    bmi = weight / Math.pow(height, 2) * 10000;
    console.log(bmi);
  } else if (document.getElementById("lbs-ins").checked){
    bmi = (weight / Math.pow(height, 2) * 703);
    console.log(bmi)
  } else {
    alert("Please select kg-cm or lbs-ins")
  }
  
  displayBMI();
  result = "Your BMI: " + bmi;
  document.getElementById('bmi_result').innerHTML = result;
}

function displayBMI(){
  var disp = 0;
  var bmi_result_display = document.querySelector("#bmi_result");
  const list = ["underweight", "normal", "overweight", "obese", "mortally_obese"];
  bmi_result_display.classList.remove("normal", "overweight", "obese", "underweight", "mortally_obese");
  if (bmi < 18.5) {
    disp = list[0];
    console.log("< 18.5");
  } else if (bmi > 18.5 && bmi < 24.9) {
    console.log("18.5 - 24.9");
    disp = list[1];
  } else if (bmi > 25.0 && bmi < 29.9) {
    console.log("25.0 - 29.9");
    disp = list[2];
  } else if (bmi > 30.0 && bmi < 34.9) {
    console.log("30.0 - 34.9");
    disp = list[3];
  } else {
    disp = list[4];
    console.log(disp)
  } 
  
  var bmi_result_display = document.querySelector("#bmi_result");
  bmi_result_display.classList.add(disp);
}

document.getElementById("submit").addEventListener('click', function(){calcBMI();});


