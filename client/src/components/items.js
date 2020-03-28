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
        sort: 0
    }

    onChange = (val) => {
        this.setState({
            sort: val.value
        }, () => {
            this
                .props
                .getItems(1, this.props.pagination.limit, ...this.props.filters, this.state.sort);
        })
    }

    componentDidMount() {
        this
            .props
            .getItems(1, 12);
    }

    render() {
        const {isLoading, items, pagination, filters, sort} = this.props;

        return (
            <div className="items-section">

                <div className="flex-wrap">
                    <Side getItems={this.props.getItems} pagination={pagination} sort={sort}/>

                    <div className="products-side-wrap">
                            <div className="select-wrap">
                                <Select
                                    options={Options}
                                    onChange={this.onChange}
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
    items: state.items.items,
    isAuth: state.auth.isAuthenticated,
    isLoading: state.items.isLoading
})

export default connect(mapStateToProps, {getItems})(Items);