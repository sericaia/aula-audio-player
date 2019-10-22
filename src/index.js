import React from 'react';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { getAllSongs } from './actions';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

const muiTheme = createMuiTheme({});

const middleware = [thunk];

const store = createStore(reducers, applyMiddleware(...middleware));

store.dispatch(getAllSongs());

render(
  <ThemeProvider theme={muiTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
