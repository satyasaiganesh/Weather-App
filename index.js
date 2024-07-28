const apiKey = "d69b6293e0063f950175816c34612dc1";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkweather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".weather").style.display = "none";
        alert("Invalid City Name");
    }else{
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        document.querySelector(".weather-icon").setAttribute("src","images/"+data.weather[0].main+".png");

        document.querySelector(".weather").style.display = "block";
    }

}

searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
})


