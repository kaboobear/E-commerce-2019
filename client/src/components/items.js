import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getItems} from '../actions/itemActions'
import Side from './sidebar';
import Pagination from './pagination';
import Item from './item';
import Equalizer from 'react-equalizer'
import Select from 'react-select'

import {SlectStyle, Options} from '../config/settings'

class Items extends Component {
    state = {
        sort: 0,
        regexText: '',
    }

    onSelectChange = (val) => {
        this.setState({
            sort: val.value
        }, () => {
            this
                .props
                .getItems(1, this.props.pagination.limit, ...this.props.filters, this.state.sort,this.state.regexText);
        })
    }

    onChange = (e) => {
        const {value, name, type, checked} = e.target;

        this.setState({
            [name]: (type === 'checkbox')
                ? checked
                : value
        },()=>{
            this.props.getItems(1,this.props.pagination.limit,...this.props.filters,this.props.sort,this.state.regexText)
        })
    }

    componentDidMount() {
        this
            .props
            .getItems(1, 12);
    }

    render() {
        const {isLoading, items, pagination, filters, sort, regex} = this.props;

        return (
            <div className="items-section">

                <div className="flex-wrap">
                    <Side getItems={this.props.getItems} pagination={pagination} sort={sort} regex={regex}/>

                    <div className="products-side-wrap">
                            <div className="select-wrap">
                                <div className="simple-input search-input">
                                    <input type="text" name="regexText" value={this.state.regexText} onChange={this.onChange} placeholder="Search..."/>
                                </div>

                                <Select
                                    options={Options}
                                    onChange={this.onSelectChange}
                                    defaultValue={Options[0]}
                                    label="Sorting"
                                    isSearchable={false}
                                    styles={SlectStyle}/>
                            </div>

                        <div
                            className={`products-side${isLoading
                            ? " loading"
                            : " notLoading"}`}>

                            {(!isLoading) && (

                                <div class="products-side-inner">
                                    {items.length > 0
                                        ? (
                                            <div>
                                                <Equalizer className="product-items">
                                                    {items.map(elem => (<Item key={elem._id} elem={elem}/>))}
                                                </Equalizer>

                                                {(pagination.pagesCount > 1) && (
                                                    <div>
                                                        <Pagination
                                                            getItems={this.props.getItems}
                                                            pagination={pagination}
                                                            filters={filters}
                                                            regex={regex}
                                                            sort={sort}/>
                                                    </div>
                                                )}
                                            </div>
                                        )
                                        : (
                                            <div className="isEmpty">
                                                Not Found
                                            </div>
                                        )}
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    pagination: state.items.pagination,
    filters: state.items.filters,
    sort: state.items.sort,
    regex: state.items.regex,
    items: state.items.items,
    isAuth: state.auth.isAuthenticated,
    isLoading: state.items.isLoading
})

export default connect(mapStateToProps, {getItems})(Items);