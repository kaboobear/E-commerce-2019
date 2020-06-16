import React from 'react';
import {NavLink} from 'react-router-dom';


export default function cabinetSide() {
    return (
        <ul className="cabinet-side">
            <li className="cabinet-side-item">
                <NavLink to='/cabinet/user' className="cabinet-side-link"><img alt="side-item" src="/img/client.png"/> <span className="cabinet-side-words">Пользователь</span></NavLink>
            </li>

            <li className="cabinet-side-item">
                <NavLink to='/cabinet/delivery' className="cabinet-side-link"><img alt="side-item" src="/img/truck.png"/> <span className="cabinet-side-words">Доставка</span></NavLink>
            </li>

            <li className="cabinet-side-item">
                <NavLink to='/cabinet/history' className="cabinet-side-link"><img alt="side-item" src="/img/cart.png"/> <span className="cabinet-side-words">Заказы</span></NavLink>
            </li>
        </ul>
    )
}
