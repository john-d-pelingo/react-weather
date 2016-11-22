'use strict';

var React = require('react');

// Presentational/Dumb component
// Will get data from user and send it to the Weather component
// Using Button Foundation component
var WeatherForm = React.createClass({
    displayName: 'WeatherForm',

    onFormSubmit: function onFormSubmit(e) {
        e.preventDefault();

        var location = this.refs.location.value;

        if (location.trim().length > 0) {
            this.refs.location.value = '';

            // Pass in the location that the user searched for to the onSearch function which belongs to the parent
            // component
            this.props.onSearch(location);
        }
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h4',
                null,
                'WeatherForm component'
            ),
            React.createElement(
                'form',
                { onSubmit: this.onFormSubmit },
                React.createElement(
                    'div',
                    null,
                    React.createElement('input', { type: 'text', ref: 'location', placeholder: 'Enter location ...' })
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'button',
                        { className: 'button expanded hollow' },
                        'Submit'
                    )
                )
            )
        );
    }
});

module.exports = WeatherForm;

//# sourceMappingURL=WeatherForm.js.map