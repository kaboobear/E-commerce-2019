import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteItem} from '../actions/itemActions'
import {NavLink} from 'react-router-dom';

class AdminItem extends Component {
    onDeleteClick = (id) => {
        this
            .props
            .deleteItem(id)
    }

    render() {
        let {elem} = this.props;

        return (
            <div className="item">
                <div className="item-img">
                    <img src={`../../img/${elem.imgName !== "default.png" ? `uploads/${elem.imgName}` : "default.png"}`} alt=""/>
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
                    <img className="admin-category" src={`../../img/c${elem.category}.png`} alt=""/>
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
        )
    }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {deleteItem})(AdminItem);