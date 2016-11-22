let React = require('react');

// Presentational/Dumb component
// Will get data from user and send it to the Weather component
// Using Button Foundation component
let WeatherForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var location = this.refs.location.value;

        if (location.trim().length > 0) {
            this.refs.location.value = '';

            // Pass in the location that the user searched for to the onSearch function which belongs to the parent
            // component
            this.props.onSearch(location);
        }
    },
    render      : function () {
        return (
            <div>
                <h4>WeatherForm component</h4>
                <form onSubmit={this.onFormSubmit}>
                    <div><input type="text" ref="location" placeholder="Enter location ..."/></div>
                    <div>
                        <button className="button expanded hollow">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;