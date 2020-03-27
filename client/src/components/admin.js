import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getItems, deleteItem} from '../actions/itemActions'
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import Pagination from './pagination'

class Main extends Component {
    onDeleteClick = (id) => {
        this
            .props
            .deleteItem(id)
    }

    componentDidMount() {
        this
            .props
            .getItems(1, 100);
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
        let {isLoading, items, pagination} = this.props;

        return (
            <div className="main-section">
                <NavLink strict to="/add" className="add-btn btn">
                    Add Item
                </NavLink>

                <div
                    className={`items-side${isLoading
                    ? " loading"
                    : " notLoading"}`}>

                    {(items.length !== 0) && (
                        <div>
                            <div className="item-titles">
                                <div className="item-img">Image</div>
                                <div className="item-title">Title</div>
                                <div className="item-description">Info</div>
                                <div className="item-price">Price</div>
                                <div className="item-count">Count</div>
                                <div className="item-category">Category</div>
                                <div className="item-ship">Shipping</div>
                                <div className="btns"></div>
                            </div>

                            {items.map(elem => (
                                <div className="item" key={elem._id}>
                                    <div className="item-img">
                                        <img src={`img/uploads/${elem.imgName}`} alt=""/>
                                    </div>

                                    <div className="item-info">
                                        <div className="item-title">
                                            {elem.title}
                                        </div>

                                        <div className="item-description">
                                            {elem.description}
                                        </div>
                                    </div>

                                    <div className="item-price">
                                        {elem.price}$
                                    </div>

                                    <div className="item-count">
                                        {elem.count}
                                    </div>

                                    <div className="item-category">
                                        <img className="admin-category" src={`img/c${elem.category}.png`} alt=""/>
                                    </div>

                                    <div className="item-ship">
                                        {(elem.isFreeShipping)
                                            ? "Free"
                                            : "Paid"}
                                    </div>

                                    <div className="btns">
                                        <NavLink to={`/edit/${elem._id}`} className="edit-btn btn">
                                            Edit
                                        </NavLink>
                                        <div className="delete-btn btn" onClick= {() => {this.onDeleteClick(elem._id)}}>
                                            Delete
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="before-pagination">
                                &nbsp;
                            </div>

                            {(pagination.pagesCount > 1) && (
                                <div>
                                    <Pagination getItems={this.props.getItems} pagination={pagination}/>
                                </div>
                            )}

                        </div>

                    )}

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({items: state.items.items, isLoading: state.items.isLoading, user: state.auth.user, isUserLoading: state.auth.isLoading, pagination: state.items.pagination})

export default withRouter(connect(mapStateToProps, {getItems, deleteItem})(Main));