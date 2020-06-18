import React, {PureComponent as Component} from 'react';
import {connect} from 'react-redux';
import {addOrder} from '../../actions/orderActions'
import {clearErrors} from '../../actions/errorActions'
import {setCheckout, clearCart} from '../../actions/cartActions'
import {setIsAdded} from '../../actions/orderActions'
import {NavLink, withRouter} from 'react-router-dom';
import ReactTooltip from "react-tooltip";

class Checkout extends Component {
    state = {
        delivery: '0',
        payment: '0',
        name: '',
        // mail: '',
        phone: '',
        // country: '',
        city: '',
        address: '',
        msg: {},
        isThanks: false
    }

    componentDidMount() {
        (this.props.user.delivery) && this.setState({name: this.props.user.delivery.name, phone: this.props.user.delivery.phone, city: this.props.user.delivery.city, address: this.props.user.delivery.address});
        if (this.props.cart.isCheckout === false) {
            this
                .props.history.push('/');
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.isAuth !== prevProps.isAuth && (this.props.user.delivery)) {
            this.setState({name: this.props.user.delivery.name, phone: this.props.user.delivery.phone, city: this.props.user.delivery.city, address: this.props.user.delivery.address});
        }

        if (this.props.order.isAdded) {
            this
                .props
                .setIsAdded();
            this
                .props
                .clearCart();
            this.setState({isThanks: true});
        }

        const error = this.props.error;
        if (error !== prevProps.error) {
            if (error.id === "ORDER_ERROR") 
                this.setState({msg: error.msg})
            else 
                this.setState({msg: {}});
            }
        }

    componentWillUnmount() {
        this
            .props
            .clearErrors();
    }

    onChange = (e) => {
        const {value, name} = e.target;
        this.setState({[name]: value})
    }

    onSubmit = (e) => {
        e.preventDefault();

        let cart = {
            ...this.props.cart
        };
        let total = parseInt(cart.total);
        total += (this.state.delivery === '0')
            ? 30
            : 0;
        cart.total = total;

        const orderData = {
            author: (this.props.user)
                ? this.props.user._id
                : null,
            delivery: this.state.delivery,
            payment: this.state.payment,
            name: this.state.name,
            // mail: this.state.mail,
            phone: this.state.phone,
            // country: this.state.country,
            city: this.state.city,
            address: this.state.address,
            cart
        }

        this
            .props
            .addOrder(orderData);
    }

    render() {
        let {cart} = this.props;

        return (
            <div className="checkout-section">
                {(!this.state.isThanks)
                    ? (
                        <div>
                            <div className="cart-title">
                                Оформление заказа
                            </div>

                            <div className="checkout-wrap">
                                <form className="checkout-form" autoComplete="off">
                                    <div className="check-block-wrap">
                                        <div className="check-block">
                                            <div className="check-block-img">
                                                <img src="/img/truck.png" alt=""/>
                                            </div>

                                            <div className="check-block-info">
                                                <div className="check-block-title">
                                                    Доставка
                                                </div>

                                                <div className="check-block-content">
                                                    <label className="check-label checkout-label">
                                                        <input
                                                            type="radio"
                                                            name="delivery"
                                                            value="0"
                                                            checked={this.state.delivery === '0'}
                                                            onChange={this.onChange}/>
                                                        <span className="check-box"></span>
                                                        <span className="check-text">
                                                            <div className="check-text-title">
                                                                Новая Почта
                                                            </div>

                                                            <div className="check-text-price">
                                                                <div className="check-text-word">
                                                                    Цена:
                                                                </div>

                                                                <div className="check-text-val">
                                                                    30<span className="dollar">грн</span>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </label>

                                                    {/* <label className="check-label checkout-label">
                                                        <input
                                                            type="radio"
                                                            name="delivery"
                                                            value="1"
                                                            checked={this.state.delivery === '1'}
                                                            onChange={this.onChange}/>
                                                        <span className="check-box"></span>
                                                        <span className="check-text">
                                                            <div className="check-text-title">
                                                                Mist Express
                                                            </div>

                                                            <div className="check-text-price">
                                                                <div className="check-text-word">
                                                                    Price:
                                                                </div>

                                                                <div className="check-text-val">
                                                                    3<span className="dollar">$</span>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </label> */}

                                                    <label className="check-label checkout-label">
                                                        <input
                                                            type="radio"
                                                            name="delivery"
                                                            value="1"
                                                            checked={this.state.delivery === '1'}
                                                            onChange={this.onChange}/>
                                                        <span className="check-box"></span>
                                                        <span className="check-text">
                                                            <div className="check-text-title">
                                                                Самовывоз
                                                            </div>

                                                            <div className="check-text-price">
                                                                <div className="check-text-word">
                                                                    Цена:
                                                                </div>

                                                                <div className="check-text-val">
                                                                    0<span className="dollar">грн</span>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="check-block-wrap">
                                        <div className="check-block">
                                            <div className="check-block-img">
                                                <img src="/img/wallet.png" alt=""/>
                                            </div>

                                            <div className="check-block-info">
                                                <div className="check-block-title">
                                                    Оплата
                                                </div>

                                                <div className="check-block-content">
                                                    <label className="check-label checkout-label">
                                                        <input
                                                            type="radio"
                                                            name="payment"
                                                            value="0"
                                                            checked={this.state.payment === '0'}
                                                            onChange={this.onChange}/>
                                                        <span className="check-box"></span>
                                                        <span className="check-text">
                                                            <div className="check-text-title">
                                                                Кредитной картой
                                                            </div>

                                                            <div className="check-text-price">
                                                                <div className="check-text-word">
                                                                    Цена:
                                                                </div>

                                                                <div className="check-text-val">
                                                                    0<span className="dollar">грн</span>
                                                                    {/* <span className="percent">%</span> */}
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </label>

                                                    {/* <label className="check-label checkout-label">
                                                        <input
                                                            type="radio"
                                                            name="payment"
                                                            value="1"
                                                            checked={this.state.payment === '1'}
                                                            onChange={this.onChange}/>
                                                        <span className="check-box"></span>
                                                        <span className="check-text">
                                                            <div className="check-text-title">
                                                                PayPal
                                                            </div>

                                                            <div className="check-text-price">
                                                                <div className="check-text-word">
                                                                    Price:
                                                                </div>

                                                                <div className="check-text-val">
                                                                    2<span className="percent">%</span>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </label> */}

                                                    <label className="check-label checkout-label">
                                                        <input
                                                            type="radio"
                                                            name="payment"
                                                            value="1"
                                                            checked={this.state.payment === '1'}
                                                            onChange={this.onChange}/>
                                                        <span className="check-box"></span>
                                                        <span className="check-text">
                                                            <div className="check-text-title">
                                                                Наличными
                                                            </div>

                                                            <div className="check-text-price">
                                                                <div className="check-text-word">
                                                                    Цена:
                                                                </div>

                                                                <div className="check-text-val">
                                                                    0<span className="dollar">грн</span>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="check-block-wrap">
                                        <div className="check-block">
                                            <div className="check-block-img">
                                                <img src="/img/client.png" alt=""/>
                                            </div>

                                            <div className="check-block-info">
                                                <div className="check-block-title">
                                                    Клиент
                                                </div>

                                                <div className="input-title">ФИО</div>
                                                <div
                                                    className="simple-input"
                                                    data-tip={this.state.msg.name
                                                    ? this.state.msg.name
                                                    : ''}>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={this.state.name}
                                                        placeholder="Лесовой Сергей Юриевич"
                                                        onChange={this.onChange}
                                                        className={this.state.msg.name && "error"}/> {this.state.msg.name && (
                                                        <div className="exclam">
                                                            <img src="/img/exclam-ico.png" alt=""/>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* <div className="input-title">Почта</div>
                                                <div className="simple-input">
                                                    <input
                                                        type="text"
                                                        name="mail"
                                                        value={this.state.mail}
                                                        placeholder="sticky@gmail.com"
                                                        onChange={this.onChange}
                                                        className={this.state.msg.mail && "error"}/> {this.state.msg.mail && (
                                                        <div className="exclam">
                                                            <img src="/img/exclam-ico.png" alt=""/>
                                                        </div>
                                                    )}
                                                </div> */}

                                                <div className="input-title">Телефон</div>
                                                <div
                                                    className="simple-input"
                                                    data-tip={this.state.msg.phone
                                                    ? this.state.msg.phone
                                                    : ''}>
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        value={this.state.phone}
                                                        placeholder="093-152-47-59"
                                                        onChange={this.onChange}
                                                        className={this.state.msg.phone && "error"}/> {this.state.msg.phone && (
                                                        <div className="exclam">
                                                            <img src="/img/exclam-ico.png" alt=""/>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <ReactTooltip type="error" effect="solid" place="right"/>
                                    </div>

                                    <div className="check-block-wrap">
                                        <div className="check-block">
                                            <div className="check-block-img">
                                                <img src="/img/loc.png" alt=""/>
                                            </div>

                                            <div className="check-block-info">
                                                <div className="check-block-title">
                                                    Локация
                                                </div>

                                                {/* <div className="input-title">Country</div>
                                                <div className="simple-input">
                                                    <input
                                                        type="text"
                                                        onChange={this.onChange}
                                                        name="country"
                                                        value={this.state.country}
                                                        placeholder="England"
                                                        className={this.state.msg.country && "error"}/> {this.state.msg.country && (
                                                        <div className="exclam">
                                                            <img src="/img/exclam-ico.png" alt=""/>
                                                        </div>
                                                    )}
                                                </div> */}

                                                <div className="input-title">Город</div>
                                                <div
                                                    className="simple-input"
                                                    data-tip={this.state.msg.city
                                                    ? this.state.msg.city
                                                    : ''}>
                                                    <input
                                                        type="text"
                                                        onChange={this.onChange}
                                                        name="city"
                                                        value={this.state.city}
                                                        placeholder="Киев"
                                                        className={this.state.msg.city && "error"}/> {this.state.msg.city && (
                                                        <div className="exclam">
                                                            <img src="/img/exclam-ico.png" alt=""/>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="input-title">Адрес</div>
                                                <div
                                                    className="simple-input"
                                                    data-tip={this.state.msg.address
                                                    ? this.state.msg.address
                                                    : ''}>
                                                    <input
                                                        type="text"
                                                        onChange={this.onChange}
                                                        name="address"
                                                        value={this.state.address}
                                                        placeholder="Чигорина д.23 кв.17"
                                                        className={this.state.msg.address && "error"}/> {this.state.msg.address && (
                                                        <div className="exclam">
                                                            <img src="/img/exclam-ico.png" alt=""/>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <ReactTooltip type="error" effect="solid" place="right"/>
                                    </div>
                                </form>

                                <div className="checkout-details cd2">
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
                                        {/*
                                        <div className="check-line">
                                            <div className="check-word">
                                                Season discount
                                            </div>

                                            <div className="check-dots"></div>

                                            <div className="check-val">
                                                5<span className="percent">%</span>
                                            </div>
                                        </div> */}

                                        <div className="check-line">
                                            <div className="check-word">
                                                Доставка
                                            </div>

                                            <div className="check-dots"></div>

                                            <div className="check-val">
                                                {this.state.delivery === '0'
                                                    ? 30
                                                    : this.state.delivery === '1'
                                                        ? 0
                                                        : 0}
                                                <span className="dollar">грн</span>
                                            </div>
                                        </div>

                                        <div className="check-line">
                                            <div className="check-word">
                                                Оплата
                                            </div>

                                            <div className="check-dots"></div>

                                            <div className="check-val">
                                                {this.state.payment === '0'
                                                    ? 0
                                                    : this.state.payment === '1'
                                                        ? 0
                                                        : 0}
                                                <span className="dollar">грн</span>
                                            </div>
                                        </div>

                                        <div className="check-line last">
                                            <div className="check-word">
                                                Итого
                                            </div>

                                            <div className="check-dots"></div>

                                            <div className="check-val">
                                                {parseInt(cart.total * (1 + (this.state.payment === '0'
                                                    ? 0
                                                    : this.state.payment === '1'
                                                        ? 0
                                                        : 0))) + (this.state.delivery === '0' && 30)}<span className="dollar">грн</span>
                                            </div>
                                        </div>

                                        <div onClick={this.onSubmit} className="check-btn btn">
                                            Заказать
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                    : (
                        <div className="cart-msg-wrap">
                            <div className="cart-msg">
                                <div className="cart-is-empty">
                                    Заказ оформлен
                                </div>

                                {/* <div className="cart-msg-small">
                                    Ваш заказ будет обработан в ближайшее время
                                </div> */}

                                <NavLink to="/" exact className="btn"><img src="/img/home.svg" alt=""/></NavLink>
                            </div>
                        </div>
                    )
}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({user: state.auth.user, isAuth: state.auth.isAuthenticated, cart: state.cart, error: state.error, order: state.order})

export default withRouter(connect(mapStateToProps, {addOrder, clearErrors, setCheckout, clearCart, setIsAdded})(Checkout));