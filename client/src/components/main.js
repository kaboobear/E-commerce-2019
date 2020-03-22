import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getItems, deleteItem} from '../actions/itemActions'
import{NavLink} from 'react-router-dom';
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
        return (
            <div className="main-section">
                <Add/>

                {(this.props.item.isLoading === false)
                    ? this.props.item.items.map(elem => (
                        <div className="item" key={elem._id}>
                            <div className="item-name">
                            {elem.name}
                            </div>

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
                        </div>
                    ))
                    : (
                        <h3 className="loader">Loading...</h3>
                    )
}

            </div>
        )
    }
}

const mapStateToProps = (state) => ({item: state.items})

export default connect(mapStateToProps, {getItems, deleteItem})(Main);