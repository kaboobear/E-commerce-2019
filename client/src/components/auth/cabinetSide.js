import React from 'react';
import {NavLink} from 'react-router-dom';


export default function cabinetSide() {
    return (
        <ul className="cabinet-side">
            <li className="cabinet-side-item">
                <NavLink to='/cabinet/user' className="cabinet-side-link"><img alt="side-item" src="/img/client.png"/> Пользователь</NavLink>
            </li>

            <li className="cabinet-side-item">
                <NavLink to='/cabinet/delivery' className="cabinet-side-link"><img alt="side-item" src="/img/truck.png"/>Доставка</NavLink>
            </li>

            <li className="cabinet-side-item">
                <NavLink to='/cabinet/history' className="cabinet-side-link"><img alt="side-item" src="/img/cart.png"/>Заказы</NavLink>
            </li>
        </ul>
    )
}
