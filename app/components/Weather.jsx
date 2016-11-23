let React = require('react');

let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let openWeatherMap = require('openWeatherMap');
let ErrorModal = require('ErrorModal');

// The Weather component will maintain state e.g. location and the temperature
let Weather = React.createClass({
    // Initiate default state
    getInitialState  : function () {
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
    handleSearch     : function (location) {
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
        this.setState({
            isLoading   : true,
            // Clear out any previous error message
            errorMessage: undefined,
            // Clean up data in every search
            location    : undefined,
            temp        : undefined
        });

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
                that.setState({
                    isLoading   : false,
                    // What gets passed back from the module we created for the openweathermap
                    // API is a JavaScript object
                    // Get the error message
                    errorMessage: errorMessage.message
                });
                // alert(errorMessage);
            }
        );
    },
    componentDidMount: function () {
        // Pull out parameters in the URL
        let location = this.props.location.query.location;

        if (location && location.trim().length > 0) {
            this.handleSearch(location);
            // Remove the location query string after the weather has been successfully searched
            window.location.hash = '#/';
        }

    },
    // Automatically update the props of Weather.jsx when the URL changes by listening to that change
    componentWillReceiveProps: function (newProps) {
        let location = newProps.location.query.location;

        if (location && location.trim().length > 0) {
            this.handleSearch(location);
            // Remove the location query string after the weather has been successfully searched
            window.location.hash = '#/';
        }
    },
    render           : function () {
        // I know that it exists in the state object
        // Retrieve location and map variable off from the state
        const {isLoading, location, temp, errorMessage} = this.state;

        // Conditionally render components given a certain state
        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather ...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }

        // Conditionally render the ErrorModal component
        function renderError() {
            if (typeof errorMessage === 'string') {
                // We have an error
                return (
                    <ErrorModal message={errorMessage}/>
                );
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;