//parsiusti duomenis apie Default miesta
var defaultCity = "gargzdai";
var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?q=";
var appID = "28f941a283a599657eacbf65563f7beb";

function parsiustiDuomenis(city, weatherAPI, id){
  let url = weatherAPI + city + "&appid=" + id;
  httpRequest = new XMLHttpRequest();

  httpRequest.onreadystatechange = uzkrautiDuomenis;
  httpRequest.open('get', url);
  httpRequest.send()
}

parsiustiDuomenis(defaultCity, weatherAPI, appID);

//duomenis uzkrauti i div

function uzkrautiDuomenis(){
  if (httpRequest.readyState === XMLHttpRequest.DONE){
    if (httpRequest.status === 200) {
      //duomenu apdorojimas jeigu TRUE
      alert("ok");
    } else {
      //duomenu apdorojimas jeigu FALSE
      alert("error");
    }
  }
}
//kai paspaudzia miesta, parsiusti duomenis isnaujo ir uzkrauti i div
