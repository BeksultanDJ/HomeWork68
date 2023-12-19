import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import App from './App';

import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
