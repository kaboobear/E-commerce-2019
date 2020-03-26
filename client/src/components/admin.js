import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getItems, deleteItem} from '../actions/itemActions'
import {NavLink} from 'react-router-dom';

class Main extends Component {

    componentDidMount() {
        this
            .props
            .getItems();
    }

    onDeleteClick = (id) => {
        this
            .props
            .deleteItem(id)
    }

    render() {
        const { isLoading, items} = this.props;

        return (
            <div className="main-section">
                <NavLink strict to="/add" className="add-btn btn">
                    Add Item
                </NavLink>

                {(isLoading === false && items.length !== 0) && (
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
                )}

                {(isLoading === false && items.length !== 0) && (items.map(elem => (
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
                )))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({items: state.items.items, isAuth: state.auth.isAuthenticated, isLoading: state.items.isLoading})

export default connect(mapStateToProps, {getItems, deleteItem})(Main);