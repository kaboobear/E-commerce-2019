import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/header'
import Main from './components/main'
import Add from './components/addItem'
import Second from './components/second'
import './App.css';

import store from './store';
import {Provider} from 'react-redux';

function App() {
    return (
        <Provider store={store }>
            <Router>
                <div className="wrapper">

                    <Header/>

                    <div className="content-section">
                        <div className="container">
                            <Add/>
                            <Route path='/' exact component={Main}/>
                            <Route path='/second' exact component={Second}/>
                        </div>
                    </div>

                </div>
            </Router>
        </Provider>
    );
}

export default App;
