'use strict';

var React = require('react');

var _require = require('react-router'),
    Link = _require.Link,
    IndexLink = _require.IndexLink;

// Link provides us with the ability to add custom styles and classes to the link that is for the current page.
// Route corresponds to Link
// IndexRoute corresponds to IndexLink
// let Nav = React.createClass({
//     render: function () {
//         return (
//             <div>
//                 <h2>Nav component</h2>
//                 <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//                 <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
//                 <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
//             </div>
//         );
//     }
// });

// Stateless functional component
// Doesn't maintain any state


var Nav = function Nav(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h2',
            null,
            'Nav component'
        ),
        React.createElement(
            IndexLink,
            { to: '/', activeClassName: 'active', activeStyle: { fontWeight: 'bold' } },
            'Get Weather'
        ),
        React.createElement(
            Link,
            { to: '/about', activeClassName: 'active', activeStyle: { fontWeight: 'bold' } },
            'About'
        ),
        React.createElement(
            Link,
            { to: '/examples', activeClassName: 'active', activeStyle: { fontWeight: 'bold' } },
            'Examples'
        )
    );
};

module.exports = Nav;

//# sourceMappingURL=Nav.js.map