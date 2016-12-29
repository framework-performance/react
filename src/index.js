import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import Store from "./store";
import {Provider} from "react-redux";
import {Router,IndexRoute, Route, hashHistory} from "react-router";
import TreeComponent from './containers/tree.component';
const store = Store();

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={TreeComponent}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);