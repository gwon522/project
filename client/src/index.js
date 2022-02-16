import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import App from './App';

import configureStore from './store/index';

const store = configureStore();

ReactDOM.render(
    <CookiesProvider>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </CookiesProvider>,
    document.getElementById('root'),
);
