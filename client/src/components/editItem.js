import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editItem,getItem} from '../actions/itemActions'
import {withRouter} from 'react-router-dom'


class Edit extends Component {
    state = {
        name:''
    }

    componentDidMount(){
        this.props.getItem(this.props.id);
    }

    componentDidUpdate(){
        if(this.state.name === ''){
            this.setState({
                name:this.props.item.name
            })
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        const item = {
            name:this.state.name
        }

        this.props.editItem(item,this.props.id)
        this.props.history.push('/')
    }

    onChange = (e) =>{
        const {value,name} = e.target;
        this.setState({[name]:value})
    }

    render() {
        return (
            <div className="add-section">
                {(this.state.name === '') ? (<h3 className="loader">Loading...</h3>) :(
                <form onSubmit={this.onSubmit} autoComplete="off">
                    <div className="simple-input">
                        <input type="text" value={this.state.name} name="name" onChange={this.onChange}/>
                    </div>

                    <button className="btn" type="submit">Edit</button>
                </form>
        )
    }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    item: state.items.item
})

export default withRouter(connect(mapStateToProps, {editItem,getItem})(Edit));