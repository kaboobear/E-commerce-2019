import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadOrders} from '../actions/orderActions';
import {NavLink, withRouter} from 'react-router-dom';
import OrderItem from './orderItem';
import $ from 'jquery';

class Orders extends Component {
    state = {
        isSet: false
    }

    componentDidMount() {
        this
            .props
            .loadOrders();
    }

    onDeleteClick = (id) => {
        this
            .props
            .deleteItem(id)
    }

    componentDidUpdate() {
        if (!this.props.isLoading && !this.state.isSet) {
            this.setState({isSet: true})

            $('.order-item').on("click", ".order-button", function () {
                if ($(this).hasClass('active')) {
                    $(this)
                        .next()
                        .stop(true)
                        .slideUp(300);

                    $(this)
                        .parent()
                        .removeClass('active')

                    $(this).removeClass('active');
                } else {
                    $('.order-content')
                        .slideUp(300)
                        .removeClass('active');
                    $('.order-button').removeClass('active');

                    $(this)
                        .parent()
                        .addClass('active')

                    $(this)
                        .next()
                        .stop(true)
                        .slideDown(300);

                    $(this).addClass('active');
                }
            });
        }

        if (!this.props.isUserLoading) {
            (!this.props.user.isAdmin) && this
                .props
                .history
                .push("/");
        }
    }

    render() {
        let {isLoading, orders, user} = this.props;

        return (
            <div>
                {(user.isAdmin) && (
                    <div className="main-section">
                        <div className="admin-btns-wrap">
                            <div className="admin-btns">
                                <NavLink strict to="/admin/products" className="admin-nav">
                                    Products
                                </NavLink>
                                <NavLink strict to="/admin/orders" className="admin-nav">
                                    Orders
                                </NavLink>
                            </div>
                        </div>

                        {(orders.length > 0)
                            ? (
                                <div>
                                    <div>
                                        <div className="order-titles">
                                            <div className="order-item-id">Id</div>
                                            <div className="order-item-client">Client</div>
                                            <div className="order-item-country">Country</div>
                                            <div className="order-item-count">Count</div>
                                            <div className="order-item-total">Total</div>
                                            <div className="order-item-time">Time</div>
                                            <div className="order-space"></div>
                                        </div>
                                    </div>

                                    {(!isLoading) && (
                                        <div>
                                            <div class="orders-list">

                                                {orders.map((elem, id) => (<OrderItem elem={elem} id={id} key={elem._id}/>))}

                                            </div>
                                        </div>
                                    )}
                                </div>
                            )
                            : (
                                <div className="cart-msg-wrap">
                                    <div className="cart-msg">
                                        <div className="cart-is-empty admin">
                                            List is Empty
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({isUserLoading: state.auth.isLoading, orders: state.order.orders, isLoading: state.order.isLoading, user: state.auth.user})

export default withRouter(connect(mapStateToProps, {loadOrders})(Orders));