import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Header from './components/header'
import Items from './components/items'
import Admin from './components/admin'
import Login from './components/login'
import Register from './components/register'
import Add from './components/addItem'
import Edit from './components/editItem'

import store from './store';
import {Provider} from 'react-redux';
import {loadUser} from './actions/authActions'

class App extends React.Component {
    componentDidMount() {
        store.dispatch(loadUser())
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="wrapper">
                        <Header/>

                        <div className="content-section">

                            <div className="container">
                                <Route path='/' exact strict component={Items}/>

                                <Route path='/admin' exact strict component={Admin}/>
                                <Route
                                    path='/add'
                                    exact
                                    strict
                                    component={Add}/>
                                <Route
                                    path='/edit/:id'
                                    exact
                                    render = {({match})=><Edit id={match.params.id}/>}/>

                                <Route path='/login' exact strict component={Login}/>
                                <Route path='/register' exact strict component={Register}/>
                            </div>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
