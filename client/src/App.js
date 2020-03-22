import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/header'
import Main from './components/main'
import Second from './components/second'
import Edit from './components/editItem'
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
                            <Route path='/' exact component={Main}/>
                            <Route path='/edit/:id' exact render={({match})=>(<Edit id={match.params.id} />)}/>
                            <Route path='/second' exact component={Second}/>
                        </div>
                    </div>

                </div>
            </Router>
        </Provider>
    );
}

export default App;
