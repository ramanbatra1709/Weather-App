class UI    {
    constructor()   {
        this.location = document.querySelector('#w-location');
        this.desc = document.querySelector('#w-desc');
        this.string = document.querySelector('#w-string');
        this.details = document.querySelector('#w-details');
        this.icon = document.querySelector('#w-icon');
        this.humidity = document.querySelector('#w-humidity');
        this.pressure = document.querySelector('#w-pressure');
        this.visibility = document.querySelector('#w-visibility');
        this.wind = document.querySelector('#w-wind');
    }
    showWeather(weather)   {
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = `${Number.parseFloat(weather.main.temp) - 273.15} °C`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure} mb`; 
        this.visibility.textContent = `Visibility: ${weather.visibility} m`;
        this.wind.textContent = `Wind speed: ${weather.wind.speed} km/h`;
    }
}
