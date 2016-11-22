let React = require('react');

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
let About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>This is a weather application built on React using a bunch of tools.</p>
            <p>Here are some of the tools I used:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react" target="_blank">React</a> - The JavaScript framework used
                </li>
                <li>
                    <a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - Used to search for weather data by city
                    name
                </li>
            </ul>
        </div>
    );
};

module.exports = About;