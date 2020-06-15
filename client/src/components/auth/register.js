import React from 'react';
import {withRouter, NavLink} from 'react-router-dom';
import {register} from '../../actions/authActions';
import {clearErrors} from '../../actions/errorActions';
import {connect} from 'react-redux';
import ReactTooltip from "react-tooltip";

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

    componentDidMount(){
        if (this.props.isAuth === true) {
            return this
                .props
                .history
                .push('/')
        }
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

        if (this.props.error !== prevProps.error) {
            if (this.props.error.id === "REGISTER_FAIL") 
                this.setState({msg: this.props.error.msg})
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


                <div className="flex-wrap center">
                    <form onSubmit={this.onSubmit} className="add-form" autoComplete="off">
                    <h2 className="log-title">Sticky</h2>

                        <ul className="log-buttons">
                            <NavLink exact to="/login">Логин</NavLink>
                            <NavLink exact to="/register">Регистрация</NavLink>
                        </ul>

                        {/* <div className="simple-input">
                            <input
                                type="text"
                                name="login"
                                placeholder="Логин"
                                value={this.state.login}
                                onChange={this.onChange}
                                className={this.state.msg.login && "error"}/> {this.state.msg.login && (
                                <div className="exclam">
                                    <img src="img/exclam-ico.png" alt=""/>
                                </div>
                            )}
                        </div> */}

                        <div className="simple-input" data-tip={this.state.msg.mail ? this.state.msg.mail : ''}>
                            <input
                                type="text"
                                name="mail"
                                placeholder="Почта"
                                value={this.state.mail}
                                onChange={this.onChange}
                                className={this.state.msg.mail && "error"}/> {this.state.msg.mail && (
                                <div className="exclam">
                                    <img src="/img/exclam-ico.png" alt=""/>
                                </div>
                            )}
                        </div>

                        <div className="simple-input" data-tip={this.state.msg.pass ? this.state.msg.pass : ''}>
                            <input
                                type="password"
                                name="pass"
                                placeholder="Пароль"
                                value={this.state.pass}
                                onChange={this.onChange}
                                className={this.state.msg.pass && "error"}/> {this.state.msg.pass && (
                                <div className="exclam">
                                    <img src="/img/exclam-ico.png" alt=""/>
                                </div>
                            )}
                        </div>

                        <div className="simple-input" data-tip={this.state.msg.pass2 ? this.state.msg.pass2 : ''}>
                            <input
                                type="password"
                                name="pass2"
                                placeholder="Повторите пароль"
                                value={this.state.pass2}
                                onChange={this.onChange}
                                className={this.state.msg.pass2 && "error"}/> {this.state.msg.pass2 && (
                                <div className="exclam">
                                    <img src="/img/exclam-ico.png" alt=""/>
                                </div>
                            )}
                        </div>

                        <button type="submit" className="btn">Регистрация</button>
                    </form>
                </div>


                <ReactTooltip type="error" effect="solid" place="right"  multiline="false"/>
            </div>
        );
    }
}

const mapStateToProps = state => ({isAuth: state.auth.isAuthenticated, error: state.error})

export default withRouter(connect(mapStateToProps, {register, clearErrors})(Register));
