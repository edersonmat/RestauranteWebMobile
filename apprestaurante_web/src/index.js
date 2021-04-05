import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//biblioteca de rotas
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';

//mapeando dos reducers do projeto
const rootReducer = combineReducers({
  form: formReducer //reducer do redux-form
});

//criando a STORE do projeto
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
