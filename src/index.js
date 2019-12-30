import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, withRouter } from "react-router-dom"
import {Provider} from "react-redux"
import store from "./store"

const AppWithRouter = withRouter(App)
  

ReactDOM.render(
    <Provider store={store}>
    <Router forceRefresh={true}>
        <AppWithRouter />
    </Router>
    </Provider>,
 document.getElementById('root')
);

serviceWorker.unregister();
