import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {logout} from '../actions/authActions'
import {connect} from 'react-redux'
import $ from 'jquery'

class Header extends Component {
    render() {
        const {user, isLoading, cart} = this.props;

        return (
            <div className="header-section">

                <div className="container flex-wrap">
                    <NavLink exact className="header-logo" to="/">Template</NavLink>

                    {(isLoading === false) && (
                        <ul className="header-nav desk">
                            <li>
                                <NavLink exact className="nav-item" to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink exact className="nav-item" to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink exact className="nav-item" to="/faq">FAQ</NavLink>
                            </li>
                            <li>
                                <NavLink exact className="nav-item" to="/contacts">Contacts</NavLink>
                            </li>
                            {(user.isAdmin) && (
                                <li>
                                    <NavLink className="nav-item" to="/admin">Panel</NavLink>
                                </li>
                            )}
                        </ul>
                    )}

                    <ul className="header-user">
                        <li>
                            <NavLink to='/cart' className="header-cart">
                                <div className="cart-ico">
                                    <div className="cart-ico-img">
                                        <img src="../../img/cart.png" alt=""/>
                                    </div>

                                    <div className="cart-count">
                                        {cart.count}
                                    </div>
                                </div>
                                <div className="cart-total">
                                    {cart.total}<span className="dollar">$</span>
                                </div>
                            </NavLink>
                        </li>

                        {(isLoading === false) && (!this.props.isAuth)
                            ? (
                                <span>
                                    <li>
                                        <NavLink exact className="btn simple user-btn" to="/login">
                                            <div className="user-btn-img"></div>
                                            <span className="log-text">Login</span>
                                        </NavLink>
                                    </li>
                                </span>
                            )
                            : (
                                <span>
                                    <li>
                                        <div className="btn logout simple user-btn" onClick={this.props.logout}>
                                            <span className="log-text">Logout</span>
                                            <div className="user-btn-img"></div>
                                        </div>
                                    </li>

                                </span>
                            )}

                        <li className="ham">
                               
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({isAuth: state.auth.isAuthenticated, isLoading: state.auth.isLoading, user: state.auth.user, error: state.error, cart: state.cart})

export default connect(mapStateToProps, {logout})(Header)