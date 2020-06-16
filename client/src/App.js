import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';

import store from './store';
import {Provider} from 'react-redux';
import {loadUser} from './actions/authActions';
import {setCart} from './actions/cartActions';
import Content from './Content';


class App extends React.Component {
    componentDidMount() {
        store.dispatch(loadUser())
        if (JSON.parse(localStorage.getItem('items'))) {
            store.dispatch(setCart(JSON.parse(localStorage.getItem('items')), localStorage.getItem('total'), localStorage.getItem('count')))
        }
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Content/>
                </Router>
            </Provider>
        );
    }
}

export default App;