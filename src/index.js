import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { sagas } from "./sagas/index";
import {reducers} from "./reducers/index";
import App from "./components/App";
import './stylesheets/style.scss';

let middlewares = [];
// add the saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
    middleware = compose(middleware, window.devToolsExtension());
}
const reduxStore = createStore(reducers, middleware);
sagaMiddleware.run(sagas);

ReactDOM.render(
    <Provider store={reduxStore}>
        <App/>
    </Provider>,
    document.getElementById('js-react-app')
);
