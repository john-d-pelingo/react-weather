let React = require('react');

let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let openWeatherMap = require('openWeatherMap');

// The Weather component will maintain state e.g. location and the temperature
let Weather = React.createClass({
    // Initiate default state
    getInitialState: function () {
        // return {
        //     location: 'Miami',
        //     temp    : 88
        // };

        // Add loader
        return {
            isLoading: false
        };
    },
    // Receive the onSearch() function from the child WeatherForm component
    handleSearch   : function (location) {
        // alert(location);

        // Initialize the state based on the location sent from the child Weather Form component
        // this.setState({
        //     location: location,
        //     temp    : 23
        // });

        // !!! workaround for this getting lost
        var that = this;

        // Debugger!!!
        // JavaScript classic debugging
        // !!!
        // debugger;
        // !!!

        // Fire loader
        this.setState({isLoading: true});

        openWeatherMap.getTemperature(location).then(
            function (temperature) {
                // this gets lost and uses for openWeatherMap
                that.setState({
                    location : location,
                    temp     : temperature,
                    isLoading: false
                });
            },
            function (errorMessage) {
                that.setState({isLoading: false});
                alert(errorMessage);
            }
        );
    },
    render         : function () {
        // I know that it exists in the state object
        // Retrieve location and map variable off from the state
        const {isLoading, location, temp} = this.state;

        // Conditionally render components given a certain state
        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather ...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }

        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;