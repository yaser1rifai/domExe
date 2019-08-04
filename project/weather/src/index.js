

import "./style.css";
import  {myKey} from "./config.js";



let myTemperature = document.querySelector("#data1");
let myWind = document.querySelector("#data2");
let myCountry = document.querySelector("#data3");
let myHumidity = document.querySelector("#data4");
let myButton = document.querySelector("#btn");

myButton.addEventListener("click", function(){
    let myCity = document.querySelector("#cityName").value;
    let api = `http://api.openweathermap.org/data/2.5/weather?q=${myCity}&APPID=${myKey}`;

    fetch(api)
    .then(response=> {
        return response.json() ; 
        console.table(response.json())
    })
    .then(data=>{
        console.table(data)

        
        myTemperature.innerHTML= Math.round(((data.main.temp)-273.15 )* 100) / 100;
        myWind.innerHTML= data.wind.speed;
        myCountry.innerHTML = data.sys.country;
        myHumidity.innerHTML = data.main.humidity+"%";
       
    })
})

