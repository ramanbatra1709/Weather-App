const weather = new Weather('Delhi', 'ind');

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather()   {
    weather.getWeather()
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}
