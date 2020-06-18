import React from 'react';
import {connect} from "react-redux";
import {editMail,editPass} from '../../actions/authActions';
import {clearErrors} from '../../actions/errorActions';
import ReactTooltip from "react-tooltip";


class cabinetUser extends React.PureComponent {
    state = {
        mail: '',
        oldPass: '',
        newPass: '',
        newPass2: '',
        msg: {}
    }

    componentDidMount(){
        this.setState({mail: this.props.user.mail});
    }

    componentDidUpdate(prevProps) {
        if (this.props.isAuth !== prevProps.isAuth) {
            this.setState({mail: this.props.user.mail});
        }

        if (this.props.error !== prevProps.error) {
            if (this.props.error.id === "AUTH_EDIT_FAIL") {
                this.setState({msg: this.props.error.msg})
            }else 
                this.setState({msg: {}});
            }
        }

    componentWillUnmount() {
        this
            .props
            .clearErrors();
    }

    onChange = (e) => {
        const {value, name} = e.target;
        this.setState({[name]: value})
    }

    onSubmit1 = (e) => {
        e.preventDefault();

        const userData = {
            mail: this.state.mail,
            user: this.props.user
        }

        this
            .props
            .editMail(userData);
    }

    onSubmit2 = (e) => {
        e.preventDefault();

        const userData = {
            oldPass: this.state.oldPass,
            newPass: this.state.newPass,
            newPass2: this.state.newPass2,
            user: this.props.user
        }

        this
            .props
            .editPass(userData);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit1} className="delivery-form" autoComplete="off">
                    <div className="check-block-wrap">
                        <div className="check-block">
                            <div className="check-block-img off-bot">
                                <img src="/img/env.png" alt=""/>
                            </div>

                            <div className="check-block-info">
                                <div className="check-block-title">
                                    Сменить почту
                                </div>

                                <div className="input-title">Почта</div>
                                <div
                                    className="simple-input"
                                    data-tip={this.state.msg.mail
                                    ? this.state.msg.mail
                                    : ''}>
                                    <input
                                        type="text"
                                        name="mail"
                                        value={this.state.mail}
                                        placeholder="sticky@gmail.com"
                                        onChange={this.onChange}
                                        className={this.state.msg.mail && "error"}/> {this.state.msg.mail && (
                                        <div className="exclam">
                                            <img src="/img/exclam-ico.png" alt=""/>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn">Cохранить</button>
                    <ReactTooltip type="error" effect="solid" place="right"/>
                </form>

                <form
                    onSubmit={this.onSubmit2}
                    className="delivery-form off-top"
                    autoComplete="off">
                    <div className="check-block-wrap">
                        <div className="check-block">
                            <div className="check-block-img">
                                <img src="/img/lock.png" alt=""/>
                            </div>

                            <div className="check-block-info">
                                <div className="check-block-title">
                                    Сменить пароль
                                </div>

                                <div className="input-title">Старый пароль</div>
                                <div
                                    className="simple-input"
                                    data-tip={this.state.msg.oldPass
                                    ? this.state.msg.oldPass
                                    : ''}>
                                    <input
                                        type="password"
                                        onChange={this.onChange}
                                        name="oldPass"
                                        value={this.state.oldPass}
                                        placeholder="xxxxxx"
                                        className={this.state.msg.oldPass && "error"}/> {this.state.msg.oldPass && (
                                        <div className="exclam">
                                            <img src="/img/exclam-ico.png" alt=""/>
                                        </div>
                                    )}
                                </div>

                                <div className="input-title">Новый пароль</div>
                                <div
                                    className="simple-input"
                                    data-tip={this.state.msg.newPass
                                    ? this.state.msg.newPass
                                    : ''}>
                                    <input
                                        type="password"
                                        onChange={this.onChange}
                                        name="newPass"
                                        value={this.state.newPass}
                                        placeholder="xxxxxx"
                                        className={this.state.msg.newPass && "error"}/> {this.state.msg.newPass && (
                                        <div className="exclam">
                                            <img src="/img/exclam-ico.png" alt=""/>
                                        </div>
                                    )}
                                </div>

                                <div className="input-title">Повторите новый пароль</div>
                                <div
                                    className="simple-input"
                                    data-tip={this.state.msg.newPass2
                                    ? this.state.msg.newPass2
                                    : ''}>
                                    <input
                                        type="password"
                                        onChange={this.onChange}
                                        name="newPass2"
                                        value={this.state.newPass2}
                                        placeholder="xxxxxx"
                                        className={this.state.msg.newPass2 && "error"}/> {this.state.msg.newPass2 && (
                                        <div className="exclam">
                                            <img src="/img/exclam-ico.png" alt=""/>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn">Cохранить</button>
                    <ReactTooltip type="error" effect="solid" place="right"/>
                </form>

            </div>
        )
    }
}

const mapStateToProps = state => ({isAuth: state.auth.isAuthenticated, isLoading: state.auth.isLoading, user: state.auth.user, error: state.error})

export default connect(mapStateToProps, {editMail, editPass, clearErrors})(cabinetUser);