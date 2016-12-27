import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import Store from "./store";
import {Provider} from "react-redux";
import {Router, Route, browserHistory} from "react-router";
import Basic from './containers/basic.component';
const store = Store();

ReactDOM.render(
<Provider store={store}>
    <Router history={browserHistory}>
    <Route path="/" component={App}>
        <Route path="/simple" component={Basic}/>
    </Route>
    </Router>
    </Provider>,
    document.getElementById('root')
);