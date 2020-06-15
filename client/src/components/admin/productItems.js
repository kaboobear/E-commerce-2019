import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getItems, deleteItem, setUpdated} from '../../actions/itemActions'
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import AdminItem from './adminItem'
import Select from 'react-select'

import {SlectStyle, Options} from '../../config/settings'

class ProductItems extends Component {
    state = {
        sort: 0,
        regexText: ''
    }

    onSelectChange = (val) => {
        this.setState({
            sort: val.value
        }, () => {
            this
                .props
                .getItems(1, this.props.pagination.limit, ...this.props.filters, this.state.sort, this.state.regexText);
        })
    }

    onDeleteClick = (id) => {
        this
            .props
            .deleteItem(id)
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
                .getItems(1, this.props.pagination.limit, ...this.props.filters, this.props.sort, this.state.regexText)
        })
    }

    componentDidMount() {
        this
            .props
            .getItems(1, 1000, 0, 0, 10000000, 0, 1, '', false);
    }

    render() {
        let {isLoading, items} = this.props;

        return (
            <div className="admin-products-wrapper">
                <div className="admin-wrap-title">
                    Продукты
                </div>

                <div className="select-wrap admin-wrap">
                    <div className="simple-input search-input">
                        <input
                            type="text"
                            name="regexText"
                            value={this.state.regexText}
                            onChange={this.onChange}
                            placeholder="Поиск..."/>
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
                    className={`admin-items ${isLoading
                    ? "loading"
                    : "notLoading"}`}>
                    <NavLink strict to="/admin/products/add" className="admin-item-wrap">
                        <div className="admin-item new-one">
                            <img src="/img/add.png" alt=""/>
                        </div>
                    </NavLink>

                    {items.map(elem => (<AdminItem elem={elem} key={elem._id}/>))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    items: state.items.items,
    isLoading: state.items.isLoading,
    user: state.auth.user,
    isUserLoading: state.auth.isLoading,
    pagination: state.items.pagination,
    filters: state.items.filters,
    sort: state.items.sort,
    regex: state.items.regex,
})

export default withRouter(connect(mapStateToProps, {getItems, deleteItem, setUpdated})(ProductItems));