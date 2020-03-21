import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getItems, deleteItem} from '../actions/itemActions'

class Main extends Component {

    componentDidMount() {
        this
            .props
            .getItems();
    }

    onDeleteClick = (id) => {
        this
            .props
            .deleteItem(id)
    }

    render() {
        return (
            <div className="main-section">
                {/* <h3>Hello World</h3> */}

                {(this.props.item.isLoading === false)
                    ? this
                        .props
                        .item
                        .items
                        .map(elem => (
                            <div
                                className="item"
                                key={elem._id}
                                onClick={() => {
                                this.onDeleteClick(elem._id)
                            }}>{elem.name}</div>
                        ))
                    : (
                        <h3>Loading...</h3>
                    )
}

            </div>
        )
    }
}

const mapStateToProps = (state) => ({item: state.items})

export default connect(mapStateToProps, {getItems, deleteItem})(Main);