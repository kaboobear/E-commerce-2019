import React, { Component } from 'react';
import{NavLink} from 'react-router-dom';

 class Header extends Component {
    render() {
        return (
            <div className="header-section">
                <div className="container flex-wrap">
                    <div className="header-logo">Template</div>
                    <ul className="header-nav">
                        <li>
                            <NavLink className = "btn" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className = "btn" to="/second">Second</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header