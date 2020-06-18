import React from 'react';
import {withRouter} from 'react-router-dom'
import {login} from '../../actions/authActions'
import {clearErrors} from '../../actions/errorActions'
import {connect} from 'react-redux'
import ReactTooltip from "react-tooltip";

class AdminLogin extends React.PureComponent {
    state = {
        mail: '',
        pass: '',
        msg: {}
    }

    onChange = (e) => {
        const {value, name} = e.target;
        this.setState({[name]: value})
    }

    onSubmit = (e) => {
        e.preventDefault();

        const loginData = {
            mail: this.state.mail,
            pass: this.state.pass
        }

        this
            .props
            .login(loginData);
    }

    componentDidMount() {
        if (this.props.isAuth === true) {
            this
                .props
                .history
                .push('/admin');
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.isAuth === true) {
            this
                .props
                .clearErrors();

            this
                .props
                .history
                .push('/admin');
        }

        if (this.props.error !== prevProps.error) {
            if (this.props.error.id === "LOGIN_FAIL") 
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

            <div className="login-section">
                <div className="flex-wrap center">

                    <form onSubmit={this.onSubmit} className="add-form admin-form" autoComplete="off">
                        <div className="admin-head log-head">
                            <img src="/img/cog.png" alt=""/>
                            Admin Panel</div>

                        <div
                            className="simple-input"
                            data-tip={this.state.msg.mail
                            ? this.state.msg.mail
                            : ''}>
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

                        <div
                            className="simple-input"
                            data-tip={this.state.msg.pass
                            ? this.state.msg.pass
                            : ''}>
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

                        <button type="submit" className="btn">Войти</button>

                    </form>
                </div>

                <ReactTooltip type="error" effect="solid" place="right"/>
            </div>
        );
    }
}

const mapStateToProps = state => ({isAuth: state.auth.isAuthenticated, error: state.error})

export default withRouter(connect(mapStateToProps, {login, clearErrors})(AdminLogin));