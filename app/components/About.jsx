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
            <h3>About</h3>
            <p>Welcome to the about pages!</p>
        </div>
    );
};

module.exports = About;