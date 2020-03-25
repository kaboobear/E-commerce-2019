import React from 'react';
import {withRouter} from 'react-router-dom'
import {register} from '../actions/authActions'
import {clearErrors} from '../actions/errorActions'
import {connect} from 'react-redux'

class Register extends React.Component {
    state = {
        login: '',
        mail: '',
        pass: '',
        pass2: '',
        msg: {}
    }

    onChange = (e) => {
        const {value, name} = e.target;
        this.setState({[name]: value})
    }

    onSubmit = (e) => {
        e.preventDefault();

        const regData = {
            login: this.state.login,
            mail: this.state.mail,
            pass: this.state.pass,
            pass2: this.state.pass2
        }

        this
            .props
            .register(regData);
    }

    componentDidUpdate(prevProps) {
        if (this.props.isAuth === true) {
            this
                .props
                .clearErrors();
            return this
                .props
                .history
                .push('/')
        }

        const error = this.props.error;
        if (error !== prevProps.error) {
            if (error.id === "REGISTER_FAIL") 
                this.setState({msg: error.msg})
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
        return (
            <div className="register-section">

                <h2 className="log-title">Register</h2>

                <div className="flex-wrap center">
                    <form onSubmit={this.onSubmit} className="add-form" autoComplete="off">
                        <div className="simple-input">
                            <input
                                type="text"
                                name="login"
                                placeholder="Login"
                                value={this.state.login}
                                onChange={this.onChange}
                                className={this.state.msg.login && "error"}/> {this.state.msg.login && (
                                <div className="exclam">
                                    <img src="img/exclam-ico.png" alt=""/>
                                </div>
                            )}
                        </div>

                        <div className="simple-input">
                            <input
                                type="text"
                                name="mail"
                                placeholder="E-mail"
                                value={this.state.mail}
                                onChange={this.onChange}
                                className={this.state.msg.mail && "error"}/> {this.state.msg.mail && (
                                <div className="exclam">
                                    <img src="img/exclam-ico.png" alt=""/>
                                </div>
                            )}
                        </div>

                        <div className="simple-input">
                            <input
                                type="password"
                                name="pass"
                                placeholder="Password"
                                value={this.state.pass}
                                onChange={this.onChange}
                                className={this.state.msg.pass && "error"}/> {this.state.msg.pass && (
                                <div className="exclam">
                                    <img src="img/exclam-ico.png" alt=""/>
                                </div>
                            )}
                        </div>

                        <div className="simple-input">
                            <input
                                type="password"
                                name="pass2"
                                placeholder="Password Again"
                                value={this.state.pass2}
                                onChange={this.onChange}
                                className={this.state.msg.pass2 && "error"}/> {this.state.msg.pass2 && (
                                <div className="exclam">
                                    <img src="img/exclam-ico.png" alt=""/>
                                </div>
                            )}
                        </div>

                        <button type="submit" className="btn">Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({isAuth: state.auth.isAuthenticated, error: state.error})

export default withRouter(connect(mapStateToProps, {register, clearErrors})(Register));
