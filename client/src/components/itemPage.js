import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getItem, getItems} from '../actions/itemActions'
import {addToCart} from '../actions/cartActions'
import {NavLink} from 'react-router-dom';
import $ from 'jquery';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import notify from './notify';

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
                            //Accordeon start
                            $('.acc-item')
                                .on("click", ".acc-button", function () {
                                    if ($(this).hasClass('active')) {
                                        $(this)
                                            .next()
                                            .stop(true)
                                            .slideUp(500);
                                        $(this).removeClass('active');
                                    } else {
                                        $(this)
                                            .next()
                                            .stop(true)
                                            .slideDown(500);
                                        $(this).addClass('active');
                                    }
                                });
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

    render() {
        const {item, items} = this.props;
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            draggable: false,
            arrows:false,
            responsive: [
                { breakpoint: 768, settings: { slidesToShow: 2 } },
                { breakpoint: 550, settings: { slidesToShow: 1 } },
              ]
        };

        return (
            <div className="one-item-wrap">
                {(!this.props.isLoading) && (
                    <div>
                        <div className="container small">
                            <form onSubmit={this.onSubmit} className="one-item-block">
                                <div className="one-item-content">
                                    <div className="one-item-img">
                                        <img
                                            src={`../../img/${ (this.state.item.imgName !== "default.png")
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
                                                    <img src="../../img/truck.png" alt=""/>
                                                </div>
                                            )}
                                        </div>

                                        <div className="product-item-price one-item-price">
                                            {this.state.item.price}
                                            <span className="dollar">$</span>
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

                                    <button type="submit" className="btn one-item-btn">Add to Cart
                                        <div className="one-item-cart"><img src="../../img/cart.png" alt=""/></div>
                                    </button>
                                </div>
                            </form>

                            <div className="one-item-header">
                                Information
                            </div>

                            <div className="acc about-acc">
                                <div className="acc-item">
                                    <div className="acc-button">
                                        About our stickers
                                    </div>

                                    <div className="acc-content">
                                        <div className="info-block">
                                            <h3>Best choice</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, vitae animi.
                                                Quod, excepturi repellendus numquam doloremque accusamus temporibus cumque
                                                maiores quo error, ad recusandae vero accusantium nesciunt beatae, perferendis
                                                eligendi aut! Pariatur repudiandae unde ratione officia suscipit aliquam numquam
                                                porro tempora!</p>

                                            <h3>Some facts</h3>
                                            <ul>
                                                <li>Lorem ipsum dolor sit amet.</li>
                                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                </li>
                                                <li>Lorem, ipsum dolor.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="acc-item">
                                    <div className="acc-button">
                                        Best technologies
                                    </div>

                                    <div className="acc-content">
                                        <div className="info-block">
                                            <h3>About materials</h3>
                                            <ul>
                                                <li>Lorem ipsum dolor sit amet.</li>
                                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                </li>
                                                <li>Lorem, ipsum dolor.</li>
                                                <li>Lorem, ipsum dolor. New item.</li>
                                            </ul>

                                            <h3>Factory process</h3>

                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde placeat libero
                                                nostrum sapiente impedit maxime magni ut expedita molestiae modi tenetur, nisi
                                                blanditiis consequuntur! Adipisci, unde praesentium facere vel odio suscipit hic
                                                modi, magni accusamus magnam earum, quaerat ipsa architecto debitis inventore
                                                quos possimus temporibus!</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="acc-item">
                                    <div className="acc-button">
                                        More information
                                    </div>

                                    <div className="acc-content">
                                        <div className="info-block">
                                            <h3>Best choice</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, vitae animi.
                                                Quod, excepturi repellendus numquam doloremque accusamus temporibus cumque
                                                maiores quo error, ad recusandae vero accusantium nesciunt beatae, perferendis
                                                eligendi aut! Pariatur repudiandae unde ratione officia suscipit aliquam numquam
                                                porro tempora!</p>

                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde placeat libero
                                                nostrum sapiente impedit maxime magni ut expedita molestiae modi tenetur, nisi
                                                blanditiis consequuntur! Adipisci, unde praesentium facere vel odio suscipit hic
                                                modi, magni accusamus magnam earum, quaerat ipsa architecto debitis inventore
                                                quos possimus temporibus!</p>

                                            <h3>Some facts</h3>
                                            <ul>
                                                <li>Lorem ipsum dolor sit amet.</li>
                                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                </li>
                                                <li>Lorem, ipsum dolor.</li>
                                            </ul>

                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="one-item-header">
                                New Stickers
                            </div>

                            <Slider {...settings}>
                                {this
                                    .props
                                    .items
                                    .map((elem, id) => {
                                        if (id < 6) {
                                            return (
                                                <div className="product-item-out" key={elem._id}>
                                                    <div className="product-item">
                                                        <NavLink
                                                            onClick={()=>{window.scrollTo(0,0); this.setState({count:1})}}
                                                            strict
                                                            to={`/item/${elem._id}`}
                                                            className={`product-item-img${ (elem.imgName === "default.png")
                                                            ? " no-img"
                                                            : ""}`}>
                                                            {elem.isFreeShipping && (
                                                                <div className="isFreeShipping">
                                                                    <img src="../../img/truck.png" alt=""/>
                                                                </div>
                                                            )}

                                                            <img
                                                                className="img-elem"
                                                                src={`../../img/${ (elem.imgName !== "default.png")
                                                                ? "uploads/"
                                                                : ""}${elem.imgName}`}
                                                                alt=""/>
                                                        </NavLink>

                                                        <div className="product-item-info">
                                                            <div className="product-item-title">
                                                                {elem.title}
                                                            </div>

                                                            <div className="product-item-price">
                                                                {elem.price}
                                                                <span className="dollar">$</span>
                                                            </div>

                                                            <div className="cart-add-btn">
                                                                <img className="cart-add-img" src="../../img/cart.png" alt=""/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })
}
                            </Slider>

                        </div>
                    </div>
                )}

                <div className="abs-block one-item-abs">
                    <NavLink strict to="/" className="back-btn ico"></NavLink>
                </div>
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

export default connect(mapStateToProps, {getItem, getItems,addToCart})(OneItem);