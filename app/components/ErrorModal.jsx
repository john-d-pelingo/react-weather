let React = require('react');

// Using Error Modal Foundation component
// By default modals are hidden
// data-reveal lets Foundation know that we are dealing with a module
let ErrorModal = React.createClass({
    // Invoked immediately after a component is mounted
    // Initialization that requires DOM nodes should go here
    componentDidMount: function () {
        let modal = new Foundation.Reveal($('#error-modal'));
        // Show the modal
        modal.open();
    },
    render           : function () {
        return (
            // Empty string is required for the custom attributes to be rendered
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>Some Title</h4>
                <p>Our error message!</p>
                <p>
                    {
                        /* When used on an elemenet inside of Modal
                         * when click it will automatically close the modal
                         */
                    }
                    <button className="button hollow" data-close="">Okay</button>
                </p>
            </div>
        );
    }
});

module.exports = ErrorModal;