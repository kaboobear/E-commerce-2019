import React, {PureComponent as Component} from 'react';
import {connect} from 'react-redux';
import {getItem, getItems} from '../../actions/itemActions'
import {addToCart} from '../../actions/cartActions'
// import {NavLink} from 'react-router-dom';
import notify from '../global/notify';
import {getComments} from '../../actions/commentActions'
import Slider from './newItemsSlider';
import Comments from './comment/comments'


class OneItem extends Component {
    state = {
        count: 1,
        isLoaded: false,
        item: {},
    }

    plus = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    minus = () => {
        this.setState({
            count: this.state.count > 1
                ? this.state.count - 1
                : 1
        })
    }

    componentDidMount() {
        this
            .props
            .getItems(1, -1, 0, 0, 1000000, 0, 4, '');
    }

    componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
            this.setState({isLoaded: false});
        }

        if (this.props.isLoading === false && this.state.isLoaded === false) {
            this.setState({isLoaded: true});
            this
                .props
                .items
                .map(elem => {
                    if (elem._id === this.props.id) 
                        this.setState({
                            item: elem
                        }, () => {
                            this.props.getComments(this.state.item._id);
                        })
                })
        }
    }

    onSubmit = (e) =>{
        e.preventDefault();

        this.props.addToCart(this.state.item,this.state.count);
        notify.add();
    }

    empty = (e) =>{}

    countToOne = () =>{
        this.setState({count:1})
    }

    render() {
        return (
            <div className="one-item-wrap">
                {(!this.props.isLoading) && (
                    <div>
                        <div className="container small">
                            <form onSubmit={this.onSubmit} className="one-item-block">
                                <div className="one-item-content">
                                    <div className="one-item-img">
                                        <img
                                            src={`/img/${ (this.state.item.imgName !== "default.png")
                                            ? ("uploads/" + this.state.item.imgName)
                                            : "default.png"}`}/>
                                    </div>

                                    <div className="one-item-info">
                                        <div className="one-item-top">
                                            <div className="one-item-title">
                                                {this.state.item.title}
                                            </div>

                                            {this.state.item.isFreeShipping && (
                                                <div className="isFreeShipping">
                                                    <img src="/img/truck.png" alt=""/>
                                                </div>
                                            )}
                                        </div>

                                        <div className="product-item-price one-item-price">
                                            {this.state.item.price}
                                            <span className="dollar">грн</span>
                                        </div>

                                        <div className="one-item-text">
                                            {this.state.item.description}
                                        </div>

                                        <div className="counter-box">
                                            <div className="counter-val">
                                                <button type="button" className="minus" onClick={this.minus}>-</button>
                                                <div className="input-wrap">
                                                    <input type="number" onChange={this.empty} value={this.state.count}/>
                                                </div>
                                                <button type="button" onClick={this.plus} className="plus">+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="summary-block">

                                    <button type="submit" className="btn one-item-btn">Добавить в корзину
                                        <div className="one-item-cart"><img src="/img/cart.png" alt=""/></div>
                                    </button>
                                </div>
                            </form>

                            <div className="one-item-header">Новые стикеры</div>

                            <Slider items={this.props.items} countToOne={this.countToOne}/>
                            <Comments post_id={this.state.item._id}/>
                        </div>
                    </div>
                )}

                {/* <div className="abs-block one-item-abs">
                    <NavLink strict to="/" className="back-btn ico"></NavLink>
                </div> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.items.isLoading,
    filters: state.items.filters,
    items: state.items.items,
    item: state.items.item,
    user: state.auth.user,
    isUserLoading: state.auth.isLoading
})

export default connect(mapStateToProps, {getItem, getItems,addToCart,getComments})(OneItem);