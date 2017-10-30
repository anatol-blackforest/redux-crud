import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";

import Reducers from './reducers';
import App from './App';
import './css/index.css';

const store = createStore(Reducers);

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
