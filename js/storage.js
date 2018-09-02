class Storage   {
    constructor()   {
        this.city;
        this.countryCode;
        this.defaultCity = 'Delhi';
        this.defaultCountryCode = 'IND';
    }
    getLocationData()   {
        this.city = localStorage.getItem('city') === null ? this.defaultCity : localStorage.getItem('city');
        this.countryCode = localStorage.getItem('countryCode') === null ? this.defaultCountryCode : localStorage.getItem('countryCode');
        return  {
            city: this.city,
            countryCode: this.countryCode
        };
    }
    setLocationData(city, countryCode)    {
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode', countryCode);
    }
}
