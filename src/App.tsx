import React from 'react';
import { Router } from 'react-router-dom';
import history from './Utils/history';
import Routes from './Routes';

import './App.scss';

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
