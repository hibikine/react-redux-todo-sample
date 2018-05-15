import * as React from 'react';
import {render} from 'react-dom';
import './scss/index.scss';
import reducer from './ducks/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import App from './app'
const store = createStore(reducer);

render(
  <Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));
