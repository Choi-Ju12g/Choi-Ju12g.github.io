// https://openweathermap.org/ api 사용

const API_KEY = "eeab50c141f46ad8216800abbc257089";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = `Your location is ${data.name}`;
        weather.innerText = `Today's weather is ${Math.floor(data.main.temp)}℃ & ${data.weather[0].main}`;

    });
        
}

function onGeoError(){
    
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);