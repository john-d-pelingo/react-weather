let React = require('react');
let ReactDOM = require('react-dom');
let ReactDOMServer = require('react-dom/server');

// Using Error Modal Foundation component
// By default modals are hidden
// data-reveal lets Foundation know that we are dealing with a module
let ErrorModal = React.createClass({
    propTypes        : {
        title  : React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    getDefaultProps  : function () {
        return {
            title: 'Error'
        };

    },
    // Invoked immediately after a component is mounted
    // Initialization that requires DOM nodes should go here
    componentDidMount: function () {
        let {title, message} = this.props;

        let modalMarkup = (
            // Empty string is required for the custom attributes to be rendered
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
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

        // Transform jsx code to string
        let $modal = $(ReactDOMServer.renderToString(modalMarkup));
        // Add the markup to the DOM
        // Takes the component and returns the DOM node where that component lives
        $(ReactDOM.findDOMNode(this)).html($modal);

        let modal = new Foundation.Reveal($('#error-modal'));
        // Show the modal
        modal.open();
    },
    render           : function () {
        // After React puts the elements in the DOM, Foundation is removing them
        // so we move the functionality of render to the componentDidMount
        return (
            <div className="the-dom-node">

            </div>
        );
    }
});

module.exports = ErrorModal;

// PropTypes is a way to define which properties a component expects the values (string, number or function)
// and whether or not it's required

// If I require a message property and it doesn't get passed down, the component is still gonna try to render itself
// The only thing that is gonna happen is that an error message is gonna get thrown on the web developer console