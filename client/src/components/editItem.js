import React, {Component} from 'react';
import {connect} from 'react-redux';
import path from 'path';
import {clearErrors} from '../actions/errorActions'
import {editItem, getItem} from '../actions/itemActions'
import {withRouter} from 'react-router-dom'
import {NavLink} from 'react-router-dom';

class Edit extends Component {
    state = {
        title: '',
        description: '',
        price: '',
        count: '',
        isFreeShipping: false,
        file: null,
        filename: 'default.png',
        previewImg: null,
        msg: {},
        isLoaded: false
    }

    onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData()
        formData.append('title', this.state.title);
        formData.append('description', this.state.description);
        formData.append('price', this.state.price);
        formData.append('count', this.state.count);
        formData.append('isFreeShipping', this.state.isFreeShipping);
        formData.append('file', this.state.file);

        this
            .props
            .editItem(formData, this.props.id, this.props.history)
    }

    onChange = (e) => {
        const {value, name, type, checked} = e.target;

        if (type === 'file' && e.target.files[0] !== undefined) {
            const extName = path.extname(e.target.files[0].name);
            const isRightExt = (extName === ".png" || extName === ".jpeg" || extName === ".JPG" || extName === ".JPEG" || extName === ".PNG" || extName=== ".jpg" || extName === ".gif" || extName === ".GIF" || extName === ".svg" || extName === ".SVG")
                ? true
                : false;

            isRightExt && this.setState({
                file: e.target.files[0],
                filename: e.target.files[0].name,
                previewImg: URL.createObjectURL(e.target.files[0])
            })
        } else {
            this.setState({
                [name]: (type === 'checkbox')
                    ? checked
                    : value
            })
        }
    }

    componentDidMount() {
        this
            .props
            .getItem(this.props.id);
    }

    componentDidUpdate(prevProps) {
        if (this.state.isLoaded === false) {
            this.setState({
                title: this.props.item.title,
                description: this.props.item.description,
                price: this.props.item.price,
                count: this.props.item.count,
                isFreeShipping: this.props.item.isFreeShipping,
                filename: this.props.item.imgName,
                isLoaded: true
            })
        }

        const error = this.props.error;
        if (error !== prevProps.error) {
            if (error.id === "ITEM_ERROR") 
                this.setState({msg: error.msg});
            else 
                this.setState({msg: {}});
            }
        }

    componentWillUnmount() {
        this
            .props
            .clearErrors();
    }

    render() {
        const user = this.props.item

        return (
            <div className="add-wrap">

                <NavLink strict to="/" className="back-btn btn">
                    Back
                </NavLink>

                <div className="add-section">
                    <form id="add-form" name="add-form" onSubmit={this.onSubmit} autoComplete="off">
                        <div className="simple-input file-input">
                            <img
                                className="file-img"
                                src={(this.state.previewImg === null && this.state.filename === "default.png")
                                ? '../../img/default.png'
                                : (this.state.file === null)
                                    ? '../../img/uploads/' + this.state.filename
                                    : this.state.previewImg}
                                alt=""/>
                            <label className="file-label">
                                <input className="file-input" name="file" onChange={this.onChange} type="file"/>
                                <span className="file-btn">Select file</span>
                            </label>
                        </div>
                        <div className="simple-input">
                            <input
                                type="text"
                                value={this.state.title}
                                name="title"
                                onChange={this.onChange}
                                placeholder="Title"
                                className={this.state.msg.title && "error"}/> {this.state.msg.title && (
                                <div className="exclam">
                                    <img src="../../img/exclam-ico.png" alt=""/>
                                </div>
                            )}
                        </div>
                        <div className="simple-input">
                            <textarea
                                value={this.state.description}
                                name="description"
                                onChange={this.onChange}
                                placeholder="Description"
                                className={this.state.msg.description && "error"}></textarea>
                            {this.state.msg.description && (
                                <span className="exclam area"><img src="../../img/exclam-ico.png" alt=""/></span>
                            )}
                        </div>
                        <div className="simple-input">
                            <input
                                type="number"
                                value={this.state.price}
                                name="price"
                                onChange={this.onChange}
                                placeholder="Price"
                                className={this.state.msg.price && "error"}/> {this.state.msg.price && (
                                <div className="exclam">
                                    <img src="../../img/exclam-ico.png" alt=""/>
                                </div>
                            )}
                        </div>
                        <div className="simple-input">
                            <input
                                type="number"
                                value={this.state.count}
                                name="count"
                                onChange={this.onChange}
                                placeholder="Count"
                                className={this.state.msg.count && "error"}/> {this.state.msg.count && (
                                <div className="exclam">
                                    <img src="../../img/exclam-ico.png" alt=""/>
                                </div>
                            )}
                        </div>
                        <div className="simple-input">
                            <label className="toggle-label">
                                <input
                                    type="checkbox"
                                    name="isFreeShipping"
                                    onChange={this.onChange}
                                    checked={this.state.isFreeShipping}/>
                                <span className="toggle-box">
                                    <div className="toggle-box-line"></div>

                                    <div className="toggle-box-circle"></div>
                                </span>
                                <span className="toggle-text">Is Free Shipping</span>
                            </label>
                        </div>

                        <button className="btn" type="submit">Save</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({item: state.items.item, error: state.error})

export default withRouter(connect(mapStateToProps, {editItem, getItem, clearErrors})(Edit));