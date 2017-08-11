import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import { reducer } from './reducer';

const store = createStore(reducer);

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('example'),
);
