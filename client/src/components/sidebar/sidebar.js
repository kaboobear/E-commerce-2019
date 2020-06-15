import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getItems} from '../../actions/itemActions'
import $ from 'jquery';

// import Radios from './radios';
import Slider from './slider';
import Category from './category';

class Side extends Component {
    state = {
        category: '0',
        rangeStart: 0,
        rangeEnd: 100,
        maxPrice: 100,
        shipping: '0',
        isPricing: false,
        isHidden: true
    }

    onChange = (e) => {
        const {value, name, type, checked} = e.target;

        this.setState({
            [name]: (type === 'checkbox')
                ? checked
                : value
        }, () => {
            this
                .props
                .getItems(1, this.props.pagination.limit, this.state.category, this.state.rangeStart, this.state.rangeEnd, this.state.shipping, this.props.sort, this.props.regex)
        })
    }

    onSlide = (render, handle, value, un, percent) => {
        this.setState({
            rangeStart: parseInt(value[0]),
            rangeEnd: parseInt(value[1])
        }, () => {
            if (!this.state.isPricing) {
                this.setState({
                    isPricing: true
                }, () => {
                    setTimeout(() => {
                        this
                            .props
                            .getItems(1, this.props.pagination.limit, this.state.category, this.state.rangeStart, this.state.rangeEnd, this.state.shipping, this.props.sort, this.props.regex)
                        this.setState({isPricing: false})
                    }, 400)
                })
            }
        });
    };

    componentDidMount() {
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

        //Dark BG
        $('.hide-btn').click(function () {
            if ($(this).hasClass('active')) {
                $('.dark-bg').fadeOut(300);
                $(this).removeClass('active');
                $('.side-section').removeClass('active');
            } else {
                $('.dark-bg').fadeIn(300);
                $(this).addClass('active');
                $('.side-section').addClass('active');
            }
        })
    }

    render() {
        return (
            <div>
                <div className="dark-bg"></div>
                <div className="hide-btn">
                    <img src="/img/my-arr-l.svg" alt=""/>
                </div>

                <div className="side-section">
                    <div className="acc">
                        <div className="acc-item">
                            <div className="acc-button active">Категории</div>
                            <div className="acc-content active"><Category onChange={this.onChange} category={this.state.category}/></div>
                        </div>

                        <div className="acc-item">
                            <div className="acc-button active">Цена</div>
                            <div className="acc-content active"><Slider onSlide={this.onSlide} rangeStart={this.state.rangeStart} rangeEnd={this.state.rangeEnd} maxPrice={this.state.maxPrice}/></div>
                        </div>

                        {/* <div className="acc-item">
                            <div className="acc-button active">Доставка</div>
                            <div className="acc-content active"><Radios shipping={this.state.shipping} onChange={this.onChange}/></div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({items: state.items.items, isAuth: state.auth.isAuthenticated, isLoading: state.items.isLoading})

export default connect(mapStateToProps, {getItems})(Side);