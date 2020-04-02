import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteCart,addToCart} from '../actions/cartActions'
import {NavLink} from 'react-router-dom';

class CartItem extends Component {
    state = {
        count:0
    }

    componentDidMount(){
        this.setState({count:this.props.elem.count})
    }

    componentDidUpdate(prevProps){
        if(prevProps.elem.count !== this.props.elem.count) {
            this.setState({count:this.props.elem.count})
        }
    }

    onDeleteClick = () => {
        this
            .props
            .deleteCart(this.props.elem.item._id);
    }

    plus = (elem) => {
        this.props.addToCart(elem.item,1);
        this.setState({count:this.state.count+1})
    }

    minus = (elem) => {
        if(elem.count === 1){
            this
            .props
            .deleteCart(elem.item._id); 
        }
        else{
            this.props.addToCart(elem.item,-1);
            this.setState({count:this.state.count-1})
        }
    }

    render() {
        let {elem} = this.props;

        return (
            <div className="item cart-item">
                <div className="item-img">
                    <img src={`img/uploads/${elem.item.imgName}`} alt=""/>
                </div>

                <NavLink to={`item/${elem.item._id}`} className="item-title">
                    {elem.item.title}
                </NavLink>

                <div className="item-category">
                    <img className="admin-category" src={`img/c${elem.item.category}.png`} alt=""/>
                </div>

                <div className="item-ship">
                    <div className="ship-text">
                        {(elem.item.isFreeShipping)
                            ? "Free"
                            : "Paid"}
                    </div>
                </div>

                <div className="item-price">
                    {elem.item.price}$
                </div>

                <div className="item-count">
                    <div className="counter-box">
                        <div className="counter-val counter2">
                            <button type="button" className="minus" onClick={()=>{this.minus(elem)}}>-</button>
                            <div className="input-wrap">
                                <input type="number" onChange={this.empty} value={this.state.count}/>
                            </div>
                            <button type="button" onClick={()=>{this.plus(elem)}} className="plus">+</button>
                        </div>
                    </div>
                </div>

                <div className="item-total">
                    <div className="total-text">
                        {elem.count * elem.item.price}<span className="dollar">$</span>
                    </div>
                </div>

                <div className="item-times">
                    <div className="" onClick= {() => {this.onDeleteClick()}}>
                        <div className="times-img"></div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {deleteCart,addToCart})(CartItem);