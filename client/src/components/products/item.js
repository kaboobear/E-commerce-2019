import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {addToCart} from '../../actions/cartActions'
import {connect} from 'react-redux';
import notify from '../global/notify';


class Item extends Component {

    addToCart = () => {
        this
            .props
            .addToCart(this.props.elem, 1);
        notify.add();
    }

    render() {
        return (
            <div className="product-item-wrap">
                <div className={`product-item ${this.props.inCart() && 'selected-item'}`}  key={this.props.elem._id}>
                    <NavLink
                        to={`/item/${this.props.elem._id}`}
                        className={`product-item-img${ (this.props.elem.imgName === "default.png")
                        ? " no-img"
                        : ""}`}>

                        <div className="more-btn">
                            <img src="/img/eye.png" alt=""/>
                        </div>

                        <img
                            className="img-elem"
                            src={`/img/${ (this.props.elem.imgName !== "default.png")
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
                            <span className="dollar">грн</span>
                        </div>

                        <div onClick={!this.props.inCart() && this.addToCart} className="cart-add-btn">
                            <img className="cart-add-img" src="/img/cart.png" alt=""/>
                        </div>

                        {(this.props.inCart())
                            && (
                                <div className="in-cart">
                                    В корзине
                                    <img src="/img/tick2.png" alt=""/>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {addToCart})(Item);