const weather = new Weather('Delhi', 'ind');
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather()   {
    weather.getWeather()
    .then(weather => ui.showWeather(weather))
    .catch((err) => console.error(err));
}
