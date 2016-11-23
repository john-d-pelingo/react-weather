'use strict';

var React = require('react');

// Using Error Modal Foundation component
// By default modals are hidden
// data-reveal lets Foundation know that we are dealing with a module
var ErrorModal = React.createClass({
    displayName: 'ErrorModal',

    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    getDefaultProps: function getDefaultProps() {
        return {
            title: 'Error'
        };
    },
    // Invoked immediately after a component is mounted
    // Initialization that requires DOM nodes should go here
    componentDidMount: function componentDidMount() {
        var modal = new Foundation.Reveal($('#error-modal'));
        // Show the modal
        modal.open();
    },
    render: function render() {
        var _props = this.props,
            title = _props.title,
            message = _props.message;


        return React.createElement(
            'div',
            { id: 'error-modal', className: 'reveal tiny text-center', 'data-reveal': '' },
            React.createElement(
                'h4',
                null,
                title
            ),
            React.createElement(
                'p',
                null,
                message
            ),
            React.createElement(
                'p',
                null,
                React.createElement(
                    'button',
                    { className: 'button hollow', 'data-close': '' },
                    'Okay'
                )
            )
        );
    }
});

module.exports = ErrorModal;

// PropTypes is a way to define which properties a component expects the values (string, number or function)
// and whether or not it's required

// If I require a message property and it doesn't get passed down, the component is still gonna try to render itself
// The only thing that is gonna happen is that an error message is gonna get thrown on the web developer console

//# sourceMappingURL=ErrorModal.js.map