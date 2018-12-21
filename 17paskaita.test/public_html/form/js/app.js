document.addEventListener("submit", savePresent);

var visosDovanos = [];

function savePresent(e){
  e.preventDefault();
  var form = document.forms["present-form"];
  var gavejas = form["gavejas"].value;
  var dovana = form["dovana"].value;
  var kaina = form["kaina"].value;
  var komentaras = form["komentaras"].value;
  var data = new Date().toLocaleString();

  var dovanos = {gavejas: gavejas, dovana: dovana, kaina: kaina, komentaras: komentaras, data: data};

  var present_holder = document.getElementById("present");

  var present_main_div = document.createElement("DIV");
  var present_gavejas_div = document.createElement("DIV");
  var present_dovana_div = document.createElement("DIV");
  var present_kaina_div = document.createElement("DIV");
  var present_komentaras_div = document.createElement("DIV");
  var present_data_div = document.createElement("DIV");
  var present_button_div = document.createElement("DIV");
  var present_button = document.createElement("button");

  var present_gavejas = document.createTextNode(dovanos.gavejas);
  var present_dovana = document.createTextNode(dovanos.dovana);
  var present_kaina = document.createTextNode(dovanos.kaina);
  var present_komentaras = document.createTextNode(dovanos.komentaras);
  var present_data = document.createTextNode(dovanos.data);
  var button_text = document.createTextNode("Trinti");
  var dovanosCount = 1
  present_button.setAttribute("class", "delete_button");
  present_button.setAttribute("id", dovanosCount);
  console.log(dovanosCount);
  dovanosCount += 1
  present_gavejas_div.appendChild(present_gavejas);
  present_dovana_div.appendChild(present_dovana);
  present_kaina_div.appendChild(present_kaina);
  present_komentaras_div.appendChild(present_komentaras);
  present_data_div.appendChild(present_data);
  present_button.appendChild(button_text);
  present_button_div.appendChild(present_button);

  present_main_div.appendChild(present_gavejas_div);
  present_main_div.appendChild(present_dovana_div);
  present_main_div.appendChild(present_kaina_div);
  present_main_div.appendChild(present_komentaras_div);
  present_main_div.appendChild(present_data_div);
  present_main_div.appendChild(present_button_div);

  present_holder.appendChild(present_main_div);

  var visosCount = 0;

  for (var i = 0; i <= visosDovanos.length; i++){
    visosCount += 1;
    dovanos.id = visosCount;
  }

  visosDovanos.push(dovanos);
  console.log("visosCount: " + visosCount);
  var delete_button = document.getElementsByClassName("delete_button");
  delete_button.addEventListener("click", trintiDovana(this.id));

 // function trintiDovana(id){
 //   alert(id);
 // }
}
