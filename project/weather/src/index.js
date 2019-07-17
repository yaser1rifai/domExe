
/* import createBanner from "./banner.js"; */
import "./style.css";
import  {myKey} from "./config.js";
/* import WebpackImg from "./webpack-logo.png"; */


/* let myIcon = document.querySelector(".icon"); */
let myTemperature = document.querySelector("#vertical");
let myWind = document.querySelector("#vertical2");
let myCountry = document.querySelector("#vertical3");
let myHumidity = document.querySelector("#vertical4");
let myButton = document.querySelector("#btn");

myButton.addEventListener("click", function(){
    let myCity = document.querySelector("#cityName").value;
    let api = `http://api.openweathermap.org/data/2.5/weather?q=${myCity}&APPID=${myKey}`;

    fetch(api)
    .then(response=> {
        return response.json() ; 
        console.log(response.json())
    })
    .then(data=>{
        console.table(data)

      /*  myIcon.innerHTML = data.weather[0].description; */
        myTemperature.innerHTML= data.main.temp;
        myWind.innerHTML= data.wind.speed;
        myCountry.innerHTML = data.sys.country;
        myHumidity.innerHTML = data.main.humidity+"%";
        //myExtra.innerHTML = data. etc.;
    })
})

