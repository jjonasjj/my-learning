var valstNumeris, modelis, variklis;

document.getElementById("prideti").addEventListener("mouseover", gaukDuomenis);

//gauk duomenis funkcija
function gaukDuomenis() {
  valstNumeris = document.getElementById("valstNumeris").value;
  modelis = document.getElementById("modelis").value;
  variklis = document.getElementById("variklis").value;
  pridekAuto(valstNumeris, modelis, variklis, "Se tau");
}

//pridek i sarasa funkcija
function pridekAuto(valstNumeris, modelis, variklis, zinute) {
  console.log(zinute)
  let rezultatuBlokas = document.getElementById("automobiliai");
  let rezultatas = '';
  
  if (valstNumeris != '' && valstNumeris.length == 6) {
    rezultatas += "<li>"+ valstNumeris + "</li>"
  }

  if (modelis != '') {
    rezultatas += "<li>"+ modelis + "</li>"
  }
  
  if (variklis != '') {
    rezultatas += "<li>"+ variklis + "</li>"
  }

  rezultatuBlokas.innerHTML = rezultatas;
}
