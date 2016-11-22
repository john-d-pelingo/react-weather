'use strict';

var React = require('react');

// Presentational/Dumb component

// let Examples = React.createClass({
//     render: function () {
//         return (
//             <h3>Examples Component</h3>
//         );
//     }
// });

// Stateless functional component
// Doesn't maintain any state
var Examples = function Examples(props) {
    return React.createElement(
        'h3',
        null,
        'Examples'
    );
};

module.exports = Examples;

//# sourceMappingURL=Examples.js.map