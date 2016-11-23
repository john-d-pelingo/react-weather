'use strict';

var React = require('react');

// Using Error Modal Foundation component
// By default modals are hidden
// data-reveal lets Foundation know that we are dealing with a module
var ErrorModal = React.createClass({
    displayName: 'ErrorModal',

    // Invoked immediately after a component is mounted
    // Initialization that requires DOM nodes should go here
    componentDidMount: function componentDidMount() {
        var modal = new Foundation.Reveal($('#error-modal'));
        // Show the modal
        modal.open();
    },
    render: function render() {
        return React.createElement(
            'div',
            { id: 'error-modal', className: 'reveal tiny text-center', 'data-reveal': '' },
            React.createElement(
                'h4',
                null,
                'Some Title'
            ),
            React.createElement(
                'p',
                null,
                'Our error message!'
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

//# sourceMappingURL=ErrorModal.js.map