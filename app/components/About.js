"use strict";

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
        "div",
        null,
        React.createElement(
            "h1",
            { className: "text-center" },
            "About"
        ),
        React.createElement(
            "p",
            null,
            "This is a weather application built on React using a bunch of tools."
        ),
        React.createElement(
            "p",
            null,
            "Here are some of the tools I used:"
        ),
        React.createElement(
            "ul",
            null,
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "https://facebook.github.io/react", target: "_blank" },
                    "React"
                ),
                " - The JavaScript framework used"
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "http://openweathermap.org", target: "_blank" },
                    "Open Weather Map"
                ),
                " - Used to search for weather data by city name"
            )
        )
    );
};

module.exports = About;

//# sourceMappingURL=About.js.map