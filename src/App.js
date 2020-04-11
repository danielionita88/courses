import React from 'react';
import { Router, Route } from 'react-router-dom'
import MainPage from './containers/MainPage/MainPage'
import history from './history/history'

function App() {
  return (
    <Router history={history}>
      <Route exact path={'/'} component={MainPage} />
    </Router>
  );
}

export default App;
