'use strict';

var React = require('react');

// Presentational/Dumb component
// Will receive data from the Weather component and render it
// let WeatherMessage = React.createClass({
//     render: function () {
//         // Get the props object passed by the parent Weather component
//         const {location, temp} = this.props;
//
//         return (
//             <div>
//                 <h4>It is {temp} in {location}</h4>
//             </div>
//
//         );
//     }
// });

// Stateless functional component
// Doesn't maintain any state
// Destructure the props in the parameters
var WeatherMessage = function WeatherMessage(_ref) {
    var location = _ref.location,
        temp = _ref.temp;

    return React.createElement(
        'div',
        null,
        React.createElement(
            'h4',
            null,
            'It is ',
            temp,
            ' in ',
            location
        )
    );
};

module.exports = WeatherMessage;

//# sourceMappingURL=WeatherMessage.js.map