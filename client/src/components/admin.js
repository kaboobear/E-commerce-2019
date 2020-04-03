import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getItems, deleteItem,setUpdated} from '../actions/itemActions'
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import Pagination from './pagination'
import AdminItem from './adminItem'

class Admin extends Component {
    onDeleteClick = (id) => {
        this
            .props
            .deleteItem(id)
    }

    componentDidMount() {
        console.log("admin");

        this
            .props
            .getItems(1, 1000, 0, 0, 10000000, 0, 1, '', false);
    }

    componentDidUpdate(prevProps) {
        if (!this.props.isUserLoading) {
            (!this.props.user.isAdmin) && this
                .props
                .history
                .push("/");
        }
    }

    render() {
        let {isLoading, items, pagination, user} = this.props;

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

                <NavLink strict to="/add" className="add-btn btn">
                    Add Item
                </NavLink>

                <div
                    className={`items-side admin-items${isLoading
                    ? " loading"
                    : " notLoading"}`}>

                    {(items.length !== 0)
                        ? (
                            <div>
                                <div className="item-titles admin-titles">
                                    <div className="item-img">Image</div>
                                    <div className="item-title">Title</div>
                                    <div className="item-description">Info</div>
                                    <div className="item-price">Price</div>
                                    <div className="item-count">Count</div>
                                    <div className="item-category">Category</div>
                                    <div className="item-ship">Shipping</div>
                                    <div className="btns"></div>
                                </div>

                                {items.map(elem => (<AdminItem elem={elem} key={elem._id}/>))}

                                <div className="before-pagination">&nbsp;</div>

                                {(pagination.pagesCount > 1) && (
                                    <div>
                                        <Pagination getItems={this.props.getItems} pagination={pagination}/>
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
            </div>
            )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({items: state.items.items, isLoading: state.items.isLoading, user: state.auth.user, isUserLoading: state.auth.isLoading, pagination: state.items.pagination})

export default withRouter(connect(mapStateToProps, {getItems, deleteItem,setUpdated})(Admin));