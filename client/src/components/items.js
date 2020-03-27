import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getItems} from '../actions/itemActions'
import Side from './sidebar';
import Pagination from './pagination';
import Item from './item';
import Equalizer from 'react-equalizer'

class Items extends Component {

    componentDidMount() {
        this
            .props
            .getItems(1,12);
    }

    render() {
        const {isLoading, items, pagination} = this.props;

        return (
            <div className="items-section">

                <div className="flex-wrap">
                    <Side/>

                    <div
                        className={`products-side${isLoading
                        ? " loading"
                        : " notLoading"}`}>
                        {(!isLoading) && (
                            <div >
                                <Equalizer className="product-items">
                                    {items.map(elem => (<Item key={elem._id} elem={elem}/>))}
                                </Equalizer>


                                {(pagination.pagesCount > 1) && (
                                    <div>
                                        <Pagination getItems={this.props.getItems} pagination={pagination}/>
                                    </div>
                                )}
                            </div>
                        )}

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({pagination: state.items.pagination, items: state.items.items, isAuth: state.auth.isAuthenticated, isLoading: state.items.isLoading})

export default connect(mapStateToProps, {getItems})(Items);