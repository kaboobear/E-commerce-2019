import React, {PureComponent as Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {loadOrders} from '../../actions/orderActions';
import {withRouter} from 'react-router-dom';
import OrderItem from './orderItem';

class Orders extends Component {
    state = {
        type1: false,
        type2: false,
        type3: false
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

    componentDidUpdate(prevProps) {
        if (this.props.isLoading !== prevProps.isLoading) {
            this
                .props
                .orders
                .map(elem => {
                    (elem.status === 'new') && this.setState({type1: true});
                    (elem.status === 'processing') && this.setState({type2: true});
                    (elem.status === 'finished') && this.setState({type3: true});
                    return 'x';
                })
        }
    }

    render() {
        let {isLoading, orders} = this.props;

        return (
            <div>
                <div className="main-section">
                    <div className="admin-wrap-title">
                        Заказы
                    </div>

                    {(orders.length > 0)
                        ? (
                            <div>
                                {(!isLoading) && (
                                    <div>
                                        {(this.state.type1 === true) && (
                                            <Fragment>
                                                <div className="admin-subtitle">Новые</div>
                                                <div class="orders-list">
                                                    {orders.map((elem, id) => (elem.status === 'new') && (<OrderItem elem={elem} id={id} key={elem._id}/>))}
                                                </div>
                                            </Fragment>
                                        )}

                                        {(this.state.type2 === true) && (
                                            <Fragment>
                                                <div className="admin-subtitle">В работе</div>
                                                <div class="orders-list">
                                                    {orders.map((elem, id) => (elem.status === 'processing') && (<OrderItem elem={elem} id={id} key={elem._id}/>))}
                                                </div>
                                            </Fragment>
                                        )}

                                        {(this.state.type3 === true) && (
                                            <Fragment>
                                                <div className="admin-subtitle">Закрытые</div>
                                                <div class="orders-list">
                                                    {orders.map((elem, id) => (elem.status === 'finished') && (<OrderItem elem={elem} id={id} key={elem._id}/>))}
                                                </div>
                                            </Fragment>
                                        )}

                                    </div>
                                )}
                            </div>
                        )
                        : (
                            <div className="cart-msg-wrap">
                                <div className="cart-msg">
                                    <div className="cart-is-empty admin">
                                        Список пуст
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({isUserLoading: state.auth.isLoading, orders: state.order.orders, isLoading: state.order.isLoading, user: state.auth.user})

export default withRouter(connect(mapStateToProps, {loadOrders})(Orders));