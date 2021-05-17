
const main = document.querySelector("main");
const form = document.querySelector("form");
const search = document.querySelector("#search");
const url = ``;



async function getWeatherByLocation(location) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=ro&units=metric&appid=508c6ddbd1eeca37978f2f17521be85e`);
    const resData = await res.json();
    console.log(resData);
    addWeather(resData);
}




function addWeather(data) {
    main.innerHTML = "";
    const temp = data.main.temp;
    const location = data.name;
    const weather = document.createElement('div');
    weather.classList.add('weather');
    weather.innerHTML = `
        <h2> 
        <img src="https://api.openweathermap.org/img/w/${data.weather[0].icon}.png"/>
        ${temp} &#8451; <span>în ${location}</span></h2>
        
    `
    main.appendChild(weather);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;
    if (location) {
        getWeatherByLocation(location);
    }
    search.value = "";
})