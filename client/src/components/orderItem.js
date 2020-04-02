import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteOrder} from '../actions/orderActions'
import TimeAgo from 'react-timeago'

class Order extends Component {
    render() {
        let {elem} = this.props;

        return (
            <div class="order-item">
                <div class="order-button">
                    <div className="order-item-id">#{this.props.id}</div>
                    <div className="order-item-client">{elem.name}</div>
                    <div className="order-item-country">{elem.country}</div>
                    <div className="order-item-count">{elem.cart.count}</div>
                    <div className="order-item-total">{elem.cart.total}
                        <span className="dollar">$</span>
                    </div>
                    <div className="order-item-time"><TimeAgo date={elem.createdAt}/></div>
                    <div className="order-space"></div>
                </div>

                <div class="order-content">
                    <div className="order-cols">
                        <div className="client-col">
                            <div className="order-col-title">
                                <img src="../../img/client.png" alt=""/>
                                <span>Client</span>
                            </div>

                            <div className="order-col-info">
                                <div className="order-col-line">
                                    <div className="order-col-word">
                                        Name:
                                    </div>

                                    <div className="order-col-val">
                                        {elem.name}
                                    </div>
                                </div>

                                <div className="order-col-line">
                                    <div className="order-col-word">
                                        Mail:
                                    </div>

                                    <div className="order-col-val">
                                        {elem.mail}
                                    </div>
                                </div>

                                <div className="order-col-line">
                                    <div className="order-col-word">
                                        Phone:
                                    </div>

                                    <div className="order-col-val">
                                        {elem.phone}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="location-col">
                            <div className="order-col-title">
                                <img src="../../img/loc.png" alt=""/>
                                <span>Location</span>
                            </div>

                            <div className="order-col-info">
                                <div className="order-col-line">
                                    <div className="order-col-word">
                                        Country:
                                    </div>

                                    <div className="order-col-val">
                                        {elem.country}
                                    </div>
                                </div>

                                <div className="order-col-line">
                                    <div className="order-col-word">
                                        City:
                                    </div>

                                    <div className="order-col-val">
                                        {elem.city}
                                    </div>
                                </div>

                                <div className="order-col-line">
                                    <div className="order-col-word">
                                        Address:
                                    </div>

                                    <div className="order-col-val">
                                        {elem.address}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="delivery-col">
                            <div className="order-col-title">
                                <img src="../../img/truck.png" alt=""/>
                                <span>Delivery</span>
                            </div>

                            <div className="order-col-info">
                                <div className="order-col-line">
                                    <div className="order-col-word">
                                        Service:
                                    </div>

                                    <div className="order-col-val">
                                        {elem.delivery === '0'
                                            ? "New Post"
                                            : elem.delivery === '1'
                                                ? "Mist Express"
                                                : "Pick Up"}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="payment-col">
                            <div className="order-col-title">
                                <img src="../../img/wallet.png" alt=""/>
                                <span>Payment</span>
                            </div>

                            <div className="order-col-info">
                                <div className="order-col-line">
                                    <div className="order-col-word">
                                        Service:
                                    </div>

                                    <div className="order-col-val">
                                        {elem.payment === '0'
                                            ? "Credit Card"
                                            : elem.payment === '1'
                                                ? "PayPal"
                                                : "Cash"}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="products-block-wrap">
                        <div className="products-block">
                            <div className="order-col-title">
                                <span>Products</span>
                            </div>

                            {elem
                                .cart
                                .items
                                .map(cartElem => (
                                    <div className="product-line">
                                        <div className="product-title">{cartElem.item.title}</div>
                                        <div className="product-dots"></div>
                                        <div className="product-count">
                                            <span className="x">x</span>{cartElem.count}</div>
                                    </div>
                                ))}
                        </div>
                    </div>

                    <div className="results-block">
                        <div className="results-total">
                            <div className="total-word">
                                    Total:
                            </div>

                            <div className="total-val">
                                    {elem.cart.total}<span className="dollar">$</span>
                            </div>
                        </div>

                        <div className="delete-btn btn" onClick={()=>{
                            this.props.deleteOrder(elem._id);
                        }}>
                            Delete
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {deleteOrder})(Order);