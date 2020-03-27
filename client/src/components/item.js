import React, {Component} from 'react';

class Item extends Component {
    render() {
        return (
            <div className="product-item-wrap">
                <div className="product-item" key={this.props.elem._id}>
                    <div className={`product-item-img${(this.props.elem.imgName==="default.png") ? " no-img" : ""}`}>
                        {this.props.elem.isFreeShipping && (
                            <div className="isFreeShipping">
                                <img src="img/truck.png" alt=""/>
                            </div>
                        )}

                        <img className="img-elem" src={`img/${(this.props.elem.imgName!=="default.png") ? "uploads/" : ""}${this.props.elem.imgName}`} alt=""/>
                    </div>

                    <div className="product-item-info">
                        <div className="product-item-title">
                            {this.props.elem.title}
                        </div>

                        <div className="product-item-price">
                            {this.props.elem.price}
                            <span className="dollar">$</span>
                        </div>

                        <div className="cart-add-btn">
                           <img className="cart-add-img" src="img/cart.png" alt=""/>  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item;