import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './Utils/history';
import { Routes } from './Routes';
import { store } from './Store/configureStore';

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
