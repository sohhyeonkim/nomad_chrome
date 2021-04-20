const weather = document.querySelector(".js-weather");

const API_KEY = "2046f2a88a1b0b417ab7a4585c01fba9";
const COORDS = 'coords';

// approach the url and get data we need
function getWeather(lat,long){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json()
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}°C@${place}`;
    });

}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position)
{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}
function handleGeoError(){
    console.log("Cannot access geo location");
}

function askForCoords(){
    //getCurrentPosition 메소드는 인자를 2개 갖는데, 하나는 성공했을때 두번째는 실패했을때 작동. 성공과 실패 여부는
    //alert 창으로 위치정보 사용 여부를 물은 결과임
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError)

}

//localStorage에 저장된 좌표값이 없으면, 좌표를 구해 날씨를 표현하고 좌표가 있으면 날씨를 표현한다.
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);

    if(loadedCoords === null)
    {
        askForCoords();
    }
    else
    {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}

function init(){
    loadCoords();

}
init();