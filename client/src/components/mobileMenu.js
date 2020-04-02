import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'

class Mobile extends Component {
    render() {
        const {user} = this.props;

        return (
            <div class="mobile-nav">
                <div class="close">
                   
                </div>

                <ul>
                    <ul className="header-nav mob">
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
                </ul>
            </div>
        )
    }
}


const mapStateToProps = state => ({user: state.auth.user})

export default connect(mapStateToProps)(Mobile)