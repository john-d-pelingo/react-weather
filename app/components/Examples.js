'use strict';

var React = require('react');

var _require = require('react-router'),
    Link = _require.Link;

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
        'div',
        null,
        React.createElement(
            'h1',
            { className: 'text-center page-title' },
            'Examples'
        ),
        React.createElement(
            'p',
            null,
            'Here are a few example locations to try out:'
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                React.createElement(
                    Link,
                    { to: '/?location=Philadelphia' },
                    'Philadelphia, PA'
                )
            ),
            React.createElement(
                'li',
                null,
                React.createElement(
                    Link,
                    { to: '/?location=Rio' },
                    'Rio, Brazil'
                )
            )
        )
    );
};

module.exports = Examples;

//# sourceMappingURL=Examples.js.map