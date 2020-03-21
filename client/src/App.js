import React from 'react';
import{BrowserRouter as Router,Route} from 'react-router-dom';

import Header from './components/header'
import Main from './components/main'
import Second from './components/second'
import './App.css';

function App() {
  return (
    <Router>
      <div className="wrapper">

        <Header/>
        
        <div className="content-section">
          <div className="container">
            <Route path='/' exact component={Main}/>
            <Route path='/second' exact component={Second}/>
          </div>
        </div>

      </div>
    </Router>
  );
}

export default App;
