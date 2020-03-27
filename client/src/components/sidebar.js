import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getItems} from '../actions/itemActions'
import $ from 'jquery';
import Nouislider from 'nouislider-react'
import "nouislider/distribute/nouislider.css";

class Side extends Component {
    state = {
        category: '0',
        rangeStart: 0,
        rangeEnd: 10000,
        shipping: '0'
    }

    onChange = (e) => {
        const {value, name, type, checked} = e.target;

        this.setState({
            [name]: (type === 'checkbox')
                ? checked
                : value
        })
    }

    componentDidMount() {
        //Accordeon start
        $('.acc-item').on("click", ".acc-button", function () {
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
    }

    onSlide = (render, handle, value, un, percent) => {
        console.log(value);
        this.setState({
            rangeStart: parseInt(value[0]),
            rangeEnd: parseInt(value[1])
        });
    };

    render() {
        const {isLoading, items} = this.props;

        return (
            <div className="side-section">
                <div className="acc">
                    <div className="acc-item">
                        <div className="acc-button active">
                            Categories
                        </div>

                        <div className="acc-content active">
                            <div className="categories">
                                <div className="category-item-wrap">
                                    <label className="category-item">
                                        <input
                                            type="radio"
                                            name="category"
                                            value="1"
                                            onChange={this.onChange}
                                            checked={this.state.category === '1'}/>
                                        <div className="category-item-inner">
                                            <img src="img/c1.png" alt=""/>
                                        </div>
                                    </label>
                                </div>
                                <div className="category-item-wrap">
                                    <label className="category-item">
                                        <input
                                            type="radio"
                                            name="category"
                                            value="2"
                                            onChange={this.onChange}
                                            checked={this.state.category === '2'}/>
                                        <div className="category-item-inner">
                                            <img src="img/c2.png" alt=""/>
                                        </div>
                                    </label>
                                </div>
                                <div className="category-item-wrap">
                                    <label className="category-item">
                                        <input
                                            type="radio"
                                            name="category"
                                            value="3"
                                            onChange={this.onChange}
                                            checked={this.state.category === '3'}/>
                                        <div className="category-item-inner">
                                            <img src="img/c3.png" alt=""/>
                                        </div>
                                    </label>
                                </div>
                                <div className="category-item-wrap">
                                    <label className="category-item">
                                        <input
                                            type="radio"
                                            name="category"
                                            value="4"
                                            onChange={this.onChange}
                                            checked={this.state.category === '4'}/>
                                        <div className="category-item-inner">
                                            <img src="img/c4.png" alt=""/>
                                        </div>
                                    </label>
                                </div>
                                <div className="category-item-wrap">
                                    <label className="category-item">
                                        <input
                                            type="radio"
                                            name="category"
                                            value="5"
                                            onChange={this.onChange}
                                            checked={this.state.category === '5'}/>
                                        <div className="category-item-inner">
                                            <img src="img/c5.png" alt=""/>
                                        </div>
                                    </label>
                                </div>
                                <div className="category-item-wrap">
                                    <label className="category-item">
                                        <input
                                            type="radio"
                                            name="category"
                                            value="6"
                                            onChange={this.onChange}
                                            checked={this.state.category === '6'}/>
                                        <div className="category-item-inner">
                                            <img src="img/c6.png" alt=""/>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="acc-item">
                        <div className="acc-button active">
                            Price
                        </div>

                        <div className="acc-content active">
                            <Nouislider
                                connect
                                start={[0, 10000]}
                                behaviour="tap"
                                range={{
                                min: [0],
                                max: [10000]
                            }}
                                onSlide={this.onSlide}/>

                            <div className="values">
                                <input type="text" className="from" value={this.state.rangeStart} disabled/>
                                <div className="dash">-</div>
                                <input type="text" className="to" value={this.state.rangeEnd} disabled/>
                            </div>

                        </div>
                    </div>

                    <div className="acc-item">
                        <div className="acc-button active">
                            Shipping
                        </div>

                        <div className="acc-content active">
                            <label className="check-label">
                                <input type="radio" name="shipping" value="1" checked={this.state.shipping==='1'} onChange={this.onChange}/>
                                <span className="check-box"></span>
                                <span className="check-text">Free Shipping</span>
                            </label>

                            <label className="check-label">
                                <input type="radio" name="shipping" checked={this.state.shipping==='2'} onChange={this.onChange} value="2"/>
                                <span className="check-box"></span>
                                <span className="check-text">Paid Shipping</span>
                            </label>
                        </div>


                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({items: state.items.items, isAuth: state.auth.isAuthenticated, isLoading: state.items.isLoading})

export default connect(mapStateToProps, {getItems})(Side);