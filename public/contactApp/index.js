import React from 'react'
import {render} from 'react-dom';
import App from './components/app';
import Search from './components/search';
import {Provider} from 'react-redux';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import contactReducer from './reducer';
import searchReducer from './searchReducer';
import logger from 'redux-logger';
const store = createStore(
  combineReducers({
    contacts : contactReducer,
    flitered : searchReducer
  }),
  applyMiddleware(logger)
)
render(
  <Provider store={store}>
    <div className="main">
      <h1>Conatct App</h1>
        <Search />
        <App />
    </div>
  </Provider>,
  document.getElementById('app')
)
