let React = require('react');

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
let Examples = (props) => {
    return (
        <h3>Examples Component</h3>
    );
};

module.exports = Examples;