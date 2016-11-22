let React = require('react');

let Nav = require('Nav');

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
let Main = (props) => {
    return (
        <div>
            <Nav />
            <h2>Main Component</h2>
            {props.children}
        </div>
    );
};

module.exports = Main;