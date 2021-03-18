import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ROLL_NUMBER } from '../src/utils/constants';
const App = () => {
  return (
    <div>
      <Router basename={`/${ROLL_NUMBER}`}>
        <h1> Hello </h1>
      </Router>
    </div>
  );
};

export default App;