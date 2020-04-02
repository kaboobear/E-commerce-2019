import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {addToCart,setCheckout} from '../actions/cartActions'
import {connect} from 'react-redux';
import CartItem from './cartItem';

class Cart extends Component {

    render() {
        const {cart} = this.props;

        return (
            <div className="">
                {(cart.count > 0)
                    ? (
                        <div>
                            <div className="cart-title">
                                <span>Cart</span>
                            </div>

                            <div className="item-titles cart-titles">
                                <div className="item-img">Image</div>
                                <div className="item-title">Title</div>
                                <div className="item-category">Category</div>
                                <div className="item-ship">Shipping</div>
                                <div className="item-price">Price</div>
                                <div className="item-count">Count</div>
                                <div className="item-total">
                                    <div className="total-title-text">Total</div>
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
                                            5<spna className="percent">%</spna> 
                                        </div>
                                    </div>

                                    <div className="check-line last">
                                        <div className="check-word">
                                            Total
                                        </div>

                                        <div className="check-dots"></div>

                                        <div className="check-val">
                                            {parseInt(cart.total * 0.95)}<span className="dollar">$</span>
                                        </div>
                                    </div>

                                    <NavLink to="/checkout" onClick={()=>{this.props.setCheckout(true)}} className="check-btn btn">
                                        Checkout
                                    </NavLink>
                                </div>
                            </div>


                        </div>
                    )
                    : (
                        <div className="cart-msg-wrap">
                            <div className="cart-msg">
                                <div className="cart-is-empty">
                                    Your cart is empty
                                </div>

                                <NavLink to="/" exact className="btn"><img src="img/home.svg" alt=""/></NavLink>
                            </div>
                        </div>
                    )}

            </div>
        )
    }
}

const mapStateToProps = (state) => ({cart: state.cart})

export default withRouter(connect(mapStateToProps, {addToCart,setCheckout})(Cart));