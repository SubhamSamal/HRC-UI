import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { ROLL_NUMBER } from './services/Constants';
import Header from './components/Header'
import Body from './components/Body'
const App = () => {
  return (
    <div className="main">
      <Router basename={`/${ROLL_NUMBER}`}>
        <Header />
        <Body />
      </Router>
    </div>
  );
};

export default App;