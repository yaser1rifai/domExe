
/* import createBanner from "./banner.js"; */
import "./style.css";
import  {myKey} from "./config.js";
/* import WebpackImg from "./webpack-logo.png"; */


/* let myIcon = document.querySelector(".icon"); */
let myTemperature = document.querySelector(".temperature");
let myWind = document.querySelector(".wind");
let myCountry = document.querySelector(".country");
let myHumidity = document.querySelector(".humidity");
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
        console.log(data)

      /*  myIcon.innerHTML = data.weather[0].description; */
        myTemperature.innerHTML += data.main.temp;
        myWind.innerHTML+= data.wind.speed;
        myCountry.innerHTML += data.sys.country;
        myHumidity.innerHTML += data.main.humidity+"%";
        //myExtra.innerHTML = data. etc.;
    })
})

