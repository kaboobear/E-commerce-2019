import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {logout} from '../actions/authActions'
import {connect} from 'react-redux'

class Header extends Component {

    render() {
        const {user, isLoading} = this.props;

        return (
            <div className="header-section">
                
                <div className="container flex-wrap">
                    <NavLink exact className="header-logo" to="/">Template</NavLink>

                    {(isLoading === false) && (
                        <ul className="header-nav">
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
                                    <NavLink exact className="nav-item" to="/admin">Panel</NavLink>
                                </li>
                            )}
                        </ul>
                    )}

                    <ul className="header-user">
                        {(isLoading === false) && (!this.props.isAuth)
                            ? (
                                <span>
                                    <li>
                                        <NavLink exact className="btn simple" to="/login">Login</NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact className="btn simple" to="/register">Register</NavLink>
                                    </li>
                                </span>
                            )
                            : (
                                <span>
                                    <li>
                                        <h3 className="user-title">
                                            {user.login}
                                        </h3>
                                    </li>
                                    <li>
                                        <div onClick={this.props.logout} className="btn simple">Logout</div>
                                    </li>
                                </span>
                            )}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({isAuth: state.auth.isAuthenticated, isLoading: state.auth.isLoading, user: state.auth.user, error: state.error})

export default connect(mapStateToProps, {logout})(Header)