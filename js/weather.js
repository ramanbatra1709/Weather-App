class Weather   {
    constructor(city, countryCode)   {
        this.apiKey = key;
        this.city = city;
        this.countryCode = countryCode;
    }
    async getWeather()    {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}`);
        const responseData = await response.json();
        return responseData;
    }
    changeLocation(city, countryCode)   {
        this.city = city;
        this.countryCode = countryCode
    }
}
