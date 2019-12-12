import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, withRouter } from "react-router-dom"
import {Provider} from "react-redux"
import store from "./store"
import createHistory from 'history/createBrowserHistory';

const AppWithRouter = withRouter(App)

const history = createHistory();   

ReactDOM.render(
    <Provider store={store}>
    <Router forceRefresh={true}>
        <App />
    </Router>
    </Provider>,
 document.getElementById('root')
);

serviceWorker.unregister();
