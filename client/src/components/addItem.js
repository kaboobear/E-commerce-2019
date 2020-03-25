import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addItem} from '../actions/itemActions'


class Add extends Component {
    state = {
        name:'',
    }

    onSubmit = (e) => {
        e.preventDefault();

        const item = {
            name:this.state.name
        }

        this.setState({name:''})

        this.props.addItem(item)
    }

    onChange = (e) =>{
        const {value,name} = e.target;
        this.setState({[name]:value})
    }

    render() {
        return (
            <div className="add-section">
                <form onSubmit={this.onSubmit} autoComplete="off">
                    <div className="simple-input">
                        <input type="text" value={this.state.name} name="name" onChange={this.onChange} placeholder="Name"/>
                    </div>

                    <button className="btn" type="submit">Add</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({item: state.items})

export default connect(mapStateToProps, {addItem})(Add);