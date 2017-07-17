var React = require('../node_modules/react');
var ReactDOM = require('../node_modules/react-dom');
// var {Router, Route, IndexRoute, hashHistory} = require('../node_modules/react-router');
/*var HomePage = require('./components/HomePage.jsx');
var Nav = require('./components/Nav.jsx');
var Account = require('./components/Account.jsx');
var Transaction = require('./components/Transaction.jsx');*/
var Main = require('./components/Main.jsx');
// var List = require('./components/List.jsx');
// var Notification = require('./components/Notification.jsx')

/*ReactDOM.render(
    <Router history={hashHistory}>
         <Router path="/" component={Main}>
              <IndexRoute component={HomePage}/>
              <Route path="account" component={Account} />
              <Route path="transaction" component={Transaction} />
         </Router>
    </Router>,
    document.getElementById('root')
);*/


ReactDOM.render(
    <Main/>,
    document.getElementById('root')
);

// require('./example.jsx');

