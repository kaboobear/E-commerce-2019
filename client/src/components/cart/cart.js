import React, {PureComponent as Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {addToCart,setCheckout} from '../../actions/cartActions'
import {connect} from 'react-redux';
import CartItem from './cartItem';

class Cart extends Component {

    render() {
        const {cart} = this.props;

        return (
            <div className="extra-wrap">
                {(cart.count > 0)
                    ? (
                        <div>
                            <div className="cart-title">
                                <span>Корзина</span>
                            </div>

                            <div className="item-titles cart-titles">
                                <div className="item-img">Картинка</div>
                                <div className="item-title">Товар</div>
                                <div className="item-category">Категория</div>
                                {/* <div className="item-ship">Доставка</div> */}
                                <div className="item-price">Цена</div>
                                <div className="item-count">Кол-во</div>
                                <div className="item-total">
                                    <div className="total-title-text">Итого</div>
                                </div>
                                <div className="item-times"></div>
                            </div>

                            <div className="cart-items">
                                {cart
                                    .items
                                    .map(elem => (<CartItem elem={elem}/>))}
                            </div>



                            <div className="cart-check-wrap">
                                <div className="cart-check">
                                    <div className="check-title">
                                        Детали
                                    </div>

                                    <div className="check-line">
                                        <div className="check-word">
                                            Сумма
                                        </div>

                                        <div className="check-dots"></div>

                                        <div className="check-val">
                                            {cart.total}<span className="dollar">грн</span>
                                        </div>
                                    </div>

                                    <div className="check-line">
                                        <div className="check-word">
                                            Скидка
                                        </div>

                                        <div className="check-dots"></div>

                                        <div className="check-val">
                                            0<spna className="percent">%</spna> 
                                        </div>
                                    </div>

                                    <div className="check-line last">
                                        <div className="check-word">
                                            Итого
                                        </div>

                                        <div className="check-dots"></div>

                                        <div className="check-val">
                                            {parseInt(cart.total * 1)}<span className="dollar">грн</span>
                                        </div>
                                    </div>

                                    <NavLink to="/checkout" onClick={()=>{this.props.setCheckout(true)}} className="check-btn btn">
                                        Оформить
                                    </NavLink>
                                </div>
                            </div>


                        </div>
                    )
                    : (
                        <div className="cart-msg-wrap">
                            <div className="cart-msg">
                                <div className="cart-is-empty">
                                    Корзина пуста
                                </div>

                                <NavLink to="/" exact className="btn"><img src="/img/home.svg" alt=""/></NavLink>
                            </div>
                        </div>
                    )}

            </div>
        )
    }
}

const mapStateToProps = (state) => ({cart: state.cart})

export default withRouter(connect(mapStateToProps, {addToCart,setCheckout})(Cart));