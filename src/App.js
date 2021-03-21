import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { ROLL_NUMBER } from './services/Constants';
import Header from './components/Header'
import Body from './components/Body'
import TableContainer from './components/TableContainer'
const App = () => {
  return (
    <div className="main">
      <Router basename={`/${ROLL_NUMBER}`}>
        <Header />
        <Body />
        <TableContainer />
      </Router>
    </div>
  );
};

export default App;