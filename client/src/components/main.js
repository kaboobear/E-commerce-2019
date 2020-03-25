import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getItems, deleteItem} from '../actions/itemActions'
import {NavLink} from 'react-router-dom';
import Add from './addItem'

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
        const {isAuth, isLoading, items} = this.props;

        return (
            <div className="main-section">
                {isAuth && <Add/>}

                {(isLoading === false) && items.map(elem => (
                    <div className="item" key={elem._id}>
                        <div className="item-name">
                            {elem.name}
                        </div>

                        {isAuth && (
                            <div className="btns">
                                <NavLink to={`/edit/${elem._id}`} className="edit-btn btn">
                                    Edit
                                </NavLink>

                                <div
                                    className="delete-btn btn"
                                    onClick={() => {
                                    this.onDeleteClick(elem._id)
                                }}>
                                    Delete
                                </div>
                            </div>
                        )}
                    </div>
                ))
}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({items: state.items.items, isAuth: state.auth.isAuthenticated, isLoading: state.items.isLoading})

export default connect(mapStateToProps, {getItems, deleteItem})(Main);