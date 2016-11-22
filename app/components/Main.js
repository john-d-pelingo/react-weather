'use strict';

var React = require('react');

var Nav = require('Nav');

// Presentational/Dumb component

// let Main = React.createClass({
//     // this.prop.children is the children components we want to be rendered
//     // Weather
//     // Examples
//     // About
//     render: function () {
//         return (
//             <div>
//                 <Nav />
//                 <h2>Main Component</h2>
//                 {this.props.children}
//             </div>
//         );
//     }
// });

// Stateless functional component
// Doesn't maintain any state
var Main = function Main(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(Nav, null),
        React.createElement(
            'h2',
            null,
            'Main Component'
        ),
        props.children
    );
};

module.exports = Main;

//# sourceMappingURL=Main.js.map