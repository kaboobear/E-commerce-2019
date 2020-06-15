import React from 'react';
import {NavLink} from 'react-router-dom';


export default function sideMenu(props) {
    return (
<ul className={`side-nav ${props.isScrolled && 'active'}`}>
                    <li>
                        <NavLink exact className="nav-item" to="/"><img src="/img/house.png" alt=""/></NavLink>
                    </li>
                    <li>
                        <NavLink onClick={props.toTop} exact className="nav-item" to="/about"><img src="/img/about.png" alt=""/></NavLink>
                    </li>
                    <li>
                        <NavLink onClick={props.toTop} exact className="nav-item" to="/faq"><img src="/img/faq.png" alt=""/></NavLink>
                    </li>
                    <li>
                        <NavLink onClick={props.toTop} exact className="nav-item" to="/contacts"><img src="/img/phone.png" alt=""/></NavLink>
                    </li>
                </ul>
    )
}
