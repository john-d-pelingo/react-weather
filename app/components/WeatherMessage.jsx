let React = require('react');

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
let WeatherMessage = ({location, temp}) => {
    return (
        <div>
            <h3 className="text-center">It is {temp} in {location}</h3>
        </div>
    );
};

module.exports = WeatherMessage;