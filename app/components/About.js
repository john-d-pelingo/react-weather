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
        'h3',
        null,
        'About Component'
    );
};

module.exports = About;

//# sourceMappingURL=About.js.map