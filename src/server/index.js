// argo-app/index.js
import React from 'react';
import { Helmet } from "react-helmet";
import reactDomServer from 'react-dom/server';
import * as redux from 'redux';
import * as reactRedux from 'react-redux';

import content from 'content-api-graphql-lib';
import { reducer, initialState} from '../reducer';
import App from '../components';

const argo = require('argo').default;

const fetchInitialState = () => {
  return Promise.all([content('homepage')]).then((data) => {
    return {
      content: data[0]
    }
  })
};

const routes = [{
    method: 'GET',
    path: '/',
    handler() {
      return {
        component: <App />,
        reducer,
        fetchInitialState,
      };
    },
}];

argo.start({
  port: 3000,
  routes,
  dependencies: {
    React,
    reactDomServer,
    redux,
    reactRedux,
    Helmet,
  },
});
