import React from 'react';
import ReactDOM from 'react-dom';
import domready from 'domready';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from '../components';
import { reducer as rootReducer} from '../reducer';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// Create Redux store with initial state
const store = createStore(rootReducer, preloadedState);

domready(() => {
  (() => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector('#react-root')
    );
  })();
});
