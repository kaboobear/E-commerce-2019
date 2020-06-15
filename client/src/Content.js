import React from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import {Route, Redirect} from 'react-router-dom';
import ScrollUpButton from "react-scroll-up-button";
import {connect} from "react-redux";
import {ToastContainer} from 'react-toastify';
import {Lines as Loader} from 'react-preloaders';


import Header from './components/global/header';
import Items from './components/products/items';
import Admin from './components/admin/admin';
import OneItem from './components/products/itemPage';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Cart from './components/cart/cart';
import Checkout from './components/checkout/checkout';
import Faq from './components/infoPages/faq';
import About from './components/infoPages/about';
import Contacts from './components/infoPages/contacts';
import MobMenu from './components/global/mobileMenu';
import Cabinet from './components//auth/cabinet';

class Content extends React.Component {
    state = {
        isAdminPage:false
    }

    componentDidMount(){
        let pathName = window.location.pathname.substring(1,window.location.pathname.length);
        if(pathName === 'admin') return this.setState({isAdminPage:true});
        let isAdmin= pathName.substring(0, pathName.indexOf('/')); 
        this.setState({isAdminPage:(isAdmin === 'admin')});
    }

    render() {
        const {isLoading} = this.props;

        return (
            <div className="wrapper">
                {(!isLoading) && (
                    <div class="loaded-area">
                        {/* Admin Pages */}
                        <Route path='/admin' component={Admin}/>


                        {!this.state.isAdminPage && (
                            <div className="no-admin-wrap">
                                <Header/>

                                <div className="content-section">
                                    <div className="container">
                                        {/* Main Page */}
                                        <Route path='/' exact strict component={Items}/> 
                                        <Route path='/item/:id' strict exact render={({match})=><OneItem id={match.params.id}/>}/>


                                        {/* Other Pages */}
                                        <Route path='/cart' exact strict component={Cart}/>
                                        <Route path='/checkout' exact strict component={Checkout}/>
                                        <Route path='/cabinet' component={Cabinet}/> 


                                        {/* Auth Pages */}
                                        <Route path='/login' exact strict component={Login}/>
                                        <Route path='/register' exact strict component={Register}/> 


                                        {/* Info Pages */}
                                        <Route path='/faq' exact strict component={Faq}/>
                                        <Route path='/about' exact strict component={About}/>
                                        <Route path='/contacts' exact strict component={Contacts}/>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                )}

                

                <ToastContainer containerId={'one'}/>
                {/* <Loader background="#24292e" color="#5cdb95" time="1500"/> */}
                <MobMenu/>
                <ScrollUpButton ShowAtPosition={60} ContainerClassName="to-top-button"/>
            </div>
        );
    }
}

const mapStateToProps = state => ({isLoading: state.auth.isLoading, isAuth: state.auth.isAuthenticated})

export default connect(mapStateToProps, {})(Content);