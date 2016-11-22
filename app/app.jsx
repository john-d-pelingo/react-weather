// Require dependencies
const React = require('react');
const ReactDOM = require('react-dom');
// ES6/ES2015: Object destructuring
// Pull off four new variables
let {Route, Router, IndexRoute, hashHistory} = require('react-router');
// ES5
// let Route = require('react-router').Route;
// let Router = require('react-router').Router;
// let IndexRouter = require('react-router').IndexRouter;
// let hashHistory = require('react-router').hashHistory;

// Components
const Main = require('Main');
const Weather = require('Weather');
const About = require('About');
const Examples = require('Examples');

// Render to the HTML DOM
// The Main component will be in charge of rendering the main app
// The weather component is our index/home
//
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="examples" component={Examples}/>
            <Route path="about" component={About}/>
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
