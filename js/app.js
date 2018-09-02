const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.countryCode);
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);
document.querySelector('#w-change-btn').addEventListener('click', (event) => {
    const city = document.querySelector('#city').value;
    const countryCode = document.querySelector('#countryCode').value;
    weather.changeLocation(city, countryCode);
    storage.setLocationData(city, countryCode);
    getWeather();
    $('#locationModal').modal('hide');
});

function getWeather()   {
    weather.getWeather()
    .then(weather => {
        if (weather.cod === 200)    {
            ui.showWeather(weather)
        }
        else    {
            ui.showAlert('City not found', 'alert alert-danger');
        }
    })
    .catch((err) => console.error(err));
}
