import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import reducer from './store/reducer';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

import './index.css';

axios.interceptors.request.use(
    request => {
        return request;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
)

axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
)

const store = createStore(reducer);


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
serviceWorker.register();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(reg => console.log('Service worker successfully registered'))
        .catch(err => console.log('Could not register the servie worker'));
}
