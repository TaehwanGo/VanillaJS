const weather = document.querySelector(".js-weather");

const API_KEY = "f0b3d43e2e0ebdfbcbac3507e3f75424";
const COORDS = 'coords';

function getWeather(lat, lon){
    // 데이터를 얻는 방법 : fetch 사용
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        // console.log(response);
        // console.log(response.json());
        return response.json()
    }).then(function(json){ // 여기에 적힌 json .. 아 이건 그냥 파라미터다.
        // console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`
    })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    // console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude, // latitude: latitude,
        longitude // longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log(`Can't access geo location`);
}

function askForCoords () {
    // API
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }
    else {
        const parseCoords = JSON.parse(loadedCoords); // localStorage에 저장한 현재 위치가 string이기 때문에 obj로 parse함 
        // console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();