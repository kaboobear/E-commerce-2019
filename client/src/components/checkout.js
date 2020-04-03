import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addOrder} from '../actions/orderActions'
import {clearErrors} from '../actions/errorActions'
import {setCheckout, clearCart} from '../actions/cartActions'
import {setIsAdded} from '../actions/orderActions'
import {NavLink, withRouter} from 'react-router-dom';

class Checkout extends Component {
    state = {
        delivery: '0',
        payment: '0',
        name: '',
        mail: '',
        phone: '',
        country: '',
        city: '',
        address: '',
        msg: {},
        isThanks:false,
    }

    // componentDidMount() {
    //     if (this.props.cart.isCheckout === false) 
    //         this.props.history.push('/')
    // }

    componentDidUpdate(prevProps) {
        if (this.props.order.isAdded) {
            this
                .props
                .setIsAdded();
            this
                .props
                .clearCart();
            this.setState({isThanks:true});
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

        const orderData = {
            delivery: this.state.delivery,
            payment: this.state.payment,
            name: this.state.name,
            mail: this.state.mail,
            phone: this.state.phone,
            country: this.state.country,
            city: this.state.city,
            address: this.state.address,
            cart: this.props.cart
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
                                Checkout
                            </div>

                            <div className="checkout-wrap">
                                <form className="checkout-form" autocomplete="off">
                                    <div className="check-block-wrap">
                                        <div className="check-block">
                                            <div className="check-block-img">
                                                <img src="img/truck.png" alt=""/>
                                            </div>

                                            <div className="check-block-info">
                                                <div className="check-block-title">
                                                    Delivery
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
                                                                New Post
                                                            </div>

                                                            <div className="check-text-price">
                                                                <div className="check-text-word">
                                                                    Price:
                                                                </div>

                                                                <div className="check-text-val">
                                                                    7<span className="dollar">$</span>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </label>

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
                                                    </label>

                                                    <label className="check-label checkout-label">
                                                        <input
                                                            type="radio"
                                                            name="delivery"
                                                            value="2"
                                                            checked={this.state.delivery === '2'}
                                                            onChange={this.onChange}/>
                                                        <span className="check-box"></span>
                                                        <span className="check-text">
                                                            <div className="check-text-title">
                                                                Pick Up
                                                            </div>

                                                            <div className="check-text-price">
                                                                <div className="check-text-word">
                                                                    Price:
                                                                </div>

                                                                <div className="check-text-val">
                                                                    Free
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
                                                <img src="img/wallet.png" alt=""/>
                                            </div>

                                            <div className="check-block-info">
                                                <div className="check-block-title">
                                                    Payment
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
                                                                Credit Card
                                                            </div>

                                                            <div className="check-text-price">
                                                                <div className="check-text-word">
                                                                    Price:
                                                                </div>

                                                                <div className="check-text-val">
                                                                    1<span className="percent">%</span>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </label>

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
                                                    </label>

                                                    <label className="check-label checkout-label">
                                                        <input
                                                            type="radio"
                                                            name="payment"
                                                            value="2"
                                                            checked={this.state.payment === '2'}
                                                            onChange={this.onChange}/>
                                                        <span className="check-box"></span>
                                                        <span className="check-text">
                                                            <div className="check-text-title">
                                                                Cash
                                                            </div>

                                                            <div className="check-text-price">
                                                                <div className="check-text-word">
                                                                    Price:
                                                                </div>

                                                                <div className="check-text-val">
                                                                    Free
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
                                                <img src="img/client.png" alt=""/>
                                            </div>

                                            <div className="check-block-info">
                                                <div className="check-block-title">
                                                    Client
                                                </div>

                                                <div className="input-title">Name</div>
                                                <div className="simple-input">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={this.state.name}
                                                        placeholder="Mike Wallson"
                                                        onChange={this.onChange}
                                                        className={this.state.msg.name && "error"}/> {this.state.msg.name && (
                                                        <div className="exclam">
                                                            <img src="img/exclam-ico.png" alt=""/>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="input-title">Mail</div>
                                                <div className="simple-input">
                                                    <input
                                                        type="text"
                                                        name="mail"
                                                        value={this.state.mail}
                                                        placeholder="mike@gmail.com"
                                                        onChange={this.onChange}
                                                        className={this.state.msg.mail && "error"}/> {this.state.msg.mail && (
                                                        <div className="exclam">
                                                            <img src="img/exclam-ico.png" alt=""/>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="input-title">Phone</div>
                                                <div className="simple-input">
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        value={this.state.phone}
                                                        placeholder="093-148-49-57"
                                                        onChange={this.onChange}
                                                        className={this.state.msg.phone && "error"}/> {this.state.msg.phone && (
                                                        <div className="exclam">
                                                            <img src="img/exclam-ico.png" alt=""/>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="check-block-wrap">
                                        <div className="check-block">
                                            <div className="check-block-img">
                                                <img src="img/loc.png" alt=""/>
                                            </div>

                                            <div className="check-block-info">
                                                <div className="check-block-title">
                                                    Location
                                                </div>

                                                <div className="input-title">Country</div>
                                                <div className="simple-input">
                                                    <input
                                                        type="text"
                                                        onChange={this.onChange}
                                                        name="country"
                                                        value={this.state.country}
                                                        placeholder="England"
                                                        className={this.state.msg.country && "error"}/> {this.state.msg.country && (
                                                        <div className="exclam">
                                                            <img src="img/exclam-ico.png" alt=""/>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="input-title">City</div>
                                                <div className="simple-input">
                                                    <input
                                                        type="text"
                                                        onChange={this.onChange}
                                                        name="city"
                                                        value={this.state.city}
                                                        placeholder="Sheffield"
                                                        className={this.state.msg.city && "error"}/> {this.state.msg.city && (
                                                        <div className="exclam">
                                                            <img src="img/exclam-ico.png" alt=""/>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="input-title">Address</div>
                                                <div className="simple-input">
                                                    <input
                                                        type="text"
                                                        onChange={this.onChange}
                                                        name="address"
                                                        value={this.state.address}
                                                        placeholder="Berringer Str. 15/6a"
                                                        className={this.state.msg.address && "error"}/> {this.state.msg.address && (
                                                        <div className="exclam">
                                                            <img src="img/exclam-ico.png" alt=""/>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                                <div className="checkout-details cd2">
                                    <div className="cart-check">
                                        <div className="check-title">
                                            Details
                                        </div>

                                        <div className="check-line">
                                            <div className="check-word">
                                                Summary
                                            </div>

                                            <div className="check-dots"></div>

                                            <div className="check-val">
                                                {cart.total}<span className="dollar">$</span>
                                            </div>
                                        </div>

                                        <div className="check-line">
                                            <div className="check-word">
                                                Season discount
                                            </div>

                                            <div className="check-dots"></div>

                                            <div className="check-val">
                                                5<span className="percent">%</span>
                                            </div>
                                        </div>

                                        <div className="check-line">
                                            <div className="check-word">
                                                Delivery
                                            </div>

                                            <div className="check-dots"></div>

                                            <div className="check-val">
                                                {this.state.delivery === '0'
                                                    ? 7
                                                    : this.state.delivery === '1'
                                                        ? 3
                                                        : 0}
                                                <span className="dollar">$</span>
                                            </div>
                                        </div>

                                        <div className="check-line">
                                            <div className="check-word">
                                                Payment
                                            </div>

                                            <div className="check-dots"></div>

                                            <div className="check-val">
                                                {this.state.payment === '0'
                                                    ? 1
                                                    : this.state.payment === '1'
                                                        ? 2
                                                        : 0}
                                                <span className="percent">%</span>
                                            </div>
                                        </div>

                                        <div className="check-line last">
                                            <div className="check-word">
                                                Total
                                            </div>

                                            <div className="check-dots"></div>

                                            <div className="check-val">
                                                {parseInt(cart.total * (0.95 + (this.state.payment === '0'
                                                    ? 0.01
                                                    : this.state.payment === '1'
                                                        ? 0.02
                                                        : 0))) + (this.state.delivery === '0'
                                                    ? 7
                                                    : this.state.delivery === '1'
                                                        ? 3
                                                        : 0)}<span className="dollar">$</span>
                                            </div>
                                        </div>

                                        <div onClick={this.onSubmit} className="check-btn btn">
                                            Order Now
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
                                Thank You
                            </div>

                            <div className="cart-msg-small">
                                Your order is processing now
                            </div>

                            <NavLink to="/" exact className="btn"><img src="img/home.svg" alt=""/></NavLink>
                        </div>
                    </div>
                    )
}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({cart: state.cart, error: state.error, order: state.order})

export default withRouter(connect(mapStateToProps, {addOrder, clearErrors, setCheckout, clearCart, setIsAdded})(Checkout));