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
// Use className for HTML classes
// jsx takes className and convert it to class before it shows it to the browser
// Using Menu and Top Bar Foundation components


var Nav = React.createClass({
    displayName: 'Nav',

    // Handler for the search form
    onSearch: function onSearch(e) {
        e.preventDefault();
        alert('Not yet wired up!');
    },
    render: function render() {
        return React.createElement(
            'div',
            { className: 'top-bar' },
            React.createElement(
                'div',
                { className: 'top-bar-left' },
                React.createElement(
                    'ul',
                    { className: 'menu' },
                    React.createElement(
                        'li',
                        { className: 'menu-text' },
                        'React Weather App'
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            IndexLink,
                            { to: '/', activeClassName: 'active', activeStyle: { fontWeight: 'bold' } },
                            'Get Weather'
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            Link,
                            { to: '/about', activeClassName: 'active', activeStyle: { fontWeight: 'bold' } },
                            'About'
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            Link,
                            { to: '/examples', activeClassName: 'active',
                                activeStyle: { fontWeight: 'bold' } },
                            'Examples'
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'top-bar-right' },
                React.createElement(
                    'form',
                    { onSubmit: this.onSearch },
                    React.createElement(
                        'ul',
                        { className: 'menu' },
                        React.createElement(
                            'li',
                            null,
                            React.createElement('input', { type: 'search', placeholder: 'Search city' })
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement('input', { type: 'submit', className: 'button', value: 'Get Weather' })
                        )
                    )
                )
            )
        );
    }
});

module.exports = Nav;

var oldRenderedNav = React.createElement(
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

//# sourceMappingURL=Nav.js.map