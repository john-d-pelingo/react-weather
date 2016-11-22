'use strict';

var React = require('react');

// Presentational/Dumb component

// let About = React.createClass({
//     render: function () {
//         return (
//             <h3>About Component</h3>
//         );
//     }
// });

// Stateless functional component
// Doesn't maintain any state
var About = function About(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            null,
            'About'
        ),
        React.createElement(
            'p',
            null,
            'Welcome to the about pages!'
        )
    );
};

module.exports = About;

//# sourceMappingURL=About.js.map