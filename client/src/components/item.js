import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {addToCart} from '../actions/cartActions'
import {connect} from 'react-redux';
import notify from './notify';

class Item extends Component {


    addToCart = () =>{
        this.props.addToCart(this.props.elem,1);
        notify.add();
    }


    render() {
        return (

            <div className="product-item" key={this.props.elem._id}>
                <NavLink
                    to={`/item/${this.props.elem._id}`}
                    className={`product-item-img${ (this.props.elem.imgName === "default.png")
                    ? " no-img"
                    : ""}`}>
                    {this.props.elem.isFreeShipping && (
                        <div className="isFreeShipping">
                            <img src="img/truck.png" alt=""/>
                        </div>
                    )}

                    <img
                        className="img-elem"
                        src={`img/${ (this.props.elem.imgName !== "default.png")
                        ? "uploads/"
                        : ""}${this.props.elem.imgName}`}
                        alt=""/>
                </NavLink>

                <div className="product-item-info">
                    <div className="product-item-title">
                        {this.props.elem.title}
                    </div>

                    <div className="product-item-price">
                        {this.props.elem.price}
                        <span className="dollar">$</span>
                    </div>

                    <div className="cart-add-btn" onClick={this.addToCart}>
                        <img className="cart-add-img" src="/img/cart.png" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps,{addToCart})(Item);