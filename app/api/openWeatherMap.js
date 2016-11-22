'use strict';

// Modules for promise based HTTP client
var axios = require('axios');

// Generate template
// SCREAMING_SNAKE_CASE
var API_KEY = 'e6f9c8ca47f55629067d7ff1b6840fc9';
var UNITS = 'metric';
var OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?' + 'appid=' + API_KEY + '&' + 'units=' + UNITS;

module.exports = {
    getTemperature: function getTemperature(location) {
        // Encode location variable properly for the browser
        var encodedLocation = encodeURIComponent(location);
        // Template strings
        // Can eject variables into the template string
        var requestUrl = OPEN_WEATHER_MAP_URL + '&q=' + encodedLocation;

        // return to chain the promises because the first time we call .then we are parsing out the information
        return axios.get(requestUrl).then(function (response) {
            // Success
            // debugger;
            if (response.data.cod && response.data.message) {
                // Properly catch all errors
                throw new Error('Success in call but error in result: ' + response.data.message);
            } else {
                // main.temp because that's the JSON data returned by the API
                return response.data.main.temp;
            }
        }, function (response) {
            // Error
            // debugger;
            throw new Error('Error in call: ' + response);
        });
    }
};

//# sourceMappingURL=openWeatherMap.js.map