const API_KEY = "10c06ef38ee1ef2e5e6d1a38d6f731bf";
//https://api.openweathermap.org/data/2.5/weather?lat=37.3733813&lon=126.6294976&appid=10c06ef38ee1ef2e5e6d1a38d6f731bf

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // console.log("you live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherContainer = document.querySelector("#weather span:first-child");
            const cityContainer = document.querySelector("#weather span:last-child");

            const name = data.name;
            const weather = data.weather[0].main;

            weatherContainer.innerHTML = `${weather} / ${data.main.temp}`;
            cityContainer.innerHTML = name;
            // console.log(data.name, data.weather[0].main);
    });
}
function onGeoError(){
    alert("Can't find your location. No Weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
