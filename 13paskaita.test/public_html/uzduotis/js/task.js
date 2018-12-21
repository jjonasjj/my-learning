//var div = document.createElement('div');
var dvimpenki = document.getElementById("dvimpenki").innerText;
alert(dvimpenki + 5);
var plotis, aukstis;
var perimetras, plotas, istrizaine;

function skaiciuokRezultata() {
  plotis = parseInt(document.getElementById("plotis").value);
  aukstis = parseInt(document.getElementById("aukstis").value);

  perimetras = (plotis + aukstis) * 2;
  plotas = plotis * aukstis;
  istrizaine = plotis * aukstis / 2;

  console.log(perimetras);
  console.log(plotas);
  console.log(istrizaine);
}

//rodykRezultata();
//IF
function rodykRezultata(){
  skaiciuokRezultata();

  var belekas = "Plotis: " + plotis
    + "<br>" + "Aukstis: " + aukstis 
    + "<br>" + " Perimetras: " + perimetras
    + "<br>" + "Istrizaine: " + istrizaine; 

  document.getElementById("paragrafas").innerHTML = belekas;
}

//document.getElementById("skaiciuoti").onclick = function(){
//  rodykRezultata();
//}

document.getElementById("skaiciuoti").addEventListener("click", rodykRezultata());
