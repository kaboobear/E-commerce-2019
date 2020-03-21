import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addItem} from '../actions/itemActions'

class Add extends Component {
    state = {
        title:'',
    }

    onSubmit = (e) => {
        e.preventDefault();

        const item = {
            name:this.state.title
        }

        this.props.addItem(item)
    }

    onChange = (e) =>{
        const {value,name} = e.target;
        this.setState({[name]:value})
    }

    render() {
        return (
            <div className="add-section">
                <form onSubmit={this.onSubmit}>
                    <div className="simple-input">
                        <input type="text" value={this.state.title} name="title" onChange={this.onChange} placeholder="title"/>
                    </div>

                    <button className="btn" type="submit">Add</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({item: state.items})

export default connect(mapStateToProps, {addItem})(Add);